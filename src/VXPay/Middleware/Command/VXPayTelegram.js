import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

export default class VXPayTelegram {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {flow: VXPayFlow.TELEGRAM};
	}

	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayTelegram::open()');

		vxpay.paymentFrame
			.then(frame => frame
				.sendUpdateParams(Object.assign({}, self.defaultFlowOptions(), flowOptions))
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayRoutes.TELEGRAM)
				.initSession()
			);
		vxpay.config.route = VXPayRoutes.TELEGRAM;

		return vxpay;
	}
}
