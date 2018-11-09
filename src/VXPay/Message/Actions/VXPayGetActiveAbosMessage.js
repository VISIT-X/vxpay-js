import VXPayMessage from './../../VXPayMessage'

class VXPayGetActiveAbosMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS);
		this.isAction = true;
	}
}

export default VXPayGetActiveAbosMessage;
