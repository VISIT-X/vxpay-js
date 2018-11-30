import {afterEach, beforeEach, describe, it} from 'mocha';
import VXPay                                 from '../../../src/VXPay';
import VXPayConfig                           from '../../../src/VXPay/VXPayConfig';
import VXPayTestFx                           from '../../Fixtures/VXPayTestFx';
import sinon                                 from 'sinon';
import VXPayPayment                          from '../../../src/VXPay/Middleware/Frames/VXPayPayment';
import {assert}                              from 'chai';
import VXPayPaymentTab                       from '../../../src/VXPay/Dom/Frame/VXPayPaymentTab';

describe('Middleware -- Frame/VXPayPayment', () => {

	/** @var {VXPay} */
	let vxpay;

	/** @var {Function} */
	let resolve;

	/** Setup VXPay object mock */
	beforeEach(() => {
		vxpay   = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		resolve = sinon.fake();
	});

	afterEach(() => {
		sinon.restore();
	});

	it('Should log & resolve if frame content is loaded already', () => {
		vxpay.state.markContentLoaded();
		sinon.spy(vxpay._logger, 'log');

		VXPayPayment.init(vxpay, resolve);
		assert.equal(1, resolve.callCount);
		assert.equal(2, vxpay._logger.log.callCount);
		assert.equal(
			'VXPayInitPaymentMiddleware() - already loaded, resolve ...',
			vxpay._logger.log.getCall(1).args[0]
		);
	});
	it('Should log & resolve if frame is loading and NOT forced', () => {
		vxpay.state.isFrameInProgress = true;
		sinon.spy(vxpay._logger, 'log');

		VXPayPayment.init(vxpay, resolve, false);
		assert.equal(1, resolve.callCount);
		assert.equal(2, vxpay._logger.log.callCount);
		assert.equal(
			'VXPayInitPaymentMiddleware() - already in progress, resolve ...',
			vxpay._logger.log.getCall(1).args[0]
		);
	});
	it('Should ALWAYS open a new tab when tabEnabled = true', () => {
		vxpay.config.enableTab = true;
		sinon.spy(vxpay._logger, 'log');

		VXPayPayment.init(vxpay, resolve, false);
		assert.equal(1, resolve.callCount);
		assert.instanceOf(vxpay._paymentFrame, VXPayPaymentTab);

		assert.equal(vxpay._paymentFrame.config, vxpay.config);
		assert.equal(vxpay._paymentFrame._invisibleFrame._hooks, vxpay._hooks);
	});
});