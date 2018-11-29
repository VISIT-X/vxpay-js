import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayHookPasswordChangedMessage extends VXPayHookMessage {
	constructor() {
		super(VXPayHookMessage.H_PASS);
	}
}