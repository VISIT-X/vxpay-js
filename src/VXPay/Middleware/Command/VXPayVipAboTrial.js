import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

export default class VXPayVipAboTrial {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {flow: VXPayFlow.TRIAL_VIP_ABO};
	}

	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayVipAboTrial()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, VXPayVipAboTrial.defaultFlowOptions(), flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.ABO)
		);
        vxpay.config.route = VXPayRoutes.ABO;

		return vxpay;
	}
}
