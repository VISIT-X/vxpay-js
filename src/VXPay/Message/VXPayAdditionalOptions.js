import VXPayMessage from './../VXPayMessage'

class VXPayAdditionalOptions extends VXPayMessage {
	/**
	 * @param {Object} options
	 */
	constructor(options = {}) {
		super(VXPayMessage.T_INFO);
		this.options = options;
	}
}

export default VXPayAdditionalOptions;
