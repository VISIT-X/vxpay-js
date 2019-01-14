import VXPayRoutes from '../../Config/VXPayRoutes'
import VXPayFlow   from './../../Config/VXPayFlow'

class VXPayPayment {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayPayment()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(Object.assign({}, VXPayPayment.PARAMS, flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.PAYMENT)
			.initSession()
		);
        vxpay.config.route = VXPayRoutes.PAYMENT;

		return vxpay;
	}
}

VXPayPayment.PARAMS = {
	flow:    VXPayFlow.CHARGE,
	paytype: '' // unset paytype
};

export default VXPayPayment;
