import VXPayUrlHelper from './../../VXPayUrlHelper'
import VXPayFlow      from './../../Config/VXPayFlow'
import VXPayRoutes    from '../../Config/VXPayRoutes'

export default class VXPayLostPassword {
	/**
	 * @param config
	 * @return {Object}
	 */
	static defaultFlowOptions(config) {
		const helper = new VXPayUrlHelper(config.window.URL);

		return {
			flow:             VXPayFlow.PASSWORD_LOST,
			pwdresetUserId:   helper.getQueryParam('u', config.window.location.href),
			pwdresetUserName: helper.getQueryParam('tpLoginPwdLost', config.window.location.href),
			pwdresetEmail:    helper.getQueryParam('tpEmailPwdLost', config.window.location.href)
		};
	}

	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static run(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayLostPassword()');

		const options = Object.assign({}, VXPayLostPassword.defaultFlowOptions(vxpay.config), flowOptions);

		vxpay.paymentFrame.then(frame => frame
			.initSession()
			.sendOptions(options)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.PASS)
		);
        vxpay.config.route = VXPayRoutes.PASS;

		return vxpay;
	}

}
