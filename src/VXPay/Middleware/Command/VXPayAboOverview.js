import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

export default class VXPayAboOverview {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {flow: VXPayFlow.ABO_OVERVIEW};
	}

	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayAboOverview::open()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(Object.assign({}, VXPayAboOverview.defaultFlowOptions(), flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.ABO_OVERVIEW)
			.initSession()
		);
		vxpay.config.route = VXPayRoutes.ABO_OVERVIEW;

		return vxpay;
	}
}
