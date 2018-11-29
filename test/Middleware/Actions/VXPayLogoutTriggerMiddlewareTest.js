import {assert}                   from 'chai'
import {describe, it, beforeEach} from 'mocha'
import sinon                      from 'sinon'
import VXPayTestFx                from './../../Fixtures/VXPayTestFx'
import VXPay                      from './../../../src/VXPay'
import VXPayConfig                from './../../../src/VXPay/VXPayConfig'
import VXPayLogoutTrigger         from '../../../src/VXPay/Middleware/Actions/VXPayLogoutTrigger'
import VXPayTransferTokenMessage  from './../../../src/VXPay/Message/VXPayTransferTokenMessage'
import VXPayLogoutMessage         from './../../../src/VXPay/Message/Actions/VXPayLogoutMessage'
import VXPayPaymentHooksConfig    from './../../../src/VXPay/Config/VXPayPaymentHooksConfig';

describe('VXPayLogoutTrigger', () => {

	/** @var {VXPay} */
	let vxpay;

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		vxpay._initPaymentFrame();
		done();
	});

	describe('#reset()', () => {
		it('Should set a hook if token not yet received', () => {
			// should have 2 default handlers
			assert.lengthOf(vxpay._hooks._onTransferToken, 2);

			const after = VXPayLogoutTrigger(vxpay);

			// and now another one
			assert.lengthOf(vxpay._hooks._onTransferToken, 3);
			assert.instanceOf(after, VXPay);
		});
		it('Should NOT set the hooks on consecutive call', () => {
			VXPayLogoutTrigger(vxpay);
			assert.lengthOf(vxpay._hooks._onTransferToken, 3);

			// call again - not another hook set
			VXPayLogoutTrigger(vxpay);
			assert.lengthOf(vxpay._hooks._onTransferToken, 3);
		});
		it('Should send a message if token already present', () => {
			// mark token
			vxpay.state.markHasToken(new VXPayTransferTokenMessage('token'));

			// mock
			sinon.spy(vxpay._paymentFrame, 'message');

			// reset
			VXPayLogoutTrigger(vxpay);

			// check mock
			assert.isTrue(vxpay._paymentFrame.message.called);
			assert.equal(
				JSON.stringify(vxpay._paymentFrame.message.getCall(0).args[0]),
				(new VXPayLogoutMessage).toString()
			);

			// clean up
			vxpay._paymentFrame.message.restore();
		});
		it('Should send a message when token received', () => {
			// mock
			sinon.spy(vxpay._paymentFrame, 'message');

			// reset
			VXPayLogoutTrigger(vxpay);

			// mark token
			vxpay._hooks.trigger(
				VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN,
				[new VXPayTransferTokenMessage('token')]
			);

			// check mock
			assert.isTrue(vxpay.state.hasToken);
			assert.isTrue(vxpay._paymentFrame.message.called);
			assert.equal(
				JSON.stringify(vxpay._paymentFrame.message.getCall(0).args[0]),
				(new VXPayLogoutMessage).toString()
			);

			// clean up
			vxpay._paymentFrame.message.restore();
		})
	});
});
