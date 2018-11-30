import VXPayMessage from './../VXPayMessage'

export default class VXPayIframeCloseMessage extends VXPayMessage {
	/**
	 * @param {Object} data
	 */
	constructor(data = {}) {
		super(VXPayMessage.T_IFR_CLOSE);
		this.data = data;
	}
}
