import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenVipAboTrialCommand = (vxpay, flowOptions = {}) => {
	vxpay.logger.log('VXPayOpenVipAboTrialCommand()');

	vxpay.paymentFrame.then(frame => frame
		.initSession()
		.sendOptions(Object.assign({}, {'flow': VXPayFlow.TRIAL_VIP_ABO}, flowOptions))
		.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
		.changeRoute(VXPayPaymentRoutes.ABO)
	);

	return vxpay;
};

export default VXPayOpenVipAboTrialCommand;
