import VXPayMessage from './../../VXPayMessage'

class VXPayGetActiveAbosMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TA_ABOS);
		this.isAction = true;
	}
}

export default VXPayGetActiveAbosMessage;
