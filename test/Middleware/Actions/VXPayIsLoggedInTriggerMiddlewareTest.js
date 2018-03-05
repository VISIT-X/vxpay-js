import {assert}                         from 'chai'
import {describe, it}                   from 'mocha'
import sinon                            from 'sinon'
import VXPay                            from './../../../src/VXPay'
import VXPayConfig                      from './../../../src/VXPay/VXPayConfig'
import VXPayTestFx                      from './../../Fixtures/VXPayTestFx'
import VXPayIsLoggedInTriggerMiddleware from './../../../src/VXPay/Middleware/Actions/VXPayIsLoggedInTriggerMiddleware'
import VXPayIsLoggedInActionMessage     from './../../../src/VXPay/Message/Actions/VXPayIsLoggedInActionMessage'

describe('VXPayIsLoggedInTriggerMiddleware', () => {

	/** @var {VXPay} */
	let vxpay;

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		vxpay._initPaymentFrame();
		done();
	});

	xdescribe('#run()', () => {
		it('Should set a hook if not yet set up', () => {
			const handler = () => {};

			// should not have a onIsLoggedIn handler
			assert.isFalse(vxpay.hooks.hasOnIsLoggedIn(handler));

			const after = VXPayIsLoggedInTriggerMiddleware(vxpay, handler, handler);

			// and now SHOULD have
			assert.isTrue(vxpay.hooks.hasOnIsLoggedIn(handler));
			assert.instanceOf(after, VXPay);
		});
		it('Should not set the hooks on consecutive call', () => {
			const handler = () => {};

			VXPayIsLoggedInTriggerMiddleware(vxpay, handler, handler);
			assert.equal(1, vxpay.hooks._onIsLoggedIn.length);

			// call again - not another hook set
			VXPayIsLoggedInTriggerMiddleware(vxpay, handler, handler);
			assert.equal(1, vxpay.hooks._onIsLoggedIn.length);
		});
		it('Should send a postMessage when hook setup', () => {
			// mock postMessage
			sinon.spy(vxpay._paymentFrame, 'postMessage');

			// set dummy handler
			const handler = () => {};
			vxpay.hooks.onIsLoggedIn(handler);

			// call middleware
			const after = VXPayIsLoggedInTriggerMiddleware(vxpay, handler, handler);

			// check post message sent (compare in JSON)
			assert.equal(
				JSON.stringify(vxpay._paymentFrame.postMessage.getCall(0).args[0]),
				(new VXPayIsLoggedInActionMessage).toString()
			);
			assert.instanceOf(after, VXPay);
		});
		it('Should reject if the payment frame is not initialized', () => {
			const reject = (err) => {
				assert.instanceOf(err, Error);
			};

			// unset payment frame
			vxpay._paymentFrame = undefined;

			VXPayIsLoggedInTriggerMiddleware(vxpay, () => {
			}, reject);
		})
	});
});
