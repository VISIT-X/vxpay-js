import VXPayMessage from './../../VXPayMessage'

class VXPayHookMessage extends VXPayMessage {

	/**
	 * @param {string} hook
	 */
	constructor(hook = VXPayHookMessage.HOOK_UNKNOWN) {
		super(VXPayMessage.TYPE_HOOK);
		this.hook = hook;
	}
}

VXPayHookMessage.HOOK_UNKNOWN                  = 'dummy-unknown';
VXPayHookMessage.HOOK_FLOW_CHANGED             = 'flowChanged';
VXPayHookMessage.HOOK_LOGIN                    = 'login';
VXPayHookMessage.HOOK_PAYMENT                  = 'payment';
VXPayHookMessage.HOOK_SIGNUP                   = 'signup';
VXPayHookMessage.HOOK_COMFORT_SETTINGS_CHANGED = 'comfortSettingsChanged';
VXPayHookMessage.HOOK_EMAIL_VERIFIED           = 'emailVerified';
VXPayHookMessage.HOOK_EMAIL_NOT_VERIFIED       = 'emailNotVerified';
VXPayHookMessage.HOOK_PASSWORD_CHANGED         = 'passwordChanged';

export default VXPayHookMessage;
