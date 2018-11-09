import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenLoginCommand = (vxpay, flowOptions = {}) => {
	vxpay.logger.log('VXPayOpenLoginCommand()');

	vxpay.paymentFrame.then(frame => frame
		.sendOptions(Object.assign({}, {'flow': VXPayFlow.LOGIN}, flowOptions))
		.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
		.changeRoute(VXPayPaymentRoutes.LOGIN)
		.initSession()
	);

	return vxpay;
};

export default VXPayOpenLoginCommand;
