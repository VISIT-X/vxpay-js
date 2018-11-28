import {describe, it, beforeEach} from 'mocha';
import {assert}                   from 'chai';
import VXPayHooksConfig           from './../../src/VXPay/Config/VXPayHooksConfig';

describe('VXPayHooksConfig', () => {

	let hooks;

	beforeEach(done => {
		hooks = new VXPayHooksConfig();
		done();
	});

	describe('#onLoad()', () => {
		it('Should allow setting onLoad hook', () => {
			assert.equal(0, hooks._onLoad.length);
			hooks.onLoad(() => {});
			assert.equal(1, hooks._onLoad.length);
		});
	});
	describe('#onAny()', () => {
		it('Should allow setting onAny hook', () => {
			assert.equal(0, hooks._onAny.length);
			hooks.onAny(() => {});
			assert.equal(1, hooks._onAny.length);
		});
	});
	describe('#onBeforeSend()', () => {
		it('Should allow setting onBeforeSend hook', () => {
			assert.equal(0, hooks._onBeforeSend.length);
			hooks.onBeforeSend(() => {});
			assert.equal(1, hooks._onBeforeSend.length);
		});
	});
	describe('#trigger()', () => {
		it('Should throw on unknown hook', () => {
			assert.throws(
				() => hooks.trigger('foo', ['bar']),
				Error,
				'Hook foo not available!'
			);
		});
	});
});
