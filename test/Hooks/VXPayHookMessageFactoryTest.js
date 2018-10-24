import {assert}                               from 'chai';
import {describe, it}                         from 'mocha';
import VXPayHookMessageFactory                from './../../src/VXPay/Message/Hooks/VXPayHookMessageFactory';
import VXPayHookMessage                       from './../../src/VXPay/Message/Hooks/VXPayHookMessage';
import VXPayLoggedInMessage                   from './../../src/VXPay/Message/Hooks/VXPayLoggedInMessage';
import VXPayFlow                              from './../../src/VXPay/Config/VXPayFlow';
import VXPayFlowChangedHookMessage            from './../../src/VXPay/Message/Hooks/VXPayFlowChangedMessage';
import VXPayHookPaymentMessage                from './../../src/VXPay/Message/Hooks/VXPayHookPaymentMessage';
import VXPayHookSignupMessage                 from './../../src/VXPay/Message/Hooks/VXPayHookSignupMessage';
import VXPayHookComfortSettingsChangedMessage from './../../src/VXPay/Message/Hooks/VXPayHookComfortSettingsChangedMessage';
import VXPayHookEmailVerifiedMessage          from './../../src/VXPay/Message/Hooks/VXPayHookEmailVerifiedMessage';
import VXPayHookEmailNotVerifiedMessage       from './../../src/VXPay/Message/Hooks/VXPayHookEmailNotVerifiedMessage';
import VXPayHookPasswordChangedMessage        from './../../src/VXPay/Message/Hooks/VXPayHookPasswordChangedMessage';

describe('VXPayHookMessageFactory', () => {
	describe('#fromData', () => {
		it('Throws errors on empty data', () => {
			assert.throws(
				() => VXPayHookMessageFactory.fromData(),
				TypeError,
				'Invalid message format - no hook field'
			);
		});
		it('Throws errors on invalid data', () => {
			assert.throws(
				() => VXPayHookMessageFactory.fromData({foo: 'bar'}),
				TypeError,
				'Invalid message format - no hook field'
			);
		});
		it('Returns an abstract message when unknown hook received', () => {
			assert.instanceOf(
				VXPayHookMessageFactory.fromData({hook: 'dummy'}),
				VXPayHookMessage
			);
		});
		it('Returns VXPayLoggedInMessage on LOGIN', () => {
			assert.instanceOf(
				VXPayHookMessageFactory.fromData({hook: VXPayHookMessage.HOOK_LOGIN}),
				VXPayLoggedInMessage
			);
		});
		it('Returns VXPayFlowChangedHookMessage on change of flow', () => {
			const hook = {
				      hook:     VXPayHookMessage.HOOK_FLOW_CHANGED,
				      prevFlow: VXPayFlow.ONE_CLICK,
				      flow:     VXPayFlow.LOGIN
			      },
			      msg  = VXPayHookMessageFactory.fromData(hook);

			assert.instanceOf(msg, VXPayFlowChangedHookMessage);
			assert.equal(VXPayFlow.ONE_CLICK, msg.oldFlow);
			assert.equal(VXPayFlow.LOGIN, msg.newFlow);
		});
		it('Returns VXPayHookPaymentMessage on PAYMENT', () => {
			assert.instanceOf(
				VXPayHookMessageFactory.fromData({hook: VXPayHookMessage.HOOK_PAYMENT}),
				VXPayHookPaymentMessage
			);
		});
		it('Returns VXPayHookSignupMessage on SIGNUP', () => {
			assert.instanceOf(
				VXPayHookMessageFactory.fromData({hook: VXPayHookMessage.HOOK_SIGNUP}),
				VXPayHookSignupMessage
			);
		});
		it('Returns VXPayHookComfortSettingsChangedMessage on COMFORT_SETTINGS_CHANGED', () => {
			assert.instanceOf(
				VXPayHookMessageFactory.fromData({hook: VXPayHookMessage.HOOK_COMFORT_SETTINGS_CHANGED}),
				VXPayHookComfortSettingsChangedMessage
			);
		});
		it('Returns VXPayHookEmailVerifiedMessage on EMAIL_VERIFIED', () => {
			assert.instanceOf(
				VXPayHookMessageFactory.fromData({hook: VXPayHookMessage.HOOK_EMAIL_VERIFIED}),
				VXPayHookEmailVerifiedMessage
			);
		});
		it('Returns VXPayHookEmailNotVerifiedMessage on EMAIL_NOT_VERIFIED', () => {
			assert.instanceOf(
				VXPayHookMessageFactory.fromData({hook: VXPayHookMessage.HOOK_EMAIL_NOT_VERIFIED}),
				VXPayHookEmailNotVerifiedMessage
			);
		});
		it('Returns VXPayHookPasswordChangedMessage on PASSWORD_CHANGED', () => {
			assert.instanceOf(
				VXPayHookMessageFactory.fromData({hook: VXPayHookMessage.HOOK_PASSWORD_CHANGED}),
				VXPayHookPasswordChangedMessage
			);
		});
	});
});
