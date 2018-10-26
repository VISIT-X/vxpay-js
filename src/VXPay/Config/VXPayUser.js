class VXPayUser {
	constructor() {
		this._balance  = NaN;
		this._fsk18    = false;
		this._nickname = '';
		this._userId   = NaN;
		this._uhash    = null;
	}

	/**
	 * @return {Number|NaN}
	 */
	get balance() {
		return this._balance;
	}

	/**
	 * @param {Number} value
	 */
	set balance(value) {
		this._balance = value;
	}

	/**
	 * @return {Boolean}
	 */
	get fsk18() {
		return this._fsk18;
	}

	/**
	 * @param {Boolean} value
	 */
	set fsk18(value) {
		this._fsk18 = value;
	}

	/**
	 * @return {String}
	 */
	get nickname() {
		return this._nickname;
	}

	/**
	 * @param {String} value
	 */
	set nickname(value) {
		this._nickname = value;
	}

	/**
	 * @return {Number|NaN}
	 */
	get userId() {
		return this._userId;
	}

	/**
	 * @param {Number} value
	 */
	set userId(value) {
		this._userId = value;
	}

	/**
	 * @return {String|Null}
	 */
	get uhash() {
		return this._uhash;
	}

	/**
	 * @param {String|Null} value
	 */
	set uhash(value) {
		this._uhash = value;
	}
}

export default VXPayUser;
