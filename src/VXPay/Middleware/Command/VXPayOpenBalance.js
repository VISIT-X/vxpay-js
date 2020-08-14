import VXPayRoutes from '../../Config/VXPayRoutes'
import VXPayFlow   from './../../Config/VXPayFlow'

export default class VXPayOpenBalance {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {flow: VXPayFlow.OP_COMPENSATION};
	}

	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayOpenBalance()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, self.defaultFlowOptions(), flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.OP_COMP)
		);
        vxpay.config.route = VXPayRoutes.OP_COMP;

		return vxpay;
	}
}
