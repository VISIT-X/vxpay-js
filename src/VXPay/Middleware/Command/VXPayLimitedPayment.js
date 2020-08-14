import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

class VXPayLimitedPayment {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {
			flow: VXPayFlow.LIMIT,
			paytype: ''
		};
	}

	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static open(vxpay) {
		vxpay.logger.log('VXPayLimitedPayment()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(self.defaultFlowOptions())
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.LIMIT)
			.initSession()
		);
        vxpay.config.route = VXPayRoutes.LIMIT;

		return vxpay;
	}
}

export default VXPayLimitedPayment;
