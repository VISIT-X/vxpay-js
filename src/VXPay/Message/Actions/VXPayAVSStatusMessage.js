import VXPayMessage   from './../../VXPayMessage'
import VXPayAVSStatus from './../../Model/VXPayAVSStatus'

export default class VXPayAVSStatusMessage extends VXPayMessage {
	/**
	 * @param {VXPayAVSStatus} status
	 */
	constructor(status = new VXPayAVSStatus) {
		super(VXPayMessage.T_AVS);
		this.status = status;
	}
}
