import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

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
		.changeRoute(VXPayRoutes.ABO)
		.initSession()
	);

	return vxpay;
};

export default VXPayOpenAboCommand;
