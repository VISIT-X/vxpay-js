/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayTriggerShowForTab = (vxpay) => {
	vxpay.logger.log('VXPayTriggerShowForTab()');

	// ony for tab config - trigger show manually
	if (vxpay.config.enableTab) {
		vxpay._paymentFrame.triggerLoad();
	}

	return vxpay;
};

export default VXPayTriggerShowForTab;
