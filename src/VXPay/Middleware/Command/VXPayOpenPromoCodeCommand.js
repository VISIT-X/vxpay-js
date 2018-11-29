import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenPromoCodeCommand = (vxpay, flowOptions) => {
	vxpay.logger.log('VXPayOpenPromoCodeCommand()');

	vxpay.paymentFrame.then(frame => frame
		.initSession()
		.sendOptions(Object.assign({}, {'flow': VXPayFlow.PROMOCODE}, flowOptions))
		.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
		.changeRoute(VXPayRoutes.PROMOCODE)
	);

	return vxpay;
};

export default VXPayOpenPromoCodeCommand;
