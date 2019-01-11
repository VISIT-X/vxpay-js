import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

export default class VXPaySignUp {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPaySignUp::open()');

		vxpay.paymentFrame
			.then(frame => frame
				.sendUpdateParams(Object.assign({}, {'flow': VXPayFlow.SIGNUP}, flowOptions))
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayRoutes.SIGN_UP)
				.initSession()
			);

        vxpay.config.route = VXPayRoutes.SIGN_UP;
        vxpay.config.flow  = VXPayFlow.SIGNUP;

		return vxpay;
	}
}
