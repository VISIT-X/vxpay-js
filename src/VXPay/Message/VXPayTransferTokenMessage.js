import VXPayMessage from './../VXPayMessage'

export default class VXPayTransferTokenMessage extends VXPayMessage {
	/**
	 * @param {String} token
	 */
	constructor(token) {
		super(VXPayMessage.T_TOKEN);
		this.token = token;
	}
}
