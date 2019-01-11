import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

class VXPayAutoRecharge {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static run(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayAutoRecharge()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, VXPayAutoRecharge.PARAMS, flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.RECHARGE)
		);

		vxpay.config.flow  = VXPayFlow.AUTO_RECHARGE;
        vxpay.config.route = VXPayRoutes.RECHARGE;

		return vxpay;
	}
}

VXPayAutoRecharge.PARAMS = {
	flow: VXPayFlow.AUTO_RECHARGE,
	autoRechargeData: {
		data: null
	}
};

export default VXPayAutoRecharge;
