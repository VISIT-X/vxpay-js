import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayHookPaymentMessage extends VXPayHookMessage {
	constructor() {
		super(VXPayHookMessage.HOOK_PAYMENT);
	}
}
