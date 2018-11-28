import {describe, it, beforeEach} from 'mocha';
import {assert}           from 'chai';
import VXPayUser                  from './../../src/VXPay/Config/VXPayUser';

describe('VXPayUser', () => {

	/** @var {VXPayUser} user */
	let user;

	beforeEach(() => user = new VXPayUser());

	describe('#construct()', () => {
		it('Should set empty values by default', () => {
			assert.isNaN(user.userId);
			assert.isNaN(user.balance);
			assert.isFalse(user.fsk18);
			assert.isString(user.nickname);
			assert.isEmpty(user.nickname);
			assert.isString(user.uhash);
			assert.isEmpty(user.uhash);
		});
	});
	describe('#balance()', () => {
		it('Should be able to set and get a value', () => {
			user.balance = 12.99;
			assert.equal(12.99, user.balance);
		});
	});
	describe('#fsk18()', () => {
		it('Should be able to set and get a value', () => {
			user.fsk18 = true;
			assert.isTrue(user.fsk18);
		});
	});
	describe('#nickname()', () => {
		it('Should be able to set and get a value', () => {
			user.nickname = 'mocha';
			assert.equal('mocha', user.nickname);
		});
	});
	describe('#userId()', () => {
		it('Should be able to set and get a value', () => {
			user.userId = 12345;
			assert.equal(12345, user.userId);
		});
	});
	describe('#uhash()', () => {
		it('Should be able to set and get a value', () => {
			user.uhash = 'bnfklbnaflnbfbadlnbl-bfbf-bfdbfabda';
			assert.equal('bnfklbnaflnbfbadlnbl-bfbf-bfdbfabda', user.uhash);
		});
	});
});