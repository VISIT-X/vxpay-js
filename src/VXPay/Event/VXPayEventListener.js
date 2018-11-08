class VXPayEventListener {
	/**
	 * @param {String} event
	 * @param {HTMLElement|Window} elem
	 * @param {Function} func
	 */
	static addEvent(event, elem, func) {
		if (elem.addEventListener) {  // W3C DOM
			elem.addEventListener(event, func, {passive: true});
		}
		else if (elem.attachEvent) { // IE DOM
			elem.attachEvent(VXPayEventListener.IE_PREFIX + event, func);
		}
		else { // No much to do
			elem[event] = func;
		}
	}

	/**
	 * @param {String} event
	 * @param {HTMLElement|Window} elem
	 * @param {Function} func
	 */
	static removeEvent(event, elem, func) {
		if (elem.removeEventListener) {  // W3C DOM
			elem.removeEventListener(event, func, {passive: true});
		}
		else if (elem.detachEvent) { // IE DOM
			elem.detachEvent(VXPayEventListener.IE_PREFIX + event, func);
		}
		else { // No much to do
			elem[event] = null;
		}
	}
}

VXPayEventListener.IE_PREFIX = 'on';

export default VXPayEventListener;