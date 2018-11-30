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
			case VXPayHookMessage.H_FLOW:
				return new VXPayFlowChangedHookMessage(data.prevFlow, data.flow);

			case VXPayHookMessage.H_LOGIN:
				return new VXPayLoggedInMessage();

			case VXPayHookMessage.H_PAYMENT:
				return new VXPayHookPaymentMessage();

			case VXPayHookMessage.H_SIGNUP:
				return new VXPayHookSignupMessage();

			case VXPayHookMessage.H_C_SETTINGS:
				return new VXPayHookComfortSettingsChangedMessage();

			case VXPayHookMessage.H_E_VERIFIED:
				return new VXPayHookEmailVerifiedMessage();

			case VXPayHookMessage.H_E_NOT_VERIFIED:
				return new VXPayHookEmailNotVerifiedMessage();

			case VXPayHookMessage.H_PASS:
				return new VXPayHookPasswordChangedMessage();

			default:
				return new VXPayHookMessage();
		}
	}
}
