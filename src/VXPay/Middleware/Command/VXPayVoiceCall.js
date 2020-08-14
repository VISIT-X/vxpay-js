import VXPayPaymentType from './../../Config/VXPayPaymentType'
import VXPayFlow        from './../../Config/VXPayFlow'
import VXPayRoutes      from '../../Config/VXPayRoutes'

class VXPayVoiceCall {
	/**
	 * @return {Object}
	 */
	static defaultFlowOptions() {
		return {
			flow:    VXPayFlow.CHARGE,
			paytype: VXPayPaymentType.VOICE_CALL
		};
	}

	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static open(vxpay) {
		vxpay.logger.log('VXPayVoiceCall::reset()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(self.defaultFlowOptions())
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.VOICE_CALL)
			.initSession()
		);
        vxpay.config.route = VXPayRoutes.VOICE_CALL;

		return vxpay;
	}
}

export default VXPayVoiceCall;
