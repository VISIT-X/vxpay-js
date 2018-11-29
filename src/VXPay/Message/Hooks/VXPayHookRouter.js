import VXPayMessageFactory     from './../VXPayMessageFactory'
import VXPayMessage            from './../../VXPayMessage'
import VXPayPaymentHooksConfig from './../../Config/VXPayPaymentHooksConfig'
import VXPayHookMessage        from './VXPayHookMessage'
import VXPayIframe             from './../../Dom/VXPayIframe'

/**
 * @param {VXPayPaymentHooksConfig} hooks
 * @param {MessageEvent|Object} event
 * @param {String|undefined} sourceTab
 * @return {boolean}
 * @throws {TypeError}
 * @constructor
 */
const VXPayHookRouter = (hooks, event, sourceTab = undefined) => {
	// origin check
	if (event.origin && VXPayIframe.ORIGIN_VX.indexOf(event.origin) === -1) {
		return false;
	}

	// parse message
	const message = VXPayMessageFactory.fromJson(event.data);

	// route any
	hooks.trigger(VXPayPaymentHooksConfig.ON_ANY, [message], sourceTab);

	switch (message.type) {
		case VXPayMessage.T_TOKEN:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN, [message], sourceTab);

		case VXPayMessage.T_AVS:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_AVS_STATUS, [message], sourceTab);

		case VXPayMessage.T_BALANCE:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_BALANCE, [message], sourceTab);

		case VXPayMessage.T_ABOS:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_ACTIVE_ABOS, [message], sourceTab);

		case VXPayMessage.T_IFR_RDY:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_IFRAME_READY, [message], sourceTab);

		case VXPayMessage.T_CONTENT:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_CONTENT_LOADED, [message], sourceTab);

		case VXPayMessage.T_VIEW_RDY:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_VIEW_READY, [message], sourceTab);

		case VXPayMessage.T_IFR_CLOSE:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_CLOSE, [message], sourceTab);

		case VXPayMessage.T_SUCCESS:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_SUCCESS, [message], sourceTab);

		case VXPayMessage.T_IS_LOGGED:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_IS_LOGGED_IN, [message], sourceTab);

		case VXPayMessage.T_LOGGED_OUT:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_LOGOUT, [message], sourceTab);

		case VXPayMessage.T_HOOK:
			switch (message.hook) {
				case VXPayHookMessage.H_LOGIN:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_LOGIN, [message], sourceTab);

				case VXPayHookMessage.H_FLOW:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_FLOW_CHANGE, [message], sourceTab);

				case VXPayHookMessage.H_PAYMENT:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_PAYMENT, [message], sourceTab);

				case VXPayHookMessage.H_SIGNUP:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_SIGNUP, [message], sourceTab);

				case VXPayHookMessage.H_C_SETTINGS:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_COMFORT_SETTINGS_CHANGE, [message], sourceTab);

				case VXPayHookMessage.H_E_VERIFIED:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_EMAIL_VERIFIED, [message], sourceTab);

				case VXPayHookMessage.H_E_NOT_VERIFIED:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_EMAIL_NOT_VERIFIED, [message], sourceTab);

				case VXPayHookMessage.H_PASS:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_PASSWORD_CHANGED, [message], sourceTab);
			}
	}
};

export default VXPayHookRouter;
