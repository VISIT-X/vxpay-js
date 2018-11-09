import VXPayMessage from './../../VXPayMessage'

class VXPayGetBalanceMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TYPE_ACTION_GET_BALANCE);
		this.isAction = true;
	}
}

export default VXPayGetBalanceMessage;
