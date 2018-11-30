import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayFlowChangedHookMessage extends VXPayHookMessage {
	/**
	 * @param {string} oldFlow
	 * @param {string} newFlow
	 */
	constructor(oldFlow = '', newFlow = '') {
		super(VXPayHookMessage.H_FLOW);
		this.oldFlow  = oldFlow;
		this.newFlow = newFlow;
	}
}
