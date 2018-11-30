import {afterEach, beforeEach, describe, it} from 'mocha';
import {assert}                              from 'chai';
import sinon                                 from 'sinon';
import VXPayTokenForTab                      from '../../src/VXPay/Middleware/Frames/VXPayTokenForTab';
import VXPayShowForTab                       from '../../src/VXPay/Middleware/Frames/VXPayShowForTab';
import VXPayWhen                             from '../../src/VXPay/Middleware/VXPayWhen';
import VXPaySignUp                           from '../../src/VXPay/Middleware/Command/VXPaySignUp';
import VXPay                                 from '../../src/VXPay';
import VXPayConfig                           from '../../src/VXPay/VXPayConfig';
import VXPayTestFx                           from './../Fixtures/VXPayTestFx';
import VXPayPayment                          from '../../src/VXPay/Middleware/Frames/VXPayPayment';

/**
 * @link https://sinonjs.org/releases/latest/sandbox/
 */
describe('#openSignUp()', () => {
	const sandbox = sinon.createSandbox();

	/** @var {VXPay} */
	let VxPayJs = {};

	beforeEach(() => {
		VxPayJs = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));

		// fake the middleware to resolve with global object
		sandbox.stub(VXPayPayment, 'init').callsFake(VXPayTestFx.fakeInitPaymentFrame);
		sandbox.spy(VXPayTokenForTab, 'reset');
		sandbox.spy(VXPayShowForTab, 'trigger');
		sandbox.stub(VXPayWhen, 'tokenTransferred').callsFake(VXPayTestFx.resolveGlobalVxPay);
		sandbox.stub(VXPaySignUp, 'open').callsFake(VXPayTestFx.resolveGlobalVxPay);
	});

	afterEach(sandbox.restore);

	it('Should return a Promise', () => assert.instanceOf(VxPayJs.openSignUp(), Promise));
	it('Resets token for tab', done => {
		VxPayJs.openSignUp().then(vxpay => {
			assert.instanceOf(vxpay, VXPay);
			assert.isTrue(VXPayTokenForTab.reset.called, 'Token was not reset for tab');
			done();
		});
	});
	it('Triggers show for tab', done => {
		VxPayJs.openSignUp().then(vxpay => {
			assert.instanceOf(vxpay, VXPay);
			assert.isTrue(VXPayShowForTab.trigger.called, 'Show was not triggered for tab');
			done();
		});
	});
	it('Waits until token is transferred', done => {
		VxPayJs.openSignUp().then(vxpay => {
			assert.instanceOf(vxpay, VXPay);
			assert.isTrue(VXPayWhen.tokenTransferred.called, 'Token was not transferred');
			done();
		});
	});
	it('Calls the tab/frame to open login', done => {
		VxPayJs.openSignUp().then(vxpay => {
			assert.instanceOf(vxpay, VXPay);
			assert.isTrue(VXPaySignUp.open.called, 'Sign-up was not opened');
			done();
		});
	});
	it('FLow options will be passed to open command', done => {
		const options = {'some': 'test'};

		VxPayJs.openSignUp(options)
			.then(vxpay => {
				assert.instanceOf(vxpay, VXPay);
				assert.isTrue(VXPaySignUp.open.called, 'Signup was not opened');
				assert.equal(VXPaySignUp.open.getCall(0).args[1], options, 'Options are not passed');
				done();
			});
	});
});
