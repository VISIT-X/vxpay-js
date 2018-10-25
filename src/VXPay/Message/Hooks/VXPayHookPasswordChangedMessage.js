import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayHookPasswordChangedMessage extends VXPayHookMessage {
	constructor() {
		super(VXPayHookMessage.HOOK_PASSWORD_CHANGED);
	}
}