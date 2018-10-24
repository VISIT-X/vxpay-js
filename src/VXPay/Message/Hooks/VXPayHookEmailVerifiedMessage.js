import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayHookEmailVerifiedMessage extends VXPayHookMessage {
	constructor() {
		super(VXPayHookMessage.HOOK_EMAIL_VERIFIED);
	}
}