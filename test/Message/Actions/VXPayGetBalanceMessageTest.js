import {assert}               from 'chai'
import {describe, it}         from 'mocha'
import VXPayMessage           from './../../../src/VXPay/VXPayMessage'
import VXPayGetBalanceMessage from './../../../src/VXPay/Message/Actions/VXPayGetBalanceMessage'

describe('VXPayGetActiveAbosMessage', () => {
	describe('#construct()', () => {
		it('Should build a valid message', () => {
			assert.equal(
				(new VXPayGetBalanceMessage()).type,
				VXPayMessage.TYPE_ACTION_GET_BALANCE
			);
		});
	});
	describe('#toString()', () => {
		it('Should serialize to JSON', () => {
			assert.equal(
				(new VXPayGetBalanceMessage()).toString(),
				'{"type":"modalbox-action-getbalance","isAction":true}'
			);
		});
	});
});
