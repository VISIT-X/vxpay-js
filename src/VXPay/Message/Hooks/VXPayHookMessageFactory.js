import VXPayHookMessage                       from './VXPayHookMessage'
import VXPayFlowChangedHookMessage            from './VXPayFlowChangedMessage'
import VXPayLoggedInMessage                   from './VXPayLoggedInMessage'
import VXPayHookPaymentMessage                from './VXPayHookPaymentMessage';
import VXPayHookSignupMessage                 from './VXPayHookSignupMessage';
import VXPayHookComfortSettingsChangedMessage from './VXPayHookComfortSettingsChangedMessage';
import VXPayHookEmailVerifiedMessage          from './VXPayHookEmailVerifiedMessage';
import VXPayHookEmailNotVerifiedMessage       from './VXPayHookEmailNotVerifiedMessage';
import VXPayHookPasswordChangedMessage        from './VXPayHookPasswordChangedMessage';

export default class VXPayHookMessageFactory {

	/**
	 * @param data
	 * @return {VXPayHookMessage}
	 */
	static fromData(data = {}) {
		if (typeof data === 'undefined' || !data.hasOwnProperty('hook')) {
			throw new TypeError('Invalid message format - no hook field');
		}

		switch (data.hook) {
			case VXPayHookMessage.HOOK_FLOW_CHANGED:
				return new VXPayFlowChangedHookMessage(data.prevFlow, data.flow);

			case VXPayHookMessage.HOOK_LOGIN:
				return new VXPayLoggedInMessage();

			case VXPayHookMessage.HOOK_PAYMENT:
				return new VXPayHookPaymentMessage();

			case VXPayHookMessage.HOOK_SIGNUP:
				return new VXPayHookSignupMessage();

			case VXPayHookMessage.HOOK_COMFORT_SETTINGS_CHANGED:
				return new VXPayHookComfortSettingsChangedMessage();

			case VXPayHookMessage.HOOK_EMAIL_VERIFIED:
				return new VXPayHookEmailVerifiedMessage();

			case VXPayHookMessage.HOOK_EMAIL_NOT_VERIFIED:
				return new VXPayHookEmailNotVerifiedMessage();

			case VXPayHookMessage.HOOK_PASSWORD_CHANGED:
				return new VXPayHookPasswordChangedMessage();

			default:
				return new VXPayHookMessage();
		}
	}
}
