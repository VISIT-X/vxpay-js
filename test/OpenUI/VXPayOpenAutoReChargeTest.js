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
import VXPayAutoRecharge                     from '../../src/VXPay/Middleware/Command/VXPayAutoRecharge';

/**
 * @link https://sinonjs.org/releases/latest/sandbox/
 */
describe('#openAutoReCharge()', () => {
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
		sandbox.stub(VXPayAutoRecharge, 'run').returns(VxPayJs);
	});

	afterEach(sandbox.restore);

	it('Should return a Promise', () => assert.instanceOf(VxPayJs.openAutoReCharge(), Promise));
	it('Resets token for tab', (done) => {
		VxPayJs.openAutoReCharge().then((vxpay) => {
			assert.instanceOf(vxpay, VXPay);
			sandbox.assert.calledOnce(VXPayTokenForTab.reset);
			done();
		});
	});
	it('Triggers show for tab', (done) => {
		VxPayJs.openAutoReCharge().then((vxpay) => {
			assert.instanceOf(vxpay, VXPay);
			sandbox.assert.calledOnce(VXPayShowForTab.trigger);
			done();
		});
	});
	it('Waits until token is transferred', (done) => {
		VxPayJs.openAutoReCharge().then((vxpay) => {
			assert.instanceOf(vxpay, VXPay);
			sandbox.assert.calledOnce(VXPayWhen.tokenTransferred);
			done();
		});
	});
	it('Calls the tab/frame to open login', (done) => {
		VxPayJs.openAutoReCharge().then((vxpay) => {
			assert.instanceOf(vxpay, VXPay);
			sandbox.assert.calledOnce(VXPayAutoRecharge.run);
			done();
		});
	});
	it('FLow options will be passed to open command', (done) => {
		const options = {'some': 'test'};

		VxPayJs.openAutoReCharge(options)
			.then((vxpay) => {
				assert.instanceOf(vxpay, VXPay);
				sandbox.assert.calledOnce(VXPayAutoRecharge.run);
				assert.equal(VXPayAutoRecharge.run.getCall(0).args[1], options, 'Options are not passed');
				done();
			});
	});
});
