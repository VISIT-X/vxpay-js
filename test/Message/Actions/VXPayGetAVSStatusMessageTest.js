import {assert}                 from 'chai'
import {describe, it}           from 'mocha'
import VXPayMessage             from './../../../src/VXPay/VXPayMessage'
import VXPayGetAVSStatusMessage from './../../../src/VXPay/Message/Actions/VXPayGetAVSStatusMessage'

describe('VXPayGetAVSStatusMessage', () => {
	describe('#construct()', () => {
		it('Should build a valid message', () => {
			assert.equal(
				(new VXPayGetAVSStatusMessage()).type,
				VXPayMessage.TYPE_ACTION_GET_AVS_STATUS
			);
		});
	});
	describe('#toString()', () => {
		it('Should serialize to JSON', () => {
			assert.equal(
				(new VXPayGetAVSStatusMessage).toString(),
				'{"type":"modalbox-action-getavsstatus","isAction":true}'
			);
		});
	});
});
