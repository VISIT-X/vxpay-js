import VXPayRoutes from '../../Config/VXPayRoutes'
import VXPayFlow   from './../../Config/VXPayFlow'

export default class VXPayOpenBalance {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayOneClick()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, {'flow': VXPayFlow.OP_COMPENSATION}, flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.OP_COMP)
		);

		vxpay.config.flow  = VXPayFlow.OP_COMPENSATION;
        vxpay.config.route = VXPayRoutes.OP_COMP;

		return vxpay;
	}
}
