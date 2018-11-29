import VXPayMessage from './../../VXPayMessage'

export default class VXPayIsLoggedInActionMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TA_IS_LOGGED);
		this.isAction = true;
	}
}
