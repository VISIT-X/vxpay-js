import VXPayMessage from '../../VXPayMessage'

class VXPayLogoutMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TA_LOGOUT);
		this.isAction = true;
	}
}

export default VXPayLogoutMessage;
