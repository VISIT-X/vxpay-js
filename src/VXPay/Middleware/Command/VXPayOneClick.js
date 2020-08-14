import VXPayFlow   from './../../Config/VXPayFlow';
import VXPayRoutes from '../../Config/VXPayRoutes';

class VXPayOneClick {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {
			flow:         VXPayFlow.ONE_CLICK,
			paytype:      '',
			oneClickData: {
				data: null
			}
		};
	}

	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static run(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayOneClick()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, self.defaultFlowOptions(), flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.ONE_CLICK)
		);
        vxpay.config.route = VXPayRoutes.ONE_CLICK;

		return vxpay;
	}
}

export default VXPayOneClick;
