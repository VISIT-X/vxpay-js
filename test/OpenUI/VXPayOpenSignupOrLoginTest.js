import {afterEach, beforeEach, describe, it} from 'mocha';
import {assert}                              from 'chai';
import sinon                                 from 'sinon';
import VXPay                                 from '../../src/VXPay';
import VXPayConfig                           from '../../src/VXPay/VXPayConfig';
import VXPayTestFx                           from './../Fixtures/VXPayTestFx';
import VXPayHelperFrame                      from '../../src/VXPay/Dom/Frame/VXPayHelperFrame';
import VXPayHelper                           from '../../src/VXPay/Middleware/Frames/VXPayHelper';
import VXPayHasSessionCookieMessage          from '../../src/VXPay/Message/VXPayHasSessionCookieMessage';

/**
 * @link https://sinonjs.org/releases/latest/sandbox/
 */
describe('#openSignUpOrLogin()', () => {
	const sandbox = sinon.createSandbox();

	/** @var {VXPay} */
	let VxPayJs;

	/**
	 * @param {VXPay} vxpay
	 * @param {Function} resolve
	 */
	const replaceHelperFrameWithNoCookie = (vxpay, resolve) => {
		vxpay.helperFrame            = new VXPayHelperFrame(VXPayTestFx.getDocument(), 'https://www.example.com');
		vxpay.helperFrame._cookieMsg = new VXPayHasSessionCookieMessage();
		resolve(vxpay);
	};

	/**
	 * @param {VXPay} vxpay
	 * @param {Function} resolve
	 */
	const replaceHelperFrameWithCookie = (vxpay, resolve) => {
		vxpay.helperFrame            = new VXPayHelperFrame(VXPayTestFx.getDocument(), 'https://www.example.com');
		vxpay.helperFrame._cookieMsg = new VXPayHasSessionCookieMessage(true);
		resolve(vxpay);
	};

	const resolveGlobalVxPay = () => {
		return new Promise(resolve => {
			resolve(VxPayJs);
		});
	};

	beforeEach(() => {
		VxPayJs = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
	});

	afterEach(sandbox.restore);

	it('Should return a Promise', () => assert.instanceOf(VxPayJs.openSignUpOrLogin(), Promise));
	it('Opens signup when NO cookie', (done) => {
		sandbox.stub(VXPayHelper, 'init').callsFake(replaceHelperFrameWithNoCookie);
		sandbox.stub(VxPayJs, 'openSignUp').callsFake(resolveGlobalVxPay);
		sandbox.spy(VxPayJs, 'openLogin');

		VxPayJs.openSignUpOrLogin().then((vxpay) => {
			assert.instanceOf(vxpay, VXPay);
			assert.isTrue(VxPayJs.openSignUp.called);
			assert.isFalse(VxPayJs.openLogin.called);
			done();
		});
	});
	it('Opens login when HAS cookie', (done) => {
		sandbox.stub(VXPayHelper, 'init').callsFake(replaceHelperFrameWithCookie);
		sandbox.stub(VxPayJs, 'openLogin').callsFake(resolveGlobalVxPay);
		sandbox.spy(VxPayJs, 'openSignUp');

		VxPayJs.openSignUpOrLogin().then((vxpay) => {
			assert.instanceOf(vxpay, VXPay);
			assert.isFalse(VxPayJs.openSignUp.called);
			assert.isTrue(VxPayJs.openLogin.called);
			done();
		});
	});
});
