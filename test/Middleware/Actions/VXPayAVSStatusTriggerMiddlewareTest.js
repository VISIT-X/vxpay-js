import {assert}                   from 'chai';
import {describe, it, beforeEach} from 'mocha';
import sinon                      from 'sinon';
import VXPay                      from './../../../src/VXPay';
import VXPayConfig                from './../../../src/VXPay/VXPayConfig';
import VXPayTestFx                from './../../Fixtures/VXPayTestFx';
import VXPayAVSStatusTrigger      from '../../../src/VXPay/Middleware/Actions/VXPayAVSStatusTrigger';
import VXPayGetAVSStatusMessage   from './../../../src/VXPay/Message/Actions/VXPayGetAVSStatusMessage';

describe('VXPayAVSStatusTrigger', () => {

	/** @var {VXPay} */
	let vxpay;

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		vxpay._initPaymentFrame();
		done();
	});

	describe('#reset()', () => {
		it('Should send a message', () => {
			// mock message
			sinon.spy(vxpay._paymentFrame, 'message');

			// call middleware
			const after = VXPayAVSStatusTrigger(vxpay);

			// hooks count not changed
			assert.lengthOf(vxpay._hooks._onTransferToken, 2);
			assert.instanceOf(after, VXPay);

			// check post message sent (compare in JSON)
			assert.equal(
				JSON.stringify(vxpay._paymentFrame.message.getCall(0).args[0]),
				(new VXPayGetAVSStatusMessage).toString()
			);

			// clean up
			vxpay._paymentFrame.message.restore();
		});
	});
});
