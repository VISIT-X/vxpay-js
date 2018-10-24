import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayHookComfortSettingsChangedMessage extends VXPayHookMessage {
	constructor() {
		super(VXPayHookMessage.HOOK_COMFORT_SETTINGS_CHANGED);
	}
}
