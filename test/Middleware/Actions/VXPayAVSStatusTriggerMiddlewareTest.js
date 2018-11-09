import {assert}                        from 'chai';
import {describe, it, beforeEach}      from 'mocha';
import sinon                           from 'sinon';
import VXPay                           from './../../../src/VXPay';
import VXPayConfig                     from './../../../src/VXPay/VXPayConfig';
import VXPayTestFx                     from './../../Fixtures/VXPayTestFx';
import VXPayAVSStatusTriggerMiddleware from './../../../src/VXPay/Middleware/Actions/VXPayAVSStatusTriggerMiddleware';
import VXPayGetAVSStatusMessage        from './../../../src/VXPay/Message/Actions/VXPayGetAVSStatusMessage';

describe('VXPayAVSStatusTriggerMiddleware', () => {

	/** @var {VXPay} */
	let vxpay;

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		vxpay._initPaymentFrame();
		done();
	});

	describe('#run()', () => {
		it('Should send a postMessage', () => {
			// mock postMessage
			sinon.spy(vxpay._paymentFrame, 'postMessage');

			// call middleware
			const after = VXPayAVSStatusTriggerMiddleware(vxpay);

			// hooks count not changed
			assert.lengthOf(vxpay.hooks._onTransferToken, 2);
			assert.instanceOf(after, VXPay);

			// check post message sent (compare in JSON)
			assert.equal(
				JSON.stringify(vxpay._paymentFrame.postMessage.getCall(0).args[0]),
				(new VXPayGetAVSStatusMessage).toString()
			);

			// clean up
			vxpay._paymentFrame.postMessage.restore();
		});
	});
});
