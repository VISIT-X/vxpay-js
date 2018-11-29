import VXPayMessage from './../../VXPayMessage'

class VXPayIsLoggedInResponseMessage extends VXPayMessage {
	/**
	 * @param {Boolean} loggedIn
	 */
	constructor(loggedIn = false) {
		super(VXPayMessage.T_IS_LOGGED);
		this.loggedIn = loggedIn;
	}
}

export default VXPayIsLoggedInResponseMessage;
