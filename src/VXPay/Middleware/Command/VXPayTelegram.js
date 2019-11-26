import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

export default class VXPayTelegram {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayTelegram::open()');

		vxpay.paymentFrame
			.then(frame => frame
				.sendUpdateParams(Object.assign({}, {'flow': VXPayFlow.TELEGRAM}, flowOptions))
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayRoutes.TELEGRAM)
				.initSession()
			);
		vxpay.config.route = VXPayRoutes.TELEGRAM;

		return vxpay;
	}
}
