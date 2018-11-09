import {assert}                     from 'chai'
import {describe, it}               from 'mocha'
import VXPayMessage                 from './../../../src/VXPay/VXPayMessage'
import VXPayIsLoggedInActionMessage from './../../../src/VXPay/Message/Actions/VXPayIsLoggedInActionMessage'

describe('VXPayGetActiveAbosMessage', () => {
	describe('#construct()', () => {
		it('Should build a valid message', () => {
			assert.equal(
				(new VXPayIsLoggedInActionMessage()).type,
				VXPayMessage.TYPE_ACTION_IS_LOGGED_IN
			);
		});
	});
	describe('#toString()', () => {
		it('Should serialize to JSON', () => {
			assert.equal(
				(new VXPayIsLoggedInActionMessage()).toString(),
				'{"type":"modalbox-action-isLoggedIn","isAction":true}'
			);
		});
	});
});
