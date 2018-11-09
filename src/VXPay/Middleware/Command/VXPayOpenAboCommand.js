import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenAboCommand = (vxpay, flowOptions = {}) => {
	vxpay.logger.log('VXPayOpenAboCommand()');

	vxpay.paymentFrame.then(frame => frame
		.sendOptions(Object.assign({}, {'flow': VXPayFlow.VIP_ABO}, flowOptions))
		.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
		.changeRoute(VXPayPaymentRoutes.ABO)
		.initSession()
	);

	return vxpay;
};

export default VXPayOpenAboCommand;
