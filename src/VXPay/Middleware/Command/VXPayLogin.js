import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

export default class VXPayLogin {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {flow: VXPayFlow.LOGIN};
	}

	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayLogin::open()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(Object.assign({}, VXPayLogin.defaultFlowOptions(), flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.LOGIN)
			.initSession()
		);
        vxpay.config.route = VXPayRoutes.LOGIN;
        
		return vxpay;
	}
}
