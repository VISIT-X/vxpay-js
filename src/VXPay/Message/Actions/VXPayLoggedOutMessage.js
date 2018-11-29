import VXPayMessage from '../../VXPayMessage'

class VXPayLoggedOutMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.T_LOGGED_OUT);
		// this.loggedIn = false; - do we need it?
	}
}

export default VXPayLoggedOutMessage;
