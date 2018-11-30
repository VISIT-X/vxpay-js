/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
class VXPayTokenForTab {
	static reset(vxpay) {
		vxpay.logger.log('VXPayTokenForTab()');

		if (vxpay.config.enableTab) {
			vxpay.state.markHasToken(undefined);
		}
		return vxpay;
	}
}

export default VXPayTokenForTab;
