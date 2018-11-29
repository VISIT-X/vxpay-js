import {assert}                   from 'chai'
import {describe, it, beforeEach} from 'mocha'
import VXPay                      from './../../../src/VXPay'
import VXPayConfig                from './../../../src/VXPay/VXPayConfig'
import VXPayTestFx                from './../../Fixtures/VXPayTestFx'
import VXPayListenForActiveAbos   from '../../../src/VXPay/Middleware/Actions/VXPayListenForActiveAbos'

describe('VXPayListenForActiveAbos', () => {

	/** @var {VXPay} */
	let vxpay;

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		vxpay._initPaymentFrame();
		done();
	});

	describe('#reset()', () => {
		it('Should set a hook if not yet set up', () => {
			const handler = () => {};

			// should not have a onIsLoggedIn handler
			assert.isFalse(vxpay._hooks.hasOnActiveAbos(handler));

			const after = VXPayListenForActiveAbos(vxpay, handler, handler);

			// and now SHOULD have
			assert.isTrue(vxpay._hooks.hasOnActiveAbos(handler));
			assert.instanceOf(after, VXPay);
		});
		it('Should not set the hooks on consecutive call', () => {
			const handler = () => {};

			VXPayListenForActiveAbos(vxpay, handler, handler);
			assert.equal(1, vxpay._hooks.onActiveAbos.length);

			// call again - not another hook set
			VXPayListenForActiveAbos(vxpay, handler, handler);
			assert.equal(1, vxpay._hooks.onActiveAbos.length);
		});
		it('Should reject on error', done => {
			// unset payment frame
			vxpay._hooks = undefined;

			const reject = (err) => {
				assert.instanceOf(err, Error);
				done();
			};

			const after = VXPayListenForActiveAbos(vxpay, () => {}, reject);
			assert.instanceOf(after, VXPay);
		})
	});
});
