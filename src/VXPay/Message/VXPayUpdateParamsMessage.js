import VXPayMessage from './../VXPayMessage'

export default class VXPayUpdateParamsMessage extends VXPayMessage {
	/**
	 * @param {Object} options
	 */
	constructor(options = {}) {
		super(VXPayMessage.T_PARAMS);
		this.options = options;
	}
}
