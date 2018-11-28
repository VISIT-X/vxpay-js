import {assert}                      from 'chai';
import {describe, it, beforeEach}    from 'mocha';
import sinon                         from 'sinon';
import VXPay                         from './../../../src/VXPay';
import VXPayConfig                   from './../../../src/VXPay/VXPayConfig';
import VXPayTestFx                   from './../../Fixtures/VXPayTestFx';
import VXPayBalanceTriggerMiddleware from './../../../src/VXPay/Middleware/Actions/VXPayBalanceTriggerMiddleware';
import VXPayGetBalanceMessage        from './../../../src/VXPay/Message/Actions/VXPayGetBalanceMessage';

describe('VXPayActiveAbosTriggerMiddleware', () => {

	/** @var {VXPay} */
	let vxpay;

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		vxpay._initPaymentFrame();
		done();
	});

	describe('#run()', () => {
		it('Should send a postMessage if token already received', () => {
			// mock postMessage
			sinon.spy(vxpay._paymentFrame, 'postMessage');

			// call middleware
			const after = VXPayBalanceTriggerMiddleware(vxpay);
			assert.instanceOf(after, VXPay);

			// check post message sent (compare in JSON)
			assert.equal(
				JSON.stringify(vxpay._paymentFrame.postMessage.getCall(0).args[0]),
				(new VXPayGetBalanceMessage).toString()
			);

			// clean up
			vxpay._paymentFrame.postMessage.restore();
		});
	});
});