import {assert}                              from 'chai';
import sinon                                 from 'sinon';
import {describe, it, beforeEach, afterEach} from 'mocha';
import VXPay                                 from './../../../src/VXPay';
import VXPayConfig                           from './../../../src/VXPay/VXPayConfig';
import VXPayTestFx                           from './../../Fixtures/VXPayTestFx';
import VXPaySignUp                           from '../../../src/VXPay/Middleware/Command/VXPaySignUp';
import VXPayPaymentFrame                     from '../../../src/VXPay/Dom/Frame/VXPayPaymentFrame';
import VXPayLogger                           from '../../../src/VXPay/VXPayLogger';
import VXPayFlow                             from '../../../src/VXPay/Config/VXPayFlow';
import VXPayRoutes                           from '../../../src/VXPay/Config/VXPayRoutes';

/**
 * Fake duck-typed VXPay implementation
 */
class FakeVxPay {
	constructor(pFrame) {
		this._paymentFrame = pFrame;
	}

	get logger() {
		return new VXPayLogger(true);
	}

	get config() {
		return new VXPayConfig(VXPayTestFx.getWindow());
	}

	get paymentFrame() {
		return new Promise((resolve) => {
			resolve(this._paymentFrame);
		});
	}
}

describe('VXPaySignUp', () => {
	/** @var {VXPay} */
	let vxpay;

	const sandbox = sinon.createSandbox();

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));

		// fake frame
		vxpay._paymentFrame = new VXPayPaymentFrame(
			VXPayTestFx.getWindow().document,
			'https://www.example.com',
			'test',
			vxpay._hooks
		);

		done();
	});

	afterEach(sandbox.restore);

	describe('#open()', () => {
		it('Should return a VXPay object', () => {
			assert.instanceOf(VXPaySignUp.open(vxpay), VXPay);
		});
		it('Should log open', () => {
			sandbox.spy(vxpay._logger, 'log');

			VXPaySignUp.open(vxpay);
			sandbox.assert.callCount(vxpay._logger.log, 4);
			assert.equal('VXPaySignUp::open()', vxpay._logger.log.getCall(0).args[0]);
		});
		it('Should send correct flow', () => {
			// emulate frame loaded
			const fakeVxPay = new FakeVxPay(vxpay._paymentFrame);

			sandbox
				.stub(vxpay._paymentFrame, 'sendUpdateParams')
				.callsFake(function(params) {
					// check same flow
					assert.equal(params.flow, VXPayFlow.SIGNUP);
					assert.equal(params.flow, VXPayFlow.LOGIN);
					return vxpay._paymentFrame;
				});

			sandbox
				.stub(vxpay._paymentFrame, 'sendAdditionalOptions')
				.returns(vxpay._paymentFrame);

			sandbox
				.stub(vxpay._paymentFrame, 'changeRoute')
				.callsFake(function(route) {
					assert.equal(route, VXPayRoutes.SIGN_UP);
					return vxpay._paymentFrame
				});

			sandbox
				.stub(vxpay._paymentFrame, 'initSession')
				.returns(vxpay._paymentFrame);

			// mock functions to be called
			VXPaySignUp.open(fakeVxPay);
		});
	});
});
