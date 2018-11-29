import {afterEach, beforeEach, describe, it} from 'mocha';
import {assert}                              from 'chai';
import sinon                                 from 'sinon';
import VXPayTokenForTab                      from '../../src/VXPay/Middleware/Frames/VXPayTokenForTab';
import VXPayShowForTab                       from '../../src/VXPay/Middleware/Frames/VXPayShowForTab';
import VXPayWhen                             from '../../src/VXPay/Middleware/VXPayWhen';
import VXPay                                 from '../../src/VXPay';
import VXPayConfig                           from '../../src/VXPay/VXPayConfig';
import VXPayTestFx                           from './../Fixtures/VXPayTestFx';
import VXPayPayment                          from '../../src/VXPay/Middleware/Frames/VXPayPayment';
import VXPaySettings                         from '../../src/VXPay/Middleware/Command/VXPaySettings';

/**
 * @link https://sinonjs.org/releases/latest/sandbox/
 */
describe('#openSettings()', () => {
	const sandbox = sinon.createSandbox();

	/** @var {VXPay} */
	let VxPayJs;

	beforeEach(() => {
		VxPayJs = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));

		// fake the middleware to resolve with global object
		sandbox.stub(VXPayPayment, 'init').callsFake(VXPayTestFx.fakeInitPaymentFrame);
		sandbox.spy(VXPayTokenForTab, 'reset');
		sandbox.spy(VXPayShowForTab, 'trigger');
		sandbox.stub(VXPayWhen, 'tokenTransferred').callsFake(VXPayTestFx.resolveGlobalVxPay);
		sandbox.stub(VXPaySettings, 'open').callsFake(VXPayTestFx.resolveGlobalVxPay);
	});

	afterEach(sandbox.restore);

	it('Should return a Promise', () => assert.instanceOf(VxPayJs.openSettings(), Promise));
	it('Resets token for tab', done => {
		VxPayJs.openSettings().then(vxpay => {
			assert.instanceOf(vxpay, VXPay);
			assert.isTrue(VXPayTokenForTab.reset.called, 'Token was not reset for tab');
			done();
		});
	});
	it('Triggers show for tab', done => {
		VxPayJs.openSettings().then(vxpay => {
			assert.instanceOf(vxpay, VXPay);
			assert.isTrue(VXPayShowForTab.trigger.called, 'Show was not triggered for tab');
			done();
		});
	});
	it('Waits until token is transferred', done => {
		VxPayJs.openSettings().then(vxpay => {
			assert.instanceOf(vxpay, VXPay);
			assert.isTrue(VXPayWhen.tokenTransferred.called, 'Token was not transferred');
			done();
		});
	});
	it('Calls the tab/frame to open login', done => {
		VxPayJs.openSettings().then(vxpay => {
			assert.instanceOf(vxpay, VXPay);
			assert.isTrue(VXPaySettings.open.called, 'Voice call was not opened');
			done();
		});
	});
});
