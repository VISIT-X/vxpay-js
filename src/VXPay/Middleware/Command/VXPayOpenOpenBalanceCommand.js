import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'
import VXPayFlow          from './../../Config/VXPayFlow'

/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenOpenBalanceCommand = (vxpay, flowOptions = {}) => {
	vxpay.logger.log('VXPayOpenOneClickCommand()');

	vxpay.paymentFrame
		.then(frame => {
			frame
				.initSession()
				.sendOptions({'flow': VXPayFlow.OP_COMPENSATION});

			if (flowOptions) {
				frame.sendUpdateParams(flowOptions);
			}

			frame
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayPaymentRoutes.OP_COMPENSATION);

		});

	return vxpay;
};

export default VXPayOpenOpenBalanceCommand;
