import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

class VXPayAutoRecharge {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {
			flow: VXPayFlow.AUTO_RECHARGE,
			autoRechargeData: {
				data: null
			}
		};
	}

	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static run(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayAutoRecharge()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, VXPayAutoRecharge.defaultFlowOptions(), flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.RECHARGE)
		);
        vxpay.config.route = VXPayRoutes.RECHARGE;
		return vxpay;
	}
}

export default VXPayAutoRecharge;
