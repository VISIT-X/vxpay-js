import VXPayMessage from './../VXPayMessage'

export default class VXPayIsVisibleMessage extends VXPayMessage {
	/** {@inheritDoc} */
	constructor() {
		super(VXPayMessage.TYPE_IS_VISIBLE);
	}
}
