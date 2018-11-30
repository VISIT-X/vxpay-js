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
}

VXPayMessage.T_HOOK      = 'modalbox-hook';
VXPayMessage.T_SCROLL    = 'modalbox-scrollto';
VXPayMessage.T_SUCCESS   = 'modalbox-success';
VXPayMessage.T_IFR_CLOSE = 'modalbox-iframe-close';
VXPayMessage.T_IFR_RDY   = 'modalbox-iframe-ready';
VXPayMessage.T_VIEW_RDY  = 'modalbox-view-ready';
VXPayMessage.T_TOKEN     = 'modalbox-transfer-token';
VXPayMessage.T_CONTENT   = 'modalbox-content-loaded';
VXPayMessage.T_SESSION   = 'modalbox-init-session';
VXPayMessage.T_PARAMS    = 'modalbox-update-params';
VXPayMessage.T_VISIBLE   = 'modalbox-is-visible';
VXPayMessage.T_INFO      = 'modalbox-additional-info';
VXPayMessage.T_ROUTE     = 'modalbox-change-route';

VXPayMessage.T_COOKIE     = 'modalbox-response-hasLoginCookie';
VXPayMessage.T_IS_LOGGED  = 'modalbox-response-isLoggedIn';
VXPayMessage.T_AVS        = 'modalbox-response-getavsstatus';
VXPayMessage.T_BALANCE    = 'modalbox-response-getbalance';
VXPayMessage.T_ABOS       = 'modalbox-response-getactiveabos';
VXPayMessage.T_LOGGED_OUT = 'modalbox-response-logout';

VXPayMessage.TA_ABOS      = 'modalbox-action-getactiveabos';
VXPayMessage.TA_LOGOUT    = 'modalbox-action-logout';
VXPayMessage.TA_AVS       = 'modalbox-action-getavsstatus';
VXPayMessage.TA_IS_LOGGED = 'modalbox-action-isLoggedIn';
VXPayMessage.TA_BALANCE   = 'modalbox-action-getbalance';

VXPayMessage.TT_PREFIX = 'transfer_token:';

export default VXPayMessage;
