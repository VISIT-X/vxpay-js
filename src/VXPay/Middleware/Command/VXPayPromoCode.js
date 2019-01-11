import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

export default class VXPayPromoCode {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions) {
		vxpay.logger.log('VXPayPromoCode()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, {'flow': VXPayFlow.PROMOCODE}, flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.PROMOCODE)
		);

		vxpay.config.flow  = VXPayFlow.PROMOCODE;
        vxpay.config.route = VXPayRoutes.PROMOCODE;

		return vxpay;
	}
}
