import VXPayMessage from '../../VXPayMessage'

class VXPayLogoutMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TYPE_ACTION_LOGOUT);
		this.isAction = true;
	}
}

export default VXPayLogoutMessage;
