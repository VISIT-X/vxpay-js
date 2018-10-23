import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenAVSCommand = (vxpay, flowOptions = {}) => {
	vxpay.logger.log('VXPayOpenAVSCommand()');

	vxpay.paymentFrame
		.then(frame => {
			frame
				.initSession()
				.sendOptions({'flow': VXPayFlow.AVS});

			if (flowOptions) {
				frame.sendUpdateParams(flowOptions);
			}

			frame
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayPaymentRoutes.AVS)
		});

	return vxpay;
};

export default VXPayOpenAVSCommand;
