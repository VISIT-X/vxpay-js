import VXPayMessage from './../../VXPayMessage'

export default class VXPayIsLoggedInActionMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TYPE_ACTION_IS_LOGGED_IN);
		this.isAction = true;
	}
}
