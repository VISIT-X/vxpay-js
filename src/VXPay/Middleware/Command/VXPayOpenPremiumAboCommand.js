import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 */
const VXPayOpenPremiumAboCommand = (vxpay, flowOptions = {}) => {
	vxpay.logger.log('VXPayOpenPaymentCommand()');

	vxpay.paymentFrame.then(frame => frame
		.initSession()
		.sendOptions(Object.assign({}, {'flow': VXPayFlow.VXTV_ABO}, flowOptions))
		.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
		.changeRoute(VXPayPaymentRoutes.ABO)
	);

	return vxpay;
};

export default VXPayOpenPremiumAboCommand;
