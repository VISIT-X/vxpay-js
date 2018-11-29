import {afterEach, beforeEach, describe, it} from 'mocha';
import {assert}                              from 'chai';
import sinon                                 from 'sinon';
import VXPayTokenForTab                      from '../src/VXPay/Middleware/Frames/VXPayTokenForTab';
import VXPayShowForTab                       from '../src/VXPay/Middleware/Frames/VXPayShowForTab';
import VXPayWhen                             from '../src/VXPay/Middleware/VXPayWhen';
import VXPayLogin                            from '../src/VXPay/Middleware/Command/VXPayLogin';
import VXPaySignUp                           from '../src/VXPay/Middleware/Command/VXPaySignUp';
import VXPay                                 from '../src/VXPay';
import VXPayConfig                           from '../src/VXPay/VXPayConfig';
import VXPayTestFx                           from './Fixtures/VXPayTestFx';
import VXPayVoiceCall                        from '../src/VXPay/Middleware/Command/VXPayVoiceCall';
import VXPayTransferTokenMessage             from '../src/VXPay/Message/VXPayTransferTokenMessage';

const storeLogs = string => logs.push(string);

/** @var {VXPay} */
let VxPayJs = {};
let logs    = [];

beforeEach(() => {
	VxPayJs = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
	sinon.stub(VxPayJs._logger, 'log').callsFake(storeLogs);

	// set spies for common middleware
	sinon.spy(VXPayTokenForTab, 'reset');
	sinon.spy(VXPayShowForTab, 'trigger');
	sinon.spy(VXPayWhen, 'tokenTransferred');
});

afterEach(() => {
	logs = [];

	// restore common spies
	VXPayTokenForTab.reset.restore();
	VXPayShowForTab.trigger.restore();
	VXPayWhen.tokenTransferred.restore();
});

describe('VXPay opens UI', () => {
	describe('#openLogin()', () => {
		it('Should return a Promise', () => assert.instanceOf(VxPayJs.openLogin(), Promise));
		it('Resets token for tab', () => {
			VxPayJs.openLogin().then(done => {
				assert.isTrue(VXPayTokenForTab.reset.called, 'Token was not reset for tab');
				done();
			});
		});
		it('Triggers show for tab', () => {
			VxPayJs.openLogin().then(done => {
				assert.isTrue(VXPayShowForTab.trigger.called, 'Show was not triggered for tab');
				done();
			});
		});
		it('Waits until token is transferred', () => {
			VxPayJs.openLogin().then(done => {
				assert.isTrue(VXPayWhen.tokenTransferred.called, 'Token was not transferred');
				done();
			});
		});
		it('Calls the tab/frame to open login', () => {
			sinon.spy(VXPayLogin, 'open');

			// mark token as transferred
			VxPayJs.state.markHasToken(new VXPayTransferTokenMessage('test'));

			VxPayJs.openLogin().then(done => {
				assert.isTrue(VXPayLogin.open.called, 'Login was not opened');
				VXPayLogin.open.restore();
				done();
			});
		});
	});
	describe('#openSignUp()', () => {
		it('Should return a Promise', () => assert.instanceOf(VxPayJs.openSignUp(), Promise));
		it('Resets token for tab', () => {
			VxPayJs.openSignUp().then(done => {
				assert.isTrue(VXPayTokenForTab.reset.called, 'Token was not reset for tab');
				done();
			});
		});
		it('Triggers show for tab', () => {
			VxPayJs.openSignUp().then(done => {
				assert.isTrue(VXPayShowForTab.trigger.called, 'Show was not triggered for tab');
				done();
			});
		});
		it('Waits until token is transferred', () => {
			VxPayJs.openSignUp().then(done => {
				assert.isTrue(VXPayWhen.tokenTransferred.called, 'Token was not transferred');
				done();
			});
		});
		it('Calls the tab/frame to open login', () => {
			sinon.spy(VXPaySignUp, 'open');

			// mark token as transferred
			VxPayJs.state.markHasToken(new VXPayTransferTokenMessage('test'));

			VxPayJs.openSignUp().then(done => {
				assert.isTrue(VXPaySignUp.open.called, 'Sign-up was not opened');
				VXPayLogin.open.restore();
				done();
			});
		});
	});
	describe('#openVoiceCall()', () => {
		it('Should return a Promise', () => assert.instanceOf(VxPayJs.openVoiceCall(), Promise));
		it('Resets token for tab', () => {
			VxPayJs.openVoiceCall().then(done => {
				assert.isTrue(VXPayTokenForTab.reset.called, 'Token was not reset for tab');
				done();
			});
		});
		it('Triggers show for tab', () => {
			VxPayJs.openVoiceCall().then(done => {
				assert.isTrue(VXPayShowForTab.trigger.called, 'Show was not triggered for tab');
				done();
			});
		});
		it('Waits until token is transferred', () => {
			VxPayJs.openVoiceCall().then(done => {
				assert.isTrue(VXPayWhen.tokenTransferred.called, 'Token was not transferred');
				done();
			});
		});
		it('Calls the tab/frame to open login', () => {
			sinon.spy(VXPayVoiceCall, 'open');

			VxPayJs.openSignUp().then(done => {
				assert.isTrue(VXPayVoiceCall.open.called, 'Voice call was not opened');
				VXPayLogin.open.restore();
				done();
			});
		});
	});
});