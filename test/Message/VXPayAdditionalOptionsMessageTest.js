import {assert}               from 'chai';
import {describe, it}         from 'mocha';
import VXPayMessage           from './../../src/VXPay/VXPayMessage';
import VXPayAdditionalOptions from '../../src/VXPay/Message/VXPayAdditionalOptions';

describe('VXPayAdditionalOptionsMessageTest', () => {
	describe('#constructor()', () => {
		it('Should construct a correct object', () => {
			const msg = new VXPayAdditionalOptions();
			assert.equal(VXPayMessage.T_INFO, msg.type, 'Type doesn\'t match!');
			assert.empty(msg.options);
		});
	});
	describe('#toString()', () => {
		it('Should convert to JSON when called', () => {
			assert.equal(
				'{"type":"modalbox-additional-info","isAction":false,"options":{}}',
				(new VXPayAdditionalOptions).toString()
			);
			assert.equal(
				'{"type":"modalbox-additional-info","isAction":false,"options":{"test":"foobar"}}',
				(new VXPayAdditionalOptions({test: 'foobar'})).toString()
			);
		});
	});
});
