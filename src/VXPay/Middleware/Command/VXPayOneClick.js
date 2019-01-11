import VXPayFlow   from './../../Config/VXPayFlow';
import VXPayRoutes from '../../Config/VXPayRoutes';

class VXPayOneClick {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static run(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayOneClick()');

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(Object.assign({}, VXPayOneClick.PARAMS, flowOptions))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.ONE_CLICK)
		);

		vxpay.config.flow  = VXPayFlow.ONE_CLICK;
        vxpay.config.route = VXPayRoutes.ONE_CLICK;

		return vxpay;
	}
}

VXPayOneClick.PARAMS = {
	flow:         VXPayFlow.ONE_CLICK,
	paytype:      '',
	oneClickData: {
		data: null
	}
};

export default VXPayOneClick;
