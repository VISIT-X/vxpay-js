import {assert}                              from 'chai';
import {describe, it, beforeEach, afterEach} from 'mocha';
import sinon                        from 'sinon';
import VXPayTestFx                  from '../../Fixtures/VXPayTestFx';
import VXPayHelperFrame             from '../../../src/VXPay/Dom/Frame/VXPayHelperFrame';
import VXPayHooksConfig             from '../../../src/VXPay/Config/VXPayHooksConfig';
import VXPayLoggedInMessage         from '../../../src/VXPay/Message/Hooks/VXPayLoggedInMessage';
import VXPayIsLoggedInActionMessage from '../../../src/VXPay/Message/Actions/VXPayIsLoggedInActionMessage';
import VXPayMessage                 from '../../../src/VXPay/VXPayMessage';

describe('VXPayHelperFrameTest', () => {

	/** @var {VXPayHelperFrame} */
	let frame;

	/** @var {Document} */
	let doc;

	/** @var {String} */
	let fid = 'test-frame-id';

	beforeEach(() => {
		doc   = VXPayTestFx.getDocument();
		frame = new VXPayHelperFrame(doc, 'https://example.com', fid);
	});

	describe('#triggerLoad()', () => {
		it('Should return if already loaded', () => {
			frame._loaded = true;
			assert.isFalse(frame.triggerLoad());
		});
		it('Should return TRUE when loads', () => {
			assert.isTrue(frame.triggerLoad());
		});
		it('Should insert an iFrame to DOM', () => {
			frame.triggerLoad();

			assert.isNotEmpty(doc.querySelectorAll('iframe'));

			const inserted = doc.querySelectorAll('iframe').item(0);

			assert.equal('vxpay-helper', inserted.name);
			assert.equal(fid, inserted.id);
		});
	});
	describe('#hooks()', () => {
		it('Should return an instance of hooks config', () => assert.instanceOf(frame.hooks, VXPayHooksConfig));
	});
	describe('#message()', () => {
		beforeEach(() => {
			frame._frame = {
				id:            fid,
				contentWindow: VXPayTestFx.getWindow(),
			};
			sinon.spy(frame._frame.contentWindow, 'postMessage');
		});

		afterEach(() => {
			frame._frame.contentWindow.postMessage.restore();
		});

		it('Should trigger before send hook', () => {
			sinon.spy(frame._hooks, 'trigger');
			const msg = new VXPayLoggedInMessage();

			frame.message(msg);

			assert.isTrue(frame._hooks.trigger.called);
			assert.equal(frame._hooks.trigger.getCall(0).args[0], VXPayHooksConfig.ON_BEFORE_SEND);
			assert.equal(JSON.stringify(frame._hooks.trigger.getCall(0).args[1]), JSON.stringify([msg]));
			assert.equal(frame._hooks.trigger.getCall(0).args[2], fid + '<VXPayHelperFrame>');

			frame._hooks.trigger.restore();
		});
		it('Should call parent message method', () => {
			frame.message(new VXPayLoggedInMessage());

			assert.isTrue(frame._frame.contentWindow.postMessage.called);
		});
		it('Should be able to accept origin param', () => {
			const message = new VXPayIsLoggedInActionMessage();
			const origin  = 'https://www.example.com';

			frame.message(message, origin);

			assert.equal(
				frame._frame.contentWindow.postMessage.getCall(0).args[1],
				origin
			);
		});
	});
	describe('#_markLoaded()', () => {
		it('Should call parent', () => {
			frame._markLoaded();
			assert.isTrue(frame._loaded);
		});
		it('Should trigger onLoad hook', () => {
			sinon.spy(frame._hooks, 'trigger');

			frame._markLoaded();

			assert.isTrue(frame._hooks.trigger.called);
			assert.equal(frame._hooks.trigger.getCall(0).args[0], VXPayHooksConfig.ON_LOAD);
			assert.isArray(frame._hooks.trigger.getCall(0).args[1]);
			assert.isEmpty(frame._hooks.trigger.getCall(0).args[1]);
			assert.equal(frame._hooks.trigger.getCall(0).args[2], fid + '<VXPayHelperFrame>');

			frame._hooks.trigger.restore();
		});
	});
	describe('#_cookieMessageHandler()', () => {
		let resolve;
		let reject;

		beforeEach(() => {
			resolve = sinon.fake();
			reject  = sinon.fake();
		});

		afterEach(() => {
			sinon.restore();
		});

		it('Rejects on invalid event origin', () => {
			const event = {
				origin: 'https://you.are.pawn.ed',
			};

			frame._cookieMessageHandler(resolve, reject, event);

			assert.equal(1, reject.callCount);
		});
		it('Resolves with no cookie on invalid data', done => {
			const event = {
				origin: VXPayHelperFrame.ORIGIN_VX,
				data: false,
			};

			frame._cookieMessageHandler(resolve, reject, event);

			assert.equal(1, resolve.callCount);
			frame.getLoginCookie().then(msg => {
				assert.isFalse(msg.hasCookie);
				done();
			});
		});
		it('Resolves cookie info on valid data', done => {
			const event = {
				origin: VXPayHelperFrame.ORIGIN_VX,
				data: VXPayTestFx.getMessage('has-login-cookie-true'),
			};

			frame._cookieMessageHandler(resolve, reject, event);

			assert.equal(1, resolve.callCount);
			frame.getLoginCookie().then(msg => {
				assert.isTrue(msg.hasCookie);
				done();
			});
		});
		it('Triggers a hook onAny', () => {
			sinon.spy(frame._hooks, 'trigger');
			const event = {
				origin: VXPayHelperFrame.ORIGIN_VX,
				data: VXPayTestFx.getMessage('has-login-cookie-true'),
			};

			frame._cookieMessageHandler(resolve, reject, event);

			assert.isTrue(frame._hooks.trigger.called);
			assert.equal(frame._hooks.trigger.getCall(0).args[0], VXPayHooksConfig.ON_ANY);
			assert.isArray(frame._hooks.trigger.getCall(0).args[1]);
			assert.equal(
				JSON.stringify(frame._hooks.trigger.getCall(0).args[1]),
				JSON.stringify([frame._cookieMsg])
			);
			assert.equal(frame._hooks.trigger.getCall(0).args[2], fid + '<VXPayHelperFrame>');

			frame._hooks.trigger.restore();
		})
	});
});
