import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

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
		.changeRoute(VXPayRoutes.ABO)
	);

	return vxpay;
};

export default VXPayOpenPremiumAboCommand;
