import mobile from 'is-mobile'

export default class VXPayUserAgent {
	/**
	 * @param {String} uaString
	 */
	constructor(uaString = '') {
		this._userAgent = uaString;
	}

	/**
	 * @return {boolean}
	 */
	isMobile() {
		return mobile(this._userAgent);
	}

	/**
	 * @return {string}
	 */
	get userAgent() {
		return this._userAgent;
	}

	/**
	 * @param {string} value
	 */
	set userAgent(value) {
		this._userAgent = value;
	}
}
