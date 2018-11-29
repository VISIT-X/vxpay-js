import VXPayMessage from './../VXPayMessage'

export default class VXPayIframeReadyMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.T_IFR_RDY);
	}
}
