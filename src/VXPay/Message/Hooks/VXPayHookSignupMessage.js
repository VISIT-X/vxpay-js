import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayHookSignupMessage extends VXPayHookMessage {
	constructor() {
		super(VXPayHookMessage.H_SIGNUP);
	}
}