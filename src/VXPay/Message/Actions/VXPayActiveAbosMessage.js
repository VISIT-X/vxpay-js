import VXPayMessage from './../../VXPayMessage'
import VXPayAbo     from './../../Model/VXPayAbo'

class VXPayActiveAbosMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.T_ABOS);
		this.abos = [];
	}

	/**
	 * @param {VXPayAbo} abo
	 */
	add(abo) {
		this.abos.push(abo);
	}

	/**
	 * @param {Object} data
	 * @return {VXPayActiveAbosMessage}
	 */
	static fromData(data = VXPayActiveAbosMessage.SAMPLE_DATA) {
		const instance = new VXPayActiveAbosMessage;

		// instantiate models
		Object.keys(data).forEach(k => {
			const model      = new VXPayAbo();
			model.amount     = data[k].amount;
			model.endDate    = data[k].endDate;
			model.isActive   = data[k].isActive;
			model.isFreeAbo  = data[k].isFreeAbo;
			model.isPaidAbo  = data[k].isPaidAbo;
			model.isTrialAbo = data[k].isTrialAbo;
			model.name       = data[k].name;

			// append
			instance.add(model);
		});

		return instance;
	}
}

VXPayActiveAbosMessage.SAMPLE_DATA = {
	name: {
		amount:     0,
		endDate:    {},
		isActive:   true,
		isFreeAbo:  false,
		isPaidAbo:  true,
		isTrialAbo: true,
		name:       'Abo'
	}
};

export default VXPayActiveAbosMessage;
