import {assert}                   from 'chai';
import {describe, it, beforeEach} from 'mocha';
import VXPay                      from './../../../src/VXPay';
import VXPayConfig                from './../../../src/VXPay/VXPayConfig';
import VXPayTestFx                from './../../Fixtures/VXPayTestFx';
import VXPayPayment               from './../../../src/VXPay/Middleware/Frames/VXPayPayment';
import VXPayPaymentTab            from './../../../src/VXPay/Dom/Frame/VXPayPaymentTab';
import VXPayPaymentFrame          from './../../../src/VXPay/Dom/Frame/VXPayPaymentFrame';

describe('VXPayInitPaymentMiddleware', () => {
	xdescribe('#reset()', () => {
		/** @var {VXPay} */
		let vxpay;

		/** Setup VXPay object mock */
		beforeEach(done => {
			vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			done();
		});

		it('Should resolve when already init', done => {
			const resolve = (mutated) => {
				assert.instanceOf(mutated, VXPay);
				done();
			};

			vxpay._initPaymentFrame();
			VXPayPayment.init(vxpay, resolve);
		});
		it('Should init a PaymentTab based on enableTab config', done => {
			const resolve = (mutated) => {
				assert.instanceOf(mutated.paymentFrame, VXPayPaymentTab);
				done();
			};

			vxpay.config.enableTab = true;
			VXPayPayment.init(vxpay, resolve);
		});
		it('Should init a PaymentFrame based on enableTab config', done => {
			vxpay.config.enableTab = false;
			vxpay._initPaymentFrame();

			const resolve = (mutated) => {
				assert.instanceOf(mutated.paymentFrame, VXPayPaymentFrame);
				done();
			};

			VXPayPayment.init(vxpay, resolve);
		});
	});
});
