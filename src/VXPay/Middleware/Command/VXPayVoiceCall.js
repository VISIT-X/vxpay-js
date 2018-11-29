import VXPayPaymentType from './../../Config/VXPayPaymentType'
import VXPayFlow        from './../../Config/VXPayFlow'
import VXPayRoutes      from '../../Config/VXPayRoutes'

class VXPayVoiceCall {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static open(vxpay) {
		vxpay.logger.log('VXPayVoiceCall::reset()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(VXPayVoiceCall.PARAMS)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayRoutes.VOICE_CALL)
			.initSession()
		);

		return vxpay;
	}
}

VXPayVoiceCall.PARAMS = {
	flow:    VXPayFlow.CHARGE,
	paytype: VXPayPaymentType.VOICE_CALL
};

export default VXPayVoiceCall;
