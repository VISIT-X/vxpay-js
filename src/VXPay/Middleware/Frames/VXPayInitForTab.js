export default class VXPayInitForTab {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} defaultOptions
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 * @constructor
	 */
	static init(vxpay, defaultOptions = {}, flowOptions = {}) {
		vxpay.logger.log('VXPayInitForTab::init()');

		// ony for tab config - trigger manually
		if (vxpay.config.enableTab) {
			vxpay.config.merge(Object.assign(defaultOptions, {flowParams: Object.assign({}, defaultOptions, flowOptions)}));
		}

		return vxpay;
	}
}
