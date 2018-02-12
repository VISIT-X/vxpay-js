import {assert}                     from 'chai'
import VXPayHasSessionCookieMessage from './../../src/VXPay/Message/VXPayHasSessionCookieMessage'
import VXPayMessage                 from './../../src/VXPay/VXPayMessage'

describe('VXPayHasSessionCookieMessage', () => {
	describe('#constructor()', () => {
		it('Should build a proper object', () => {
			const message = new VXPayHasSessionCookieMessage(true);
			assert.equal(message.type, VXPayMessage.TYPE_HAS_LOGIN_COOKIE);
			assert.isTrue(message.hasCookie);

			const message2 = new VXPayHasSessionCookieMessage(false);
			assert.equal(message2.type, VXPayMessage.TYPE_HAS_LOGIN_COOKIE);
			assert.isFalse(message2.hasCookie);
		})
	});
	describe('#toString()', () => {
		it('Should convert to JSON when called', () => {
			const msg = new VXPayHasSessionCookieMessage(false);
			assert.equal('{"type":"modalbox-response-hasLoginCookie","hasCookie":false}', msg.toString());

			const msg2 = new VXPayHasSessionCookieMessage(true);
			assert.equal('{"type":"modalbox-response-hasLoginCookie","hasCookie":true}', msg2.toString())
		})
	});
});
