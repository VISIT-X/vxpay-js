import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenPromoCodeCommand = (vxpay, flowOptions) => {
	vxpay.logger.log('VXPayOpenPromoCodeCommand()');

	vxpay.paymentFrame
		.then(frame => {
			frame
				.initSession()
				.sendOptions({'flow': VXPayFlow.PROMOCODE});

			if (flowOptions) {
				frame.sendUpdateParams(flowOptions);
			}

			frame
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayPaymentRoutes.PROMOCODE)
		});

	return vxpay;
};

export default VXPayOpenPromoCodeCommand;
