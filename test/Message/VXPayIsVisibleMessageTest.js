import {assert}                from 'chai'
import VXPayMessage            from './../../src/VXPay/VXPayMessage'
import VXPayIsVisibleMessage   from './../../src/VXPay/Message/VXPayIsVisibleMessage'

describe('VXPayIsVisibleMessage', () => {
	describe('#constructor()', () => {
		it('Should construct a correct object', () => {
			const msg = new VXPayIsVisibleMessage();
			assert.equal(VXPayMessage.TYPE_IS_VISIBLE, msg.type, "Type doesn't match!");

			// try to build with an invalid type
			const msg2 = new VXPayIsVisibleMessage(VXPayMessage.TYPE_ACTION_GET_AVS_STATUS);
			assert.equal(VXPayMessage.TYPE_IS_VISIBLE, msg2.type, "Type doesn't match!");
		})
	});
	describe('#toString()', () => {
		it('Should convert to JSON when called', () => {
			const msg = new VXPayIsVisibleMessage();

			assert.equal('{"type":"modalbox-is-visible","isAction":false}', msg.toString())
		})
	});
});
