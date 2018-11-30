import {assert}                              from 'chai';
import sinon                                 from 'sinon';
import {describe, it, beforeEach, afterEach} from 'mocha';
import VXPay                                 from '../../../src/VXPay';
import VXPayConfig                           from '../../../src/VXPay/VXPayConfig';
import VXPayTestFx                           from '../../Fixtures/VXPayTestFx';
import VXPayHelper                           from '../../../src/VXPay/Middleware/Frames/VXPayHelper';
import VXPayHelperFrame                      from '../../../src/VXPay/Dom/Frame/VXPayHelperFrame';

describe('Middleware -- Frame/VXPayHelper', () => {

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

	it('Should resolve if helper already initialized', () => {
		// not underfined
		vxpay._helperFrame = {};

		VXPayHelper.init(vxpay, resolve);

		assert.equal(1, resolve.callCount);
	});
	it('Should set new HelperFrame instance if not', () => {
		VXPayHelper.init(vxpay, resolve);

		assert.equal(1, resolve.callCount);
		assert.instanceOf(vxpay.helperFrame, VXPayHelperFrame);
	});
	it('Should set hooks for logging (when enabled)', () => {
		vxpay.config.logging = true;

		VXPayHelper.init(vxpay, resolve);

		assert.equal(1, resolve.callCount);
		assert.instanceOf(vxpay.helperFrame, VXPayHelperFrame);
		assert.equal(1, vxpay.helperFrame.hooks._onAny.length);
		assert.equal(1, vxpay.helperFrame.hooks._onBeforeSend.length);
	});
});
