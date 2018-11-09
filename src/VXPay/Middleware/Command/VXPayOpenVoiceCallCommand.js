import VXPayPaymentType   from './../../Config/VXPayPaymentType'
import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

class VXPayOpenVoiceCallCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayOpenVoiceCallCommand::run()');

		vxpay.paymentFrame.then(frame => frame
			.sendOptions(VXPayOpenVoiceCallCommand.PARAMS)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.VOICE_CALL)
			.initSession()
		);

		return vxpay;
	}
}

VXPayOpenVoiceCallCommand.PARAMS = {
	flow:    VXPayFlow.MONEY_CHARGE,
	paytype: VXPayPaymentType.VOICE_CALL
};

export default VXPayOpenVoiceCallCommand;
