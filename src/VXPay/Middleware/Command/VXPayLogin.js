import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

export default class VXPayLogin {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayLogin::open()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(Object.assign({}, {'flow': VXPayFlow.LOGIN}, flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.LOGIN)
			.initSession()
		);

		vxpay.config.flow  = VXPayFlow.LOGIN;
        vxpay.config.route = VXPayRoutes.LOGIN;

		return vxpay;
	}
}
