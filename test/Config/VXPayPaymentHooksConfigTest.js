import {describe, it, beforeEach}    from 'mocha';
import {assert}                         from 'chai';
import VXPayPaymentHooksConfig          from './../../src/VXPay/Config/VXPayPaymentHooksConfig';
import VXPayTransferTokenMessage        from './../../src/VXPay/Message/VXPayTransferTokenMessage';
import VXPayHookPaymentMessage          from '../../src/VXPay/Message/Hooks/VXPayHookPaymentMessage';
import VXPayHookSignupMessage           from '../../src/VXPay/Message/Hooks/VXPayHookSignupMessage';
import VXPayHookEmailVerifiedMessage    from '../../src/VXPay/Message/Hooks/VXPayHookEmailVerifiedMessage';
import VXPayHookEmailNotVerifiedMessage from '../../src/VXPay/Message/Hooks/VXPayHookEmailNotVerifiedMessage';
import VXPayHookPasswordChangedMessage  from '../../src/VXPay/Message/Hooks/VXPayHookPasswordChangedMessage';


describe('VXPayPaymentHooksConfig', () => {

	/** @var {VXPayPaymentHooksConfig} hooks */
	let hooks;

	beforeEach(done => {
		hooks = undefined;
		hooks = new VXPayPaymentHooksConfig();
		done();
	});

	describe('#construct()', () => {
		it('Should not have any by default', () => {
			VXPayPaymentHooksConfig.getAvailable().forEach(name => {
				assert.isArray(hooks['_'+ name]);
				assert.isEmpty(hooks['_'+ name]);
			})
		});
	});
	describe('#hasOnTransferToken()', () => {
		it('Should be possible to check if handler is already set', () => {
			const handler = () => {};

			assert.isFalse(hooks.hasOnTransferToken(handler));
			hooks.onTransferToken(handler);
			assert.isTrue(hooks.hasOnTransferToken(handler));
		});
		it('Should be possible to set handler', () => {
			hooks.onTransferToken(msg => {
				assert.instanceOf(msg, VXPayTransferTokenMessage);
				assert.equal('token', msg.token);
			});

			hooks.trigger(
				VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN,
				[new VXPayTransferTokenMessage('token')]
			);
		});
	});
	describe('#clone()', () => {
		const handler = () => {};
		let cloned    = null;

		beforeEach(() => {
			hooks
				.onTransferToken(handler)
				.onTransferToken(handler)
				.onLogin(handler)
				.onSuccess(handler)
				.onSuccess(handler)
				.onSuccess(handler)
				.onFlowChange(handler)
				.onComfortSettingsChanged(handler);

			cloned = hooks.clone();
		});

		it('Should NOT return same instance', () => {
			// not same instances
			assert.notEqual(hooks._onTransferToken, cloned._onTransferToken);
			assert.notEqual(hooks._onLogin, cloned._onLogin);
			assert.notEqual(hooks._onSuccess, cloned._onSuccess);
			assert.notEqual(hooks._onFlowChange, cloned._onFlowChange);
			assert.notEqual(hooks._onComfortSettingsChanged, cloned._onComfortSettingsChanged);
			assert.notEqual(cloned, hooks);
		});
		it('Should return same content', () => {
			assert.include(hooks._onTransferToken, handler);
			assert.lengthOf(hooks._onTransferToken, 2);
			assert.include(hooks._onLogin, handler);
			assert.lengthOf(hooks._onLogin, 1);
			assert.include(hooks._onSuccess, handler);
			assert.lengthOf(hooks._onSuccess, 3);
			assert.include(hooks._onFlowChange, handler);
			assert.lengthOf(hooks._onFlowChange, 1);
			assert.include(hooks._onComfortSettingsChanged, handler);
			assert.lengthOf(hooks._onComfortSettingsChanged, 1);
		});
	});
	describe('#onPayment()', () => {
		it('Should be possible to set handler', () => {
			hooks.onPayment(msg => assert.instanceOf(msg, VXPayHookPaymentMessage));
			hooks.trigger(VXPayPaymentHooksConfig.ON_PAYMENT, [new VXPayHookPaymentMessage]);
		});
	});
	describe('#onSignup()', () => {
		it('Should be possible to set handler', () => {
			hooks.onSignup(msg => assert.instanceOf(msg, VXPayHookSignupMessage));
			hooks.trigger(VXPayPaymentHooksConfig.ON_SIGNUP, [new VXPayHookSignupMessage]);
		});
	});
	describe('#onEmailVerified()', () => {
		it('Should be possible to set handler', () => {
			hooks.onEmailVerified(msg => assert.instanceOf(msg, VXPayHookEmailVerifiedMessage));
			hooks.trigger(VXPayPaymentHooksConfig.ON_EMAIL_VERIFIED, [new VXPayHookEmailVerifiedMessage]);
		});
	});
	describe('#onEmailNotVerified()', () => {
		it('Should be possible to set handler', () => {
			hooks.onEmailNotVerified(msg => assert.instanceOf(msg, VXPayHookEmailNotVerifiedMessage));
			hooks.trigger(VXPayPaymentHooksConfig.ON_EMAIL_NOT_VERIFIED, [new VXPayHookEmailNotVerifiedMessage]);
		});
	});
	describe('#onPasswordChanged()', () => {
		it('Should be possible to set handler', () => {
			hooks.onPasswordChanged(msg => assert.instanceOf(msg, VXPayHookPasswordChangedMessage));
			hooks.trigger(VXPayPaymentHooksConfig.ON_PASSWORD_CHANGED, [new VXPayHookPasswordChangedMessage]);
		});
	});
});
