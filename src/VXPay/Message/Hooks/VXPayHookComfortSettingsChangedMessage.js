import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayHookComfortSettingsChangedMessage extends VXPayHookMessage {
	constructor() {
		super(VXPayHookMessage.H_C_SETTINGS);
	}
}
