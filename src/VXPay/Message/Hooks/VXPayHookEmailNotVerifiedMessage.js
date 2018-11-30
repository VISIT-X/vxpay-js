import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayHookEmailNotVerifiedMessage extends VXPayHookMessage {
	constructor() {
		super(VXPayHookMessage.H_E_NOT_VERIFIED);
	}
}