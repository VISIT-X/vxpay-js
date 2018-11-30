import {assert}                  from 'chai'
import VXPayContentLoadedMessage from './../../src/VXPay/Message/VXPayContentLoadedMessage'
import VXPayMessage              from './../../src/VXPay/VXPayMessage'
import VXPayTestFx               from './../Fixtures/VXPayTestFx'

describe('VXPayContentLoadedMessage', () => {
	describe('#constructor()', () => {
		it('Should build a correct object', () => {
			assert.equal(
				(new VXPayContentLoadedMessage()).type,
				VXPayMessage.T_CONTENT
			);
		});
		it('Should convert to JSON when toString is called', () => {
			assert.equal(
				VXPayTestFx.json(VXPayTestFx.getMessage('content-loaded')),
				(new VXPayContentLoadedMessage()).toString()
			);
		})
	})
});
