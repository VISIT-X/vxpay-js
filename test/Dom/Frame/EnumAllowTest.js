import {describe, it} from 'mocha';
import {assert}       from 'chai';
import EnumAllow      from '../../../src/VXPay/Dom/Frame/EnumAllow';

describe('EnumAllowTest', () => {
	it('Should return default values as array', () => {
		assert.isArray(EnumAllow.getDefaults());
	});
	it('Each of allow options should be strings', () => {
		EnumAllow.getDefaults().forEach(option => {
			assert.isString(option);
		});
	});
});