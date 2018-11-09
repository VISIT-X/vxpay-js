import VXPayUrlHelper     from './../../VXPayUrlHelper'
import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

export default class VXPayResetPasswordCommand {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static run(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayResetPasswordCommand()');

		const options = Object.assign({}, VXPayResetPasswordCommand.getParams(vxpay.config), flowOptions);

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(options)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.PASSWORD_RESET)
		);

		return vxpay;
	}

	/**
	 * @param config
	 * @return {{flow: string, pwdresetUserId: String, pwdresetUserName: String, pwdresetKey: String}}
	 */
	static getParams(config) {
		const helper = new VXPayUrlHelper(config.window.URL);

		return {
			flow:             VXPayFlow.PASSWORD_RESET,
			pwdresetUserId:   helper.getQueryParam('u', config.window.location.href),
			pwdresetUserName: helper.getQueryParam('tpLoginPwdLost', config.window.location.href),
			pwdresetKey:      helper.getQueryParam('key', config.window.location.href)
		};
	}
}