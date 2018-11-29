import {assert}                   from 'chai';
import {describe, it, beforeEach} from 'mocha';
import sinon                      from 'sinon';
import VXPayTestFx                from './../../Fixtures/VXPayTestFx';
import VXPay                      from './../../../src/VXPay';
import VXPayConfig                from './../../../src/VXPay/VXPayConfig';
import VXPayOnAVSStatusListen     from '../../../src/VXPay/Middleware/Actions/VXPayOnAVSStatusListen';

describe('VXPayOnAVSStatusListen', () => {
	describe('#reset()', () => {

		/** @var {VXPay} */
		let vxpay;

		/** Setup VXPay object mock */
		beforeEach(done => {
			vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			vxpay._initPaymentFrame();
			done();
		});

		it('Should set a hook if not yet set', () => {
			const handler = () => {};
			assert.isFalse(vxpay._hooks.hasOnAVSStatus(handler));

			const after = VXPayOnAVSStatusListen(vxpay, handler, handler);

			assert.isTrue(vxpay._hooks.hasOnAVSStatus(handler));
			assert.instanceOf(after, VXPay);
		});
		it('Should NOT set a hook on consecutive call (for same handler)', () => {
			const handler = () => {};

			VXPayOnAVSStatusListen(vxpay, handler, () => {});
			assert.lengthOf(vxpay._hooks._onAVSStatus, 1);

			VXPayOnAVSStatusListen(vxpay, handler, () => {});
			assert.lengthOf(vxpay._hooks._onAVSStatus, 1);
		});
		it('Should reject on error', done => {
			const reject = (err) => {
				assert.instanceOf(err, Error);
				done();
			};

			vxpay._hooks = undefined;

			VXPayOnAVSStatusListen(vxpay, done, reject);
		});
	});
});
