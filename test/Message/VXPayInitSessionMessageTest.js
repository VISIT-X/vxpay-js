import VXPayInitSessionMessage from './../../src/VXPay/Message/VXPayInitSessionMessage'
import {assert}                from 'chai'
import VXPayMessage            from './../../src/VXPay/VXPayMessage'

describe('VXPayInitSessionMessage', () => {
	describe('#constructor()', () => {
		it('Should construct a correct object', () => {
			const token = 'ndangdnadgn';
			const msg = new VXPayInitSessionMessage(token);

			assert.equal(token, msg.token, "Token doesn't match!");
			assert.equal(VXPayMessage.TYPE_INIT_SESSION, msg.type, "Type doesn't march!");
		})
	});
	describe('#toString()', () => {
		it('Should convert to JSON when called', () => {
			const token = 'gkrwkojbpijpi';
			const msg = new VXPayInitSessionMessage(token);

			assert.equal('{"type":"modalbox-init-session","isAction":false,"token":"gkrwkojbpijpi"}', msg.toString())
		})
	});
});
