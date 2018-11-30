import VXPayMessage from './../../VXPayMessage'

export default class VXPayGetAVSStatusMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TA_AVS);
		this.isAction = true;
	}
}
