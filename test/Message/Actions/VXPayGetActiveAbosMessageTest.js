import {assert}                  from 'chai'
import {describe, it}            from 'mocha'
import VXPayMessage              from './../../../src/VXPay/VXPayMessage'
import VXPayGetActiveAbosMessage from './../../../src/VXPay/Message/Actions/VXPayGetActiveAbosMessage'

describe('VXPayGetActiveAbosMessage', () => {
	describe('#construct()', () => {
		it('Should build a valid message', () => {
			assert.equal(
				(new VXPayGetActiveAbosMessage()).type,
				VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS
			);
		});
	});
	describe('#toString()', () => {
		it('Should serialize to JSON', () => {
			assert.equal(
				(new VXPayGetActiveAbosMessage()).toString(),
				'{"type":"modalbox-action-getactiveabos","isAction":true}'
			);
		});
	});
});
