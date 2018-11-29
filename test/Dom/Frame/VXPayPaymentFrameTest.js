import {assert}                   from 'chai';
import {describe, it, beforeEach} from 'mocha';
import sinon                      from 'sinon';
import VXPayPaymentHooksConfig    from './../../../src/VXPay/Config/VXPayPaymentHooksConfig';
import VXPayPaymentFrame        from './../../../src/VXPay/Dom/Frame/VXPayPaymentFrame';
import VXPayTestFx              from './../../Fixtures/VXPayTestFx';
import VXPayFlow                from '../../../src/VXPay/Config/VXPayFlow';
import VXPayLanguage            from '../../../src/VXPay/VXPayLanguage';
import VXPayRoutes              from '../../../src/VXPay/Config/VXPayRoutes';
import VXPayPaymentTab          from '../../../src/VXPay/Dom/Frame/VXPayPaymentTab';
import {given}                  from 'mocha-testdata';
import VXPayUpdateParamsMessage from '../../../src/VXPay/Message/VXPayUpdateParamsMessage';
import VXPayChangeRouteMessage  from '../../../src/VXPay/Message/VXPayChangeRouteMessage';

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
});