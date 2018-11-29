class VXPayDomHelper {

	/**
	 * @param {Window} window
	 * @param {jQuery} jQuery
	 * @param {Fx} Fx
	 */
	constructor(window, jQuery, Fx) {
		this._window = window;
		this._jQuery = jQuery;
		this._fx     = Fx; // Mootools FX
	}

	/**
	 * @return {Window}
	 */
	get window() {
		return this._window;
	}

	/**
	 * @return {jQuery}
	 */
	get jQuery() {
		return this._jQuery;
	}

	/**
	 * @return {Fx}
	 */
	get fx() {
		return this._fx;
	}

	/**
	 * @param {Window} window
	 * @return {number}
	 */
	static getClientHeight(window) {
		return window.innerHeight ||
			window.document.documentElement.clientHeight ||
			window.document.body.clientHeight;
	}

	/**
	 * @param {HTMLElement} element
	 * @param {String} attribute
	 * @param {String|Number} value
	 * @return {boolean}
	 */
	static isStyleAttributeSuppored(element, attribute, value) {
		let supported = false;

		try {
			element.style[attribute] = value;
			supported                = element.style[attribute] === value;
		} catch (e) { /* suppress */ }

		return supported;
	}

	/**
	 * @return {boolean}
	 * @private
	 */
	_hasJQuery() {
		return typeof this._jQuery !== 'undefined'
			&& typeof this._jQuery.Animation !== 'undefined';
	}

	/**
	 * @return {boolean}
	 * @private
	 */
	_hasMooTools() {
		return typeof this._fx !== 'undefined'
			&& typeof this._fx.Scroll !== 'undefined';
	}

	/**
	 * @param {Number} top
	 * @link https://www.similartech.com/compare/jquery-vs-mootools
	 * @return {*}
	 */
	scrollTo(top) {
		try {
			if (this._hasJQuery()) {
				const opts = VXPayDomHelper.OPTIONS_JQUERY;
				opts.scrollTop = top;

				return this._jQuery('html, body')
					.animate(opts, VXPayDomHelper.ANIMATION_DURATION);
			}

			if (this._hasMooTools()) {
				return new this._fx
					.Scroll(this._window, VXPayDomHelper.OPTIONS_MTOOLS).start(0, top);
			}

			// default no animation
			return this._window.scrollTo(0, top);

		} catch (e) { /* suppress */ }
	}
}

VXPayDomHelper.TAG_IFRAME = 'iframe';

VXPayDomHelper.OPTIONS_JQUERY = {scrollTop: 0};
VXPayDomHelper.OPTIONS_MTOOLS = {duration: VXPayDomHelper.ANIMATION_DURATION};

VXPayDomHelper.ANIMATION_DURATION = 500;

export default VXPayDomHelper;
