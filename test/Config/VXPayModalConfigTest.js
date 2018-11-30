import {describe, it, beforeEach} from 'mocha';
import {assert, expect}           from 'chai';
import VXPayModalConfig           from './../../src/VXPay/Config/VXPayModalConfig';

describe('VXPayModalConfig', () => {

	/** @var {VXPayModalConfig} config */
	let config;

	beforeEach(() => config = new VXPayModalConfig());

	describe('#construct()', () => {
		it('Should set corrent default values', () => {
			assert.equal(VXPayModalConfig.YES, config.login);
			assert.equal(VXPayModalConfig.YES, config.showHeader);
			assert.equal(VXPayModalConfig.YES, config.showTeaser);
			assert.equal(VXPayModalConfig.YES, config.showFooter);
			assert.equal(VXPayModalConfig.YES, config.support);
			assert.equal(VXPayModalConfig.YES, config.showOAuth);
			assert.equal(VXPayModalConfig.YES, config.showNL);
			assert.equal(VXPayModalConfig.NO, config.neutralHeader);
			assert.equal(VXPayModalConfig.NO, config.teaserBonus);
			assert.equal(VXPayModalConfig.NO, config.showThank);
			assert.equal(VXPayModalConfig.NO, config.showLogo);
			assert.equal(VXPayModalConfig.NO, config.showTeaserBar);
			assert.equal(VXPayModalConfig.NO, config.parentInFrame);
		});
	});
	describe('#login()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.YES, config.login);
			config.login = VXPayModalConfig.NO;
			assert.equal(VXPayModalConfig.NO, config.login);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.login = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#parentInFrame()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.NO, config.parentInFrame);
			config.parentInFrame = VXPayModalConfig.YES;
			assert.equal(VXPayModalConfig.YES, config.parentInFrame);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.parentInFrame = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#showHeader()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.YES, config.showHeader);
			config.showHeader = VXPayModalConfig.NO;
			assert.equal(VXPayModalConfig.NO, config.showHeader);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.showHeader = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#showTeaser()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.YES, config.showTeaser);
			config.showTeaser = VXPayModalConfig.NO;
			assert.equal(VXPayModalConfig.NO, config.showTeaser);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.showTeaser = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#showFooter()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.YES, config.showFooter);
			config.showFooter = VXPayModalConfig.NO;
			assert.equal(VXPayModalConfig.NO, config.showFooter);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.showFooter = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#support()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.YES, config.support);
			config.support = VXPayModalConfig.NO;
			assert.equal(VXPayModalConfig.NO, config.support);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.support = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#neutralHeader()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.NO, config.neutralHeader);
			config.neutralHeader = VXPayModalConfig.YES;
			assert.equal(VXPayModalConfig.YES, config.neutralHeader);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.neutralHeader = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#getAllowed()', () => {
		it('Should return an array with 1 & 0', () => {
			const allowed = VXPayModalConfig.getAllowed();

			expect(allowed).to.be.an('array');
			expect(allowed).to.include(VXPayModalConfig.YES);
			expect(allowed).to.include(VXPayModalConfig.NO);
		});
	});
	describe('#teaserBonus()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.NO, config.teaserBonus);
			config.teaserBonus = VXPayModalConfig.YES;
			assert.equal(VXPayModalConfig.YES, config.teaserBonus);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.teaserBonus = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#showOAuth()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.YES, config.showOAuth);
			config.showOAuth = VXPayModalConfig.NO;
			assert.equal(VXPayModalConfig.NO, config.showOAuth);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.showOAuth = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#showNL()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.YES, config.showNL);
			config.showNL = VXPayModalConfig.NO;
			assert.equal(VXPayModalConfig.NO, config.showNL);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.showNL = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#showThank()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.NO, config.showThank);
			config.showThank = VXPayModalConfig.YES;
			assert.equal(VXPayModalConfig.YES, config.showThank);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.showThank = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#showLogo()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.NO, config.showLogo);
			config.showLogo = VXPayModalConfig.YES;
			assert.equal(VXPayModalConfig.YES, config.showLogo);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.showLogo = 'invalid'; }).to.throw(TypeError);
		});
	});
	describe('#showTeaserBar()', () => {
		it('Should be able to set and get a value', () => {
			assert.equal(VXPayModalConfig.NO, config.showTeaserBar);
			config.showTeaserBar = VXPayModalConfig.YES;
			assert.equal(VXPayModalConfig.YES, config.showTeaserBar);
		});
		it('Should validate a setting value', () => {
			expect(() => { config.showTeaserBar = 'invalid'; }).to.throw(TypeError);
		});
	});
});