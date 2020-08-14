import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

export default class VXPayPremiumAbo {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {flow: VXPayFlow.VXTV_ABO};
	}

	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayOpenPaymentCommand()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, self.defaultFlowOptions(), flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.ABO)
		);
        vxpay.config.route = VXPayRoutes.ABO;

		return vxpay;
	}
}
