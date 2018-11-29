import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

class VXPayLimitedPayment {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static open(vxpay) {
		vxpay.logger.log('VXPayLimitedPayment()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(VXPayLimitedPayment.PARAMS)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.LIMIT)
			.initSession()
		);

		return vxpay;
	}
}

VXPayLimitedPayment.PARAMS = {
	flow: VXPayFlow.LIMIT,
	paytype: ''
};

export default VXPayLimitedPayment;
