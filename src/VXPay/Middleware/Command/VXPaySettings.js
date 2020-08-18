import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

class VXPaySettings {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {
			flow:    VXPayFlow.SETTINGS,
			paytype: '' // reset paytype
		};
	}

	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static open(vxpay) {
		vxpay.logger.log('VXPaySettings()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(VXPaySettings.defaultFlowOptions())
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.SETTINGS)
			.initSession()
		);
        vxpay.config.route = VXPayRoutes.SETTINGS;

		return vxpay;
	}
}

export default VXPaySettings;
