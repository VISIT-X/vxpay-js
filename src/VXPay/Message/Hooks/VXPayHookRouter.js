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
		case VXPayMessage.TYPE_TRANSFER_TOKEN:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN, [message], sourceTab);

		case VXPayMessage.TYPE_AVS_STATUS:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_AVS_STATUS, [message], sourceTab);

		case VXPayMessage.TYPE_BALANCE:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_BALANCE, [message], sourceTab);

		case VXPayMessage.TYPE_ACTIVE_ABOS:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_ACTIVE_ABOS, [message], sourceTab);

		case VXPayMessage.TYPE_IFRAME_READY:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_IFRAME_READY, [message], sourceTab);

		case VXPayMessage.TYPE_CONTENT_LOADED:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_CONTENT_LOADED, [message], sourceTab);

		case VXPayMessage.TYPE_VIEW_READY:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_VIEW_READY, [message], sourceTab);

		case VXPayMessage.TYPE_IFRAME_CLOSE:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_CLOSE, [message], sourceTab);

		case VXPayMessage.TYPE_SUCCESS:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_SUCCESS, [message], sourceTab);

		case VXPayMessage.TYPE_IS_LOGGED_IN:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_IS_LOGGED_IN, [message], sourceTab);

		case VXPayMessage.TYPE_LOGGED_OUT:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_LOGOUT, [message], sourceTab);

		case VXPayMessage.TYPE_HOOK:
			switch (message.hook) {
				case VXPayHookMessage.HOOK_LOGIN:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_LOGIN, [message], sourceTab);

				case VXPayHookMessage.HOOK_FLOW_CHANGED:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_FLOW_CHANGE, [message], sourceTab);

				case VXPayHookMessage.HOOK_PAYMENT:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_PAYMENT, [message], sourceTab);

				case VXPayHookMessage.HOOK_SIGNUP:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_SIGNUP, [message], sourceTab);

				case VXPayHookMessage.HOOK_COMFORT_SETTINGS_CHANGED:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_COMFORT_SETTINGS_CHANGE, [message], sourceTab);

				case VXPayHookMessage.HOOK_EMAIL_VERIFIED:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_EMAIL_VERIFIED, [message], sourceTab);

				case VXPayHookMessage.HOOK_EMAIL_NOT_VERIFIED:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_EMAIL_NOT_VERIFIED, [message], sourceTab);

				case VXPayHookMessage.HOOK_PASSWORD_CHANGED:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_PASSWORD_CHANGED, [message], sourceTab);
			}
	}
};

export default VXPayHookRouter;
