import {assert}                from 'chai';
import {describe, it}          from 'mocha';
import VXPayIframeCloseMessage from './../../src/VXPay/Message/VXPayIframeCloseMessage';
import VXPayMessage            from './../../src/VXPay/VXPayMessage';
import VXPayTestFx             from '../Fixtures/VXPayTestFx';

describe('VXPayIframeCloseMessage', () => {
	describe('#construct()', () => {
		it('Should build a valid object with no params', () => {
			const msg = new VXPayIframeCloseMessage;
			assert.instanceOf(msg, VXPayIframeCloseMessage);
			assert.equal(msg.type, VXPayMessage.T_IFR_CLOSE);
		});
		it('Should build a valid object with any data', () => {
			const msgString = VXPayTestFx.getMessage('iframe-close'),
			      data      = JSON.parse(msgString).data,
			      msg       = new VXPayIframeCloseMessage(data);

			assert.instanceOf(msg, VXPayIframeCloseMessage);
			assert.equal(msg.type, VXPayMessage.T_IFR_CLOSE);
			assert.equal(msg.data, data);
		});
	});
});
