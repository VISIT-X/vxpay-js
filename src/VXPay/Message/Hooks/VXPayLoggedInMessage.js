import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayLoggedInMessage extends VXPayHookMessage {
	constructor() {
		super(VXPayHookMessage.H_LOGIN);
	}
}
