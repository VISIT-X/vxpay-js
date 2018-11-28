import {assert}                     from 'chai'
import {describe, it, beforeEach}          from 'mocha'
import sinon                        from 'sinon'
import VXPayTestFx                  from './../../Fixtures/VXPayTestFx'
import VXPay                        from './../../../src/VXPay'
import VXPayConfig                  from './../../../src/VXPay/VXPayConfig'
import VXPayLogoutTriggerMiddleware from './../../../src/VXPay/Middleware/Actions/VXPayLogoutTriggerMiddleware'
import VXPayTransferTokenMessage    from './../../../src/VXPay/Message/VXPayTransferTokenMessage'
import VXPayLogoutMessage           from './../../../src/VXPay/Message/Actions/VXPayLogoutMessage'
import VXPayPaymentHooksConfig      from './../../../src/VXPay/Config/VXPayPaymentHooksConfig';

describe('VXPayLogoutTriggerMiddleware', () => {

	/** @var {VXPay} */
	let vxpay;

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		vxpay._initPaymentFrame();
		done();
	});

	describe('#run()', () => {
		it('Should set a hook if token not yet received', () => {
			// should have 2 default handlers
			assert.lengthOf(vxpay._hooks._onTransferToken, 2);

			const after = VXPayLogoutTriggerMiddleware(vxpay);

			// and now another one
			assert.lengthOf(vxpay._hooks._onTransferToken, 3);
			assert.instanceOf(after, VXPay);
		});
		it('Should NOT set the hooks on consecutive call', () => {
			VXPayLogoutTriggerMiddleware(vxpay);
			assert.lengthOf(vxpay._hooks._onTransferToken, 3);

			// call again - not another hook set
			VXPayLogoutTriggerMiddleware(vxpay);
			assert.lengthOf(vxpay._hooks._onTransferToken, 3);
		});
		it('Should send a postMessage if token already present', () => {
			// mark token
			vxpay.state.markHasToken(new VXPayTransferTokenMessage('token'));

			// mock
			sinon.spy(vxpay._paymentFrame, 'postMessage');

			// run
			VXPayLogoutTriggerMiddleware(vxpay);

			// check mock
			assert.isTrue(vxpay._paymentFrame.postMessage.called);
			assert.equal(
				JSON.stringify(vxpay._paymentFrame.postMessage.getCall(0).args[0]),
				(new VXPayLogoutMessage).toString()
			);

			// clean up
			vxpay._paymentFrame.postMessage.restore();
		});
		it('Should send a postMessage when token received', () => {
			// mock
			sinon.spy(vxpay._paymentFrame, 'postMessage');

			// run
			VXPayLogoutTriggerMiddleware(vxpay);

			// mark token
			vxpay._hooks.trigger(
				VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN,
				[new VXPayTransferTokenMessage('token')]
			);

			// check mock
			assert.isTrue(vxpay.state.hasToken);
			assert.isTrue(vxpay._paymentFrame.postMessage.called);
			assert.equal(
				JSON.stringify(vxpay._paymentFrame.postMessage.getCall(0).args[0]),
				(new VXPayLogoutMessage).toString()
			);

			// clean up
			vxpay._paymentFrame.postMessage.restore();
		})
	});
});
