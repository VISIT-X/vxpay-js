import VXPayMessage  from './../../VXPayMessage'
import VXPayCurrency from './../../Config/VXPayCurrency'
import VXPayBalance  from './../../Model/VXPayBalance'

class VXPayBalanceMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.T_BALANCE);
		this.balance = new VXPayBalance();
	}

	/**
	 * @param {Object} data
	 * @return {VXPayBalanceMessage}
	 */
	static fromData(data = VXPayBalanceMessage.SAMPLE_DATA) {
		const instance   = new VXPayBalanceMessage;
		instance.balance = new VXPayBalance(data.balance, data.currency);
		return instance;
	}
}

VXPayBalanceMessage.SAMPLE_DATA = {
	balance:  0,
	currency: VXPayCurrency.EUR
};

export default VXPayBalanceMessage;
