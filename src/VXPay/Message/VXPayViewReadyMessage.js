import VXPayMessage from './../VXPayMessage'

export default class VXPayViewReadyMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.T_VIEW_RDY);
	}
}
