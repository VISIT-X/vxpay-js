import VXPayMessage from './../VXPayMessage'

export default class VXPayIframeReadyMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TYPE_IFRAME_READY);
	}
}
