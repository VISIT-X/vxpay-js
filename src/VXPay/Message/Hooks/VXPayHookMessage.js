import VXPayMessage from './../../VXPayMessage';

class VXPayHookMessage extends VXPayMessage {

	/**
	 * @param {string} hook
	 */
	constructor(hook = VXPayHookMessage.H_NA) {
		super(VXPayMessage.T_HOOK);
		this.hook = hook;
	}
}

VXPayHookMessage.H_NA             = 'dummy-unknown';
VXPayHookMessage.H_FLOW           = 'flowChanged';
VXPayHookMessage.H_LOGIN          = 'login';
VXPayHookMessage.H_PAYMENT        = 'payment';
VXPayHookMessage.H_SIGNUP         = 'signup';
VXPayHookMessage.H_C_SETTINGS     = 'comfortSettingsChanged';
VXPayHookMessage.H_E_VERIFIED     = 'emailVerified';
VXPayHookMessage.H_E_NOT_VERIFIED = 'emailNotVerified';
VXPayHookMessage.H_PASS           = 'passwordChanged';

export default VXPayHookMessage;
