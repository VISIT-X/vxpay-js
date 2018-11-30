import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayHookEmailVerifiedMessage extends VXPayHookMessage {
	constructor() {
		super(VXPayHookMessage.H_E_VERIFIED);
	}
}