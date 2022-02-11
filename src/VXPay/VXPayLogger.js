class VXPayLogger {
	/**
	 * @param {Boolean} enable
	 * @param {Window} window
	 */
	constructor(enable, window = undefined) {
		this.enabled = enable || false;
		this._container = [];
		this._window = window;
	}

	/**
	 * Accepts any number of params
	 */
	log() {
		// check enabled
		if (!this.enabled) {
			return;
		}

		// for browser
		if (typeof this._window !== 'undefined') {
			return this._window.console.log.apply(this, arguments);
		}

		// for tests - just collect
		this._container.push({
			time: new Date(),
			message: JSON.stringify(arguments)
		});
	}
}

VXPayLogger.IN  = '⬅️ []';
VXPayLogger.OUT = '➡️ []';

export default VXPayLogger;
