import {assert}                   from 'chai'
import {describe, it, beforeEach} from 'mocha'
import sinon                      from 'sinon'
import VXPay                      from './../../../src/VXPay'
import VXPayShowForTab            from '../../../src/VXPay/Middleware/Frames/VXPayShowForTab'
import VXPayTestFx                from './../../Fixtures/VXPayTestFx'
import VXPayConfig                from './../../../src/VXPay/VXPayConfig'

describe('VXPayShowForTab', () => {
	xdescribe('#reset()', () => {
		/** @var {VXPay} */
		let vxpay;

		/** Setup VXPay object mock */
		beforeEach(done => {
			vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			vxpay._initPaymentFrame().then(() => done());
		});

		it('Should return {VXPay}', () => assert.instanceOf(VXPayShowForTab(vxpay), VXPay))
		it('Should show frame if tab enabled', () => {
			vxpay.config.enableTab = true;

			// mock
			sinon.spy(vxpay._paymentFrame, 'show');

			// call!
			VXPayShowForTab(vxpay);

			assert.isTrue(vxpay._paymentFrame.show.called);

			// cleanup
			vxpay._paymentFrame.show.restore();
		})
	});
});
