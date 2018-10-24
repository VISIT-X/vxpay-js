import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayHookEmailNotVerifiedMessage extends VXPayHookMessage {
	constructor() {
		super(VXPayHookMessage.HOOK_EMAIL_NOT_VERIFIED);
	}
}