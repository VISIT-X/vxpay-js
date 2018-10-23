import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenSignUpCommand = (vxpay, flowOptions = {}) => {
	vxpay.logger.log('VXPayOpenSignUpCommand()');

	vxpay.paymentFrame
		.then(frame => {
			frame.sendOptions({'flow': VXPayFlow.LOGIN});

			if (flowOptions) {
				frame.sendUpdateParams(flowOptions);
			}

			return frame
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayPaymentRoutes.SIGN_UP)
				.initSession()
		});

	return vxpay;
};

export default VXPayOpenSignUpCommand;
