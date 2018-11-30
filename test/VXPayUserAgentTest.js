import {assert}       from 'chai';
import {describe, it} from 'mocha';
import VXPayUserAgent from '../src/VXPay/VXPayUserAgent';

describe('VXPayUserAgent', () => {
	it('Should accept a UA string on construct', () => {
		const ua = new VXPayUserAgent('test');
		assert.equal('test', ua.userAgent);
	});
	it('Should accept a UA string on the fly', () => {
		const ua = new VXPayUserAgent('test');
		ua.userAgent = 'new';
		assert.equal('new', ua.userAgent);
	});
});
