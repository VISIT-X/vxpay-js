class VXPayMessage {

	/**
	 * @param {String} type
	 */
	constructor(type = '') {
		this.type     = type;
		this.isAction = false;
	}

	/**
	 * @return {string}
	 */
	toString() {
		return JSON.stringify(this);
	}

	/**
	 * @return {String[]}
	 */
	static getValidTypes() {
		return [
			VXPayMessage.TYPE_INIT_SESSION,
			VXPayMessage.TYPE_UPDATE_PARAMS,
			VXPayMessage.TYPE_IS_VISIBLE,
			VXPayMessage.TYPE_ADDITIONAL_INFO,
			VXPayMessage.TYPE_CHANGE_ROUTE,
			VXPayMessage.TYPE_HOOK,
			VXPayMessage.TYPE_SCROLL_TO,
			VXPayMessage.TYPE_SUCCESS,
			VXPayMessage.TYPE_IFRAME_CLOSE,
			VXPayMessage.TYPE_IFRAME_READY,
			VXPayMessage.TYPE_VIEW_READY,
			VXPayMessage.TYPE_TRANSFER_TOKEN,
			VXPayMessage.TYPE_CONTENT_LOADED,
			// actions
			VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS,
			VXPayMessage.TYPE_ACTION_LOGOUT,
			VXPayMessage.TYPE_ACTION_GET_AVS_STATUS,
			VXPayMessage.TYPE_ACTION_GET_BALANCE,
			VXPayMessage.TYPE_ACTION_IS_LOGGED_IN,
			// action response messages
			VXPayMessage.TYPE_HAS_LOGIN_COOKIE,
			VXPayMessage.TYPE_BALANCE,
			VXPayMessage.TYPE_AVS_STATUS,
			VXPayMessage.TYPE_IS_LOGGED_IN,
		];
	}
}

VXPayMessage.TYPE_HOOK                   = 'modalbox-hook';
VXPayMessage.TYPE_SCROLL_TO              = 'modalbox-scrollto';
VXPayMessage.TYPE_SUCCESS                = 'modalbox-success';
VXPayMessage.TYPE_IFRAME_CLOSE           = 'modalbox-iframe-close';
VXPayMessage.TYPE_IFRAME_READY           = 'modalbox-iframe-ready';
VXPayMessage.TYPE_VIEW_READY             = 'modalbox-view-ready';
VXPayMessage.TYPE_TRANSFER_TOKEN         = 'modalbox-transfer-token';
VXPayMessage.TYPE_CONTENT_LOADED         = 'modalbox-content-loaded';
VXPayMessage.TYPE_INIT_SESSION           = 'modalbox-init-session';
VXPayMessage.TYPE_UPDATE_PARAMS          = 'modalbox-update-params';
VXPayMessage.TYPE_IS_VISIBLE             = 'modalbox-is-visible';
VXPayMessage.TYPE_ADDITIONAL_INFO        = 'modalbox-additional-info';
VXPayMessage.TYPE_CHANGE_ROUTE           = 'modalbox-change-route';

VXPayMessage.TYPE_HAS_LOGIN_COOKIE       = 'modalbox-response-hasLoginCookie';
VXPayMessage.TYPE_IS_LOGGED_IN           = 'modalbox-response-isLoggedIn';
VXPayMessage.TYPE_AVS_STATUS             = 'modalbox-response-getavsstatus';
VXPayMessage.TYPE_BALANCE                = 'modalbox-response-getbalance';
VXPayMessage.TYPE_ACTIVE_ABOS            = 'modalbox-response-getactiveabos';
VXPayMessage.TYPE_LOGGED_OUT             = 'modalbox-response-logout';

VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS = 'modalbox-action-getactiveabos';
VXPayMessage.TYPE_ACTION_LOGOUT          = 'modalbox-action-logout';
VXPayMessage.TYPE_ACTION_GET_AVS_STATUS  = 'modalbox-action-getavsstatus';
VXPayMessage.TYPE_ACTION_IS_LOGGED_IN    = 'modalbox-action-isLoggedIn';
VXPayMessage.TYPE_ACTION_GET_BALANCE     = 'modalbox-action-getbalance';

VXPayMessage.TRANSFER_TOKEN_PREFIX = 'transfer_token:';

export default VXPayMessage;
