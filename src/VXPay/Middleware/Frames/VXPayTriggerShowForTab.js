/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayTriggerShowForTab = (vxpay) => {
	vxpay.logger.log('VXPayTriggerShowForTab()');

	// ony for tab config - trigger show manually
	if (vxpay.config.enableTab) {
		vxpay.paymentFrame.then(frame => frame.triggerLoad());
	}

	return vxpay;
};

export default VXPayTriggerShowForTab;
