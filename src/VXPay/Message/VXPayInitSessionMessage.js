import VXPayMessage from './../VXPayMessage'

class VXPayInitSessionMessage extends VXPayMessage {
	/**
	 * @param {String} token
	 */
	constructor(token = undefined) {
		super(VXPayMessage.T_SESSION);
		this.token = token;
	}
}

export default VXPayInitSessionMessage;
