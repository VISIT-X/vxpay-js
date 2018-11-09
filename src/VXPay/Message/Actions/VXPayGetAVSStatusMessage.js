import VXPayMessage from './../../VXPayMessage'

export default class VXPayGetAVSStatusMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TYPE_ACTION_GET_AVS_STATUS);
		this.isAction = true;
	}
}
