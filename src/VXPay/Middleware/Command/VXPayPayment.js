import VXPayRoutes from '../../Config/VXPayRoutes'
import VXPayFlow   from './../../Config/VXPayFlow'

class VXPayPayment {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {
			flow:    VXPayFlow.CHARGE,
			paytype: '' // unset paytype
		};
	}

	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayPayment()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(Object.assign({}, VXPayPayment.defaultFlowOptions(), flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.PAYMENT)
			.initSession()
		);
        vxpay.config.route = VXPayRoutes.PAYMENT;

		return vxpay;
	}
}

export default VXPayPayment;
