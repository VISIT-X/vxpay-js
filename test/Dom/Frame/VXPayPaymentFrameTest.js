import {assert}                   from 'chai';
import {describe, it, beforeEach} from 'mocha';
import sinon                      from 'sinon';
import VXPayPaymentHooksConfig    from './../../../src/VXPay/Config/VXPayPaymentHooksConfig';
import VXPayPaymentFrame          from './../../../src/VXPay/Dom/Frame/VXPayPaymentFrame';
import VXPayTestFx                from './../../Fixtures/VXPayTestFx';
import VXPayFlow                  from '../../../src/VXPay/Config/VXPayFlow';
import VXPayLanguage              from '../../../src/VXPay/VXPayLanguage';
import VXPayRoutes                from '../../../src/VXPay/Config/VXPayRoutes';
import VXPayUpdateParamsMessage   from '../../../src/VXPay/Message/VXPayUpdateParamsMessage';
import VXPayChangeRouteMessage    from '../../../src/VXPay/Message/VXPayChangeRouteMessage';
import VXPayAdditionalOptions     from '../../../src/VXPay/Message/VXPayAdditionalOptions';
import VXPayIsVisibleMessage      from '../../../src/VXPay/Message/VXPayIsVisibleMessage';
import VXPayInitSessionMessage    from '../../../src/VXPay/Message/VXPayInitSessionMessage';
import EnumAllow                  from '../../../src/VXPay/Dom/Frame/EnumAllow';

