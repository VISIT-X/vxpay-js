import {assert}                  from 'chai'
import {describe, it}            from 'mocha'
import VXPay                     from './../../../src/VXPay'
import VXPayConfig               from './../../../src/VXPay/VXPayConfig'
import VXPayTestFx               from './../../Fixtures/VXPayTestFx'
import VXPayWhenTokenTransferred from './../../../src/VXPay/Middleware/Condition/VXPayWhenTokenTransferred'
import VXPayTransferTokenMessage from './../../../src/VXPay/Message/VXPayTransferTokenMessage'
import VXPayPaymentHooksConfig   from "../../../src/VXPay/Config/VXPayPaymentHooksConfig";

describe('VXPayWhenTokenTransferred', () => {
	/** @var {VXPay} */
	let vxpay;

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		vxpay._initPaymentFrame();
		done();
	});

	describe('#run()', () => {
		it('Should return a Promise', () => {
			assert.instanceOf(VXPayWhenTokenTransferred(vxpay), Promise)
		});
		xit('Resolves when token already present', done => {
			vxpay.state.markHasToken(new VXPayTransferTokenMessage('token'));

			VXPayWhenTokenTransferred(vxpay)
				.then(returned => {
					assert.instanceOf(returned, VXPay);

					// ensure no hook
					assert.equal(2, returned.hooks._onTransferToken.length);
				})
				// instead of .finally(done)
				.then(done, done)
		});
		xit('Will resolve when token transferred', done => {
			assert.equal(2, vxpay.hooks._onTransferToken.length);

			VXPayWhenTokenTransferred(vxpay)
				.then(returned => {
					assert.instanceOf(returned, VXPay);

					// ensure has hook
					assert.equal(3, returned.hooks._onTransferToken.length);
				})
				.then(done, done);

			// trigger token event
			vxpay.hooks.trigger(
				VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN,
				[new VXPayTransferTokenMessage('token')]
			);
		});

		// this test does not make any sence any more as this
		// promise will not be reolsved until the frame loaded

//		it('Rejects on error', done => {
//			vxpay._config = undefined;
//
//			VXPayWhenTokenTransferred(vxpay)
//				.catch(err => {
//					assert.instanceOf(err, Error);
//					done();
//				})
//		});
	});
});
