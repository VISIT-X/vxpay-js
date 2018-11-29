import VXPayRoutes from '../../Config/VXPayRoutes'
import VXPayFlow   from './../../Config/VXPayFlow'

class VXPayOpenPaymentCommand {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static run(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayOpenPaymentCommand()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(Object.assign({}, VXPayOpenPaymentCommand.PARAMS, flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.PAYMENT)
			.initSession()
		);

		return vxpay;
	}
}

VXPayOpenPaymentCommand.PARAMS = {
	flow:    VXPayFlow.MONEY_CHARGE,
	paytype: '' // unset paytype
};

export default VXPayOpenPaymentCommand;
