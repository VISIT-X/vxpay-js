import VXPayHooksConfig from './VXPayHooksConfig';

class VXPayPaymentHooksConfig extends VXPayHooksConfig {
	constructor() {
		super();
		this._onViewReady              = [];
		this._onContentLoaded          = [];
		this._onClose                  = [];
		this._onSuccess                = [];
		this._onIframeReady            = [];
		this._onLogin                  = [];
		this._onLogout                 = [];
		this._onFlowChange             = [];
		this._onIsLoggedIn             = [];
		this._onTransferToken          = [];
		this._onAVSStatus              = [];
		this._onBalance                = [];
		this._onActiveAbos             = [];
		this._onPayment                = [];
		this._onSignup                 = [];
		this._onComfortSettingsChanged = [];
		this._onEmailVerified          = [];
		this._onEmailNotVerified       = [];
		this._onPasswordChanged        = [];
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onLogout(handler) {
		this._onLogout.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnLogout(handler) {
		return this._onLogout.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onActiveAbos(handler) {
		this._onActiveAbos.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnActiveAbos(handler) {
		return this._onActiveAbos.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onBalance(handler) {
		this._onBalance.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnBalance(handler) {
		return this._onBalance.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 */
	onAVSStatus(handler) {
		this._onAVSStatus.push(handler);
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnAVSStatus(handler) {
		return this._onAVSStatus.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onIsLoggedIn(handler) {
		this._onIsLoggedIn.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnIsLoggedIn(handler) {
		return this._onIsLoggedIn.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onTransferToken(handler) {
		this._onTransferToken.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnTransferToken(handler) {
		return this._onTransferToken.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onFlowChange(handler) {
		this._onFlowChange.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onLogin(handler) {
		this._onLogin.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onIframeReady(handler) {
		this._onIframeReady.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onClose(handler) {
		this._onClose.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onSuccess(handler) {
		this._onSuccess.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onViewReady(handler) {
		this._onViewReady.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onContentLoaded(handler) {
		this._onContentLoaded.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onPayment(handler) {
		this._onPayment.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onSignup(handler) {
		this._onSignup.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onComfortSettingsChanged(handler) {
		this._onComfortSettingsChanged.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onEmailVerified(handler) {
		this._onEmailVerified.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onEmailNotVerified(handler) {
		this._onEmailNotVerified.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onPasswordChanged(handler) {
		this._onPasswordChanged.push(handler);
		return this;
	}

	/**
	 * @return {VXPayPaymentHooksConfig}
	 */
	clone() {
		const clone                     = new VXPayPaymentHooksConfig();
		clone._onViewReady              = [...this._onViewReady];
		clone._onContentLoaded          = [...this._onContentLoaded];
		clone._onClose                  = [...this._onClose];
		clone._onSuccess                = [...this._onSuccess];
		clone._onIframeReady            = [...this._onIframeReady];
		clone._onLogin                  = [...this._onLogin];
		clone._onLogout                 = [...this._onLogout];
		clone._onFlowChange             = [...this._onFlowChange];
		clone._onIsLoggedIn             = [...this._onIsLoggedIn];
		clone._onTransferToken          = [...this._onTransferToken];
		clone._onAVSStatus              = [...this._onAVSStatus];
		clone._onBalance                = [...this._onBalance];
		clone._onActiveAbos             = [...this._onActiveAbos];
		clone._onPayment                = [...this._onPayment];
		clone._onSignup                 = [...this._onSignup];
		clone._onComfortSettingsChanged = [...this._onComfortSettingsChanged];
		clone._onEmailVerified          = [...this._onEmailVerified];
		clone._onEmailNotVerified       = [...this._onEmailNotVerified];
		clone._onAny                    = [...this._onAny];
		clone._onBeforeSend             = [...this._onBeforeSend];
		clone._onLoad                   = [...this._onLoad];
		return clone;
	}
}

VXPayPaymentHooksConfig.ON_VIEW_READY              = 'onViewReady';
VXPayPaymentHooksConfig.ON_IFRAME_READY            = 'onIframeReady';
VXPayPaymentHooksConfig.ON_CONTENT_LOADED          = 'onContentLoaded';
VXPayPaymentHooksConfig.ON_CLOSE                   = 'onClose';
VXPayPaymentHooksConfig.ON_SUCCESS                 = 'onSuccess';
VXPayPaymentHooksConfig.ON_LOGIN                   = 'onLogin';
VXPayPaymentHooksConfig.ON_LOGOUT                  = 'onLogout';
VXPayPaymentHooksConfig.ON_FLOW_CHANGE             = 'onFlowChange';
VXPayPaymentHooksConfig.ON_IS_LOGGED_IN            = 'onIsLoggedIn';
VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN          = 'onTransferToken';
VXPayPaymentHooksConfig.ON_AVS_STATUS              = 'onAVSStatus';
VXPayPaymentHooksConfig.ON_BALANCE                 = 'onBalance';
VXPayPaymentHooksConfig.ON_ACTIVE_ABOS             = 'onActiveAbos';
VXPayPaymentHooksConfig.ON_PAYMENT                 = 'onPayment';
VXPayPaymentHooksConfig.ON_SIGNUP                  = 'onSignup';
VXPayPaymentHooksConfig.ON_COMFORT_SETTINGS_CHANGE = 'onComfortSettingsChanged';
VXPayPaymentHooksConfig.ON_EMAIL_VERIFIED          = 'onEmailVerified';
VXPayPaymentHooksConfig.ON_EMAIL_NOT_VERIFIED      = 'onEmailNotVerified';
VXPayPaymentHooksConfig.ON_PASSWORD_CHANGED        = 'onPasswordChanged';

export default VXPayPaymentHooksConfig;
