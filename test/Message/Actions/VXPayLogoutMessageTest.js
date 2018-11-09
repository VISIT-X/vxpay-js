import {assert}           from 'chai'
import {describe, it}     from 'mocha'
import VXPayMessage       from './../../../src/VXPay/VXPayMessage'
import VXPayLogoutMessage from './../../../src/VXPay/Message/Actions/VXPayLogoutMessage'

describe('VXPayGetActiveAbosMessage', () => {
	describe('#construct()', () => {
		it('Should build a valid message', () => {
			assert.equal(
				(new VXPayLogoutMessage()).type,
				VXPayMessage.TYPE_ACTION_LOGOUT
			);
		});
	});
	describe('#toString()', () => {
		it('Should serialize to JSON', () => {
			assert.equal(
				(new VXPayLogoutMessage()).toString(),
				'{"type":"modalbox-action-logout","isAction":true}'
			);
		});
	});
});
