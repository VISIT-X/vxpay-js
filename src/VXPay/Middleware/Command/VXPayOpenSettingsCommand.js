import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

class VXPayOpenSettingsCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayOpenSettingsCommand()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(VXPayOpenSettingsCommand.PARAMS)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.SETTINGS)
			.initSession()
		);

		return vxpay;
	}
}

VXPayOpenSettingsCommand.PARAMS = {
	flow:    VXPayFlow.SETTINGS,
	paytype: '' // reset paytype
};

export default VXPayOpenSettingsCommand;
