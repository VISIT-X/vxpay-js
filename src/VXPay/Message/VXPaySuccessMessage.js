import VXPayMessage from './../VXPayMessage';
import VXPayUser    from './../Config/VXPayUser';

class VXPaySuccessMessage extends VXPayMessage {
	/**
	 * @param {Object} data
	 */
	constructor(data = VXPaySuccessMessage.USER_DATA_STRUCT) {
		super(VXPayMessage.T_SUCCESS);
		this.user = new VXPayUser();

		// populate user model
		this.user.balance  = data.availableMoney || 0;
		this.user.nickname = data.screenname || '';
		this.user.fsk18    = data.fsk18 || false;
		this.user.userId   = data.userId || NaN;
		this.user.uhash    = data.uhash || '';
	}
}

/**
 * Sample response data
 * @type {Object}
 */
VXPaySuccessMessage.USER_DATA_STRUCT = {
	'success':        true,
	'userFromLogin':  false,
	'userFromSignup': false,
	'flow':           'login',
	'hostId':         null,
	'screenname':     'user123',
	'userId':         9876789087,
	'isLoggedIn':     true,
	'transferToken':  'TT_7a9523c9-5555-4c48-5555-91cc2465f484',
	'availableMoney': 12.34,
	'fsk18':          false,
	'uhash':          ''
};

export default VXPaySuccessMessage;
