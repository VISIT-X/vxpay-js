import VXPayMessage from './../VXPayMessage'

export default class VXPayContentLoadedMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.T_CONTENT);
	}
}
