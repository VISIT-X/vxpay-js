import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 */
const VXPayOpenPremiumAboCommand = (vxpay, flowOptions = {}) => {
	vxpay.logger.log('VXPayOpenPaymentCommand()');

	vxpay.paymentFrame
		.then(frame => {
			frame
				.initSession()
				.sendOptions({'flow': VXPayFlow.VXTV_ABO});

			if (flowOptions) {
				frame.sendUpdateParams(flowOptions);
			}

			frame
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayPaymentRoutes.ABO);
		});

	return vxpay;
};

export default VXPayOpenPremiumAboCommand;
