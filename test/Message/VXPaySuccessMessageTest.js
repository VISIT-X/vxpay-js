import {assert}            from 'chai';
import {describe, it}      from 'mocha';
import VXPaySuccessMessage from '../../src/VXPay/Message/VXPaySuccessMessage';
import VXPayMessage        from '../../src/VXPay/VXPayMessage';

describe('VXPaySuccessMessage', () => {
	describe('#constructor()', () => {
		it('Should construct a success message', () => {
			const successMessage = new VXPaySuccessMessage();
			assert.equal(VXPayMessage.TYPE_SUCCESS, successMessage.type);
		});
		it('Should populate a `uhash` param if provided with the one', () => {
			const uHash = 'some-test-string';
			const successMessage = new VXPaySuccessMessage({uhash: uHash});
			assert.equal(uHash, successMessage.user.uhash);
		});
	});
});