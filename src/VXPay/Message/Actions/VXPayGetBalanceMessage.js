import VXPayMessage from './../../VXPayMessage'

class VXPayGetBalanceMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TA_BALANCE);
		this.isAction = true;
	}
}

export default VXPayGetBalanceMessage;