describe('VXPayPaymentFrameTest', () => {

	/** @var {VXPayPaymentFrame} */
	let frame;

	/** @var {VXPayPaymentHooksConfig} */
	let hooks;

	/** @var {Document} */
	let doc;

	/** @var {String} */
	let fid = 'test-frame-id';

	beforeEach(done => {
		doc   = VXPayTestFx.getDocument();
		hooks = new VXPayPaymentHooksConfig();
		frame = new VXPayPaymentFrame(doc, 'https://example.com', fid, hooks);
		done();
	});

	describe('#triggerLoad()', done => {
		it('Should inject a frame into Document', () => {
			assert.isFalse(frame.loaded);
			hooks.onLoad(() => {
				assert.isTrue(frame.loaded);
				assert.equal(doc.getElementById(fid).length, 1);
				done();
			});
			frame.triggerLoad();
		});
		it('Should set `allow` attribute with defaults (camera and mic)', () => {
			assert.isFalse(frame.loaded);

			// check before load
			assert.equal(frame.frame.allow, EnumAllow.getDefaults().join(', '));

			// and after load
			hooks.onLoad(() => {
				assert.isTrue(frame.loaded);
				assert.equal(doc.getElementById(fid).length, 1);
				assert.equal(doc.getElementById(fid).allow, EnumAllow.getDefaults().join(', '));
				done();
			});
			frame.triggerLoad();
		});
		it('Should do nothing if loaded', () => {
			assert.isFalse(frame.loaded);
			frame._loaded = true;
			assert.isUndefined(frame.triggerLoad());
		});
	});

	describe('#removeFromDOM()', () => {
		it('Should call DOM method remove', () => {
			sinon.spy(frame._frame, 'remove');

			frame.removeFromDOM();

			assert.isTrue(frame._frame.remove.called);
			frame._frame.remove.restore();
		});
	});
	describe('#sendOptions()', () => {
		it('Should be chainable', () => {
			assert.instanceOf(frame.sendOptions({}), VXPayPaymentFrame);
		});
		it('Should send postMessage', () => {
			const options = {
				flow:     VXPayFlow.CHANGE_LS,
				language: VXPayLanguage.NL
			};

			// set mock
			sinon.spy(frame, 'message');

			// call
			frame.sendOptions(options);

			// check merge called with correct params
			assert.isTrue(frame.message.called);
			assert.equal(
				JSON.stringify(frame.message.getCall(0).args[0]),
				(new VXPayUpdateParamsMessage(options)).toString()
			);

			// cleanup
			frame.message.restore();
		});
	});
	describe('#changeRoute()', () => {
		it('Should be chainable', () => {
			assert.instanceOf(frame.changeRoute({}), VXPayPaymentFrame);
		});
		it('Should send postMessage', () => {
			const route = VXPayRoutes.ONE_CLICK;

			// set mock
			sinon.spy(frame, 'message');

			// call
			frame.changeRoute(route);

			// check merge called with correct params
			assert.isTrue(frame.message.called);
			assert.equal(
				JSON.stringify(frame.message.getCall(0).args[0]),
				(new VXPayChangeRouteMessage(route)).toString()
			);

			// cleanup
			frame.message.restore();
		});
	});
	describe('#sendAdditionalOptions()', () => {
		it('Should be chainable', () => {
			assert.instanceOf(frame.sendAdditionalOptions({}), VXPayPaymentFrame);
		});
		it('Should send postMessage', () => {
			const options = {
				flow:     VXPayFlow.CHANGE_LS,
				language: VXPayLanguage.NL
			};

			// set mock
			sinon.spy(frame, 'message');

			// call
			frame.sendAdditionalOptions(options);

			// check merge called with correct params
			assert.isTrue(frame.message.called);
			assert.equal(
				JSON.stringify(frame.message.getCall(0).args[0]),
				(new VXPayAdditionalOptions(options)).toString()
			);

			// cleanup
			frame.message.restore();
		});
	});
	describe('#sendUpdateParams()', () => {
		it('Should be chainable', () => {
			assert.instanceOf(frame.sendUpdateParams({}), VXPayPaymentFrame);
		});
		it('Should send postMessage', () => {
			const params = {
				some: 'test',
			};

			// set mock
			sinon.spy(frame, 'message');

			// call
			frame.sendUpdateParams(params);

			// check merge called with correct params
			assert.isTrue(frame.message.called);
			assert.equal(
				JSON.stringify(frame.message.getCall(0).args[0]),
				(new VXPayUpdateParamsMessage(params)).toString()
			);

			// cleanup
			frame.message.restore();
		});
	});
	describe('#setVisible()', () => {
		it('Should be chainable', () => {
			assert.instanceOf(frame.setVisible(), VXPayPaymentFrame);
		});
		it('Should send postMessage', () => {
			// set mock
			sinon.spy(frame, 'message');

			// call
			frame.setVisible();

			// check merge called with correct params
			assert.isTrue(frame.message.called);
			assert.equal(
				JSON.stringify(frame.message.getCall(0).args[0]),
				(new VXPayIsVisibleMessage()).toString()
			);

			// cleanup
			frame.message.restore();
		});
	});
	describe('#initSession()', () => {
		it('Should be chainable', () => {
			assert.instanceOf(frame.initSession(), VXPayPaymentFrame);
		});
		it('Should skip if initialized already', () => {
			frame._sessionInitialized = true;

			sinon.spy(frame, 'message');

			frame.initSession('test');
			assert.isFalse(frame.message.called);
		});
		it('Should send postMessage', () => {
			// set mock
			sinon.spy(frame, 'message');

			// call
			frame.initSession();

			// check merge called with correct params
			assert.isTrue(frame.message.called);

			// cleanup
			frame.message.restore();
		});
		it('Should send null if no token', () => {
			// set mock
			sinon.spy(frame, 'message');

			// call
			frame.initSession();

			assert.equal(
				JSON.stringify(frame.message.getCall(0).args[0]),
				(new VXPayInitSessionMessage(null)).toString()
			);

			// cleanup
			frame.message.restore();
		});
		it('Should save internal state', () => {
			// set mock
			sinon.spy(frame, 'message');

			// call
			frame.initSession();

			assert.isTrue(frame._sessionInitialized);

			// cleanup
			frame.message.restore();
		});
	});
});