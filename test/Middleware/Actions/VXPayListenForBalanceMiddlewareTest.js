import {assert}                   from 'chai'
import {describe, it, beforeEach} from 'mocha'
import VXPay                      from './../../../src/VXPay'
import VXPayConfig                from './../../../src/VXPay/VXPayConfig'
import VXPayTestFx                from './../../Fixtures/VXPayTestFx'
import VXPayListenForBalance      from '../../../src/VXPay/Middleware/Actions/VXPayListenForBalance'

describe('VXPayListenForBalance', () => {

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

			assert.isFalse(vxpay._hooks.hasOnBalance(() => {}));

			const after = VXPayListenForBalance(vxpay, handler, handler);
			assert.instanceOf(after, VXPay);

			// should have a onBalance handler
			assert.isTrue(vxpay._hooks.hasOnBalance(handler));
		});

		it('Should not set the hooks on consecutive call', () => {
			const handler = () => {};

			VXPayListenForBalance(vxpay, handler, handler);
			assert.equal(1, vxpay._hooks.onBalance.length);

			// call again - not another hook set
			VXPayListenForBalance(vxpay, handler, handler);
			assert.equal(1, vxpay._hooks.onBalance.length);
		});
		it('Should reject on error', done => {
			// unset payment frame
			vxpay._hooks = undefined;

			const reject = (err) => {
				assert.instanceOf(err, Error);
				done();
			};

			const after = VXPayListenForBalance(vxpay, () => {}, reject);
			assert.instanceOf(after, VXPay);
		})
	});
});