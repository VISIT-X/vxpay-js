import VXPayMessage from './../VXPayMessage'

export default class VXPayHasSessionCookieMessage extends VXPayMessage {
	/**
	 * @param {Boolean} hasCookie
	 */
	constructor(hasCookie = false) {
		super(VXPayMessage.T_COOKIE);
		this.hasCookie = hasCookie;
	}
}
