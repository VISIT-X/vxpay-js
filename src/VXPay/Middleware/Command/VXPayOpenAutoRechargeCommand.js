import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

class VXPayOpenAutoRechargeCommand {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static run(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayOpenAutoRechargeCommand()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, VXPayOpenAutoRechargeCommand.PARAMS, flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.RECHARGE)
		);

		return vxpay;
	}
}

VXPayOpenAutoRechargeCommand.PARAMS = {
	flow: VXPayFlow.AUTO_RECHARGE,
	autoRechargeData: {
		data: null
	}
};

export default VXPayOpenAutoRechargeCommand;
