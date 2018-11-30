import VXPayUrlHelper from './../../VXPayUrlHelper'
import VXPayFlow      from './../../Config/VXPayFlow'
import VXPayRoutes    from '../../Config/VXPayRoutes'

export default class VXPayResetPassword {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static run(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayResetPassword()');

		const options = Object.assign({}, VXPayResetPassword.getParams(vxpay.config), flowOptions);

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(options)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.PASS_RESET)
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