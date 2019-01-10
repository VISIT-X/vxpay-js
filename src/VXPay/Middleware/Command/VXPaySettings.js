import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

class VXPaySettings {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static open(vxpay) {
		vxpay.logger.log('VXPaySettings()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(VXPaySettings.PARAMS)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.SETTINGS)
			.initSession()
		);
        vxpay.config.route = VXPayRoutes.SETTINGS;

		return vxpay;
	}
}

VXPaySettings.PARAMS = {
	flow:    VXPayFlow.SETTINGS,
	paytype: '' // reset paytype
};

export default VXPaySettings;
