import {assert}                 from 'chai'
import VXPayMessage             from './../../src/VXPay/VXPayMessage'
import VXPayUpdateParamsMessage from './../../src/VXPay/Message/VXPayUpdateParamsMessage'

describe('VXPayUpdateParamsMessageTest', () => {
	describe('#constructor()', () => {
		it('Should construct a correct object', () => {
			const msg = new VXPayUpdateParamsMessage();
			assert.equal(VXPayMessage.T_PARAMS, msg.type, "Type doesn't match!");
			assert.empty(msg.options);
		})
	});
	describe('#toString()', () => {
		it('Should convert to JSON when called', () => {
			assert.equal(
				'{"type":"modalbox-update-params","isAction":false,"options":{}}',
				(new VXPayUpdateParamsMessage).toString()
			);
			assert.equal(
				'{"type":"modalbox-update-params","isAction":false,"options":{"test":"foobar"}}',
				(new VXPayUpdateParamsMessage({test: "foobar"})).toString()
			)
		})
	});
});
