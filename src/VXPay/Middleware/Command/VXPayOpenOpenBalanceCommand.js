import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'
import VXPayFlow          from './../../Config/VXPayFlow'

/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenOpenBalanceCommand = (vxpay, flowOptions = {}) => {
	vxpay.logger.log('VXPayOpenOneClickCommand()');

	vxpay.paymentFrame.then(frame => frame
		.initSession()
		.sendOptions(Object.assign({}, {'flow': VXPayFlow.OP_COMPENSATION}, flowOptions))
		.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
		.changeRoute(VXPayPaymentRoutes.OP_COMPENSATION)
	);

	return vxpay;
};

export default VXPayOpenOpenBalanceCommand;
