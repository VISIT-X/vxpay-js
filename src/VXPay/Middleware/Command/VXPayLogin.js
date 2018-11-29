import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

export default class VXPayLogin {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayLogin::open()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(Object.assign({}, {'flow': VXPayFlow.LOGIN}, flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.LOGIN)
			.initSession()
		);

		return vxpay;
	}
}
