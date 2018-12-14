import {assert}                              from 'chai';
import sinon                                 from 'sinon';
import {describe, it, beforeEach, afterEach} from 'mocha';
import VXPay                                 from './../../../src/VXPay';
import VXPayConfig                           from './../../../src/VXPay/VXPayConfig';
import VXPayTestFx                           from './../../Fixtures/VXPayTestFx';
import VXPayLogin                            from '../../../src/VXPay/Middleware/Command/VXPayLogin';
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

describe('VXPayLogin', () => {
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
			assert.instanceOf(VXPayLogin.open(vxpay), VXPay);
		});
		it('Should log open', () => {
			sandbox.spy(vxpay._logger, 'log');

			VXPayLogin.open(vxpay);
			sandbox.assert.callCount(vxpay._logger.log, 4);
			assert.equal('VXPayLogin::open()', vxpay._logger.log.getCall(0).args[0]);
		});
		it('Should send correct flow', () => {
			// emulate frame loaded
			const fakeVxPay = new FakeVxPay(vxpay._paymentFrame);

			sandbox
				.stub(vxpay._paymentFrame, 'sendUpdateParams')
				.callsFake(function(params) {
					// check same flow
					assert.equal(params.flow, VXPayFlow.LOGIN);
					return vxpay._paymentFrame;
				});

			sandbox
				.stub(vxpay._paymentFrame, 'sendAdditionalOptions')
				.returns(vxpay._paymentFrame);

			sandbox
				.stub(vxpay._paymentFrame, 'changeRoute')
				.callsFake(function(route) {
					assert.equal(route, VXPayRoutes.LOGIN);
					return vxpay._paymentFrame
				});

			sandbox
				.stub(vxpay._paymentFrame, 'initSession')
				.returns(vxpay._paymentFrame);

			// mock functions to be called
			VXPayLogin.open(fakeVxPay);
		});
	});
});
