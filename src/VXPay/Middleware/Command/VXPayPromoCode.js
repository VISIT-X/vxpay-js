import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

export default class VXPayPromoCode {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {flow: VXPayFlow.PROMOCODE};
	}

	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions) {
		vxpay.logger.log('VXPayPromoCode()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, self.defaultFlowOptions(), flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.PROMOCODE)
		);
        vxpay.config.route = VXPayRoutes.PROMOCODE;

		return vxpay;
	}
}
