import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

class VXPayOpenOneClickCommand {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static run(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayOpenOneClickCommand()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, VXPayOpenOneClickCommand.PARAMS, flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.ONE_CLICK)
		);

		return vxpay;
	}
}

VXPayOpenOneClickCommand.PARAMS = {
	flow: VXPayFlow.ONE_CLICK,
	paytype: '',
	oneClickData: {
		data: null
	}
};

export default VXPayOpenOneClickCommand;
