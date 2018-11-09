/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayResetTokenForTab = (vxpay) => {
	vxpay.logger.log('VXPayResetTokenForTab()');

	if (vxpay.config.enableTab) {
		vxpay.state.markHasToken(undefined);
	}
	return vxpay;
};

export default VXPayResetTokenForTab;
