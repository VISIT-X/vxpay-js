export default class VXPayShowForTab {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 * @constructor
	 */
	static trigger(vxpay) {
		vxpay.logger.log('VXPayShowForTab::trigger()');

		// ony for tab config - trigger show manually
		if (vxpay.config.enableTab) {
			vxpay._paymentFrame.triggerLoad();
		}

		return vxpay;
	}
}
