import {assert}                              from 'chai';
import {describe, it, beforeEach, afterEach} from 'mocha';
import sinon                                 from 'sinon';
import VXPay                                 from './../src/VXPay';
import VXPayConfig                           from './../src/VXPay/VXPayConfig';
import VXPayLogger                           from './../src/VXPay/VXPayLogger';
import VXPayTestFx                           from './Fixtures/VXPayTestFx';
import VXPayHelperFrame                      from './../src/VXPay/Dom/Frame/VXPayHelperFrame';
import VXPayHelper                           from '../src/VXPay/Middleware/Frames/VXPayHelper';
import VXPayLanguage                         from '../src/VXPay/VXPayLanguage';


let VxPayJs = {};
let logs    = [];

const storeLogs = string => logs.push(string);

beforeEach(() => {
	VxPayJs = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
	sinon.stub(VxPayJs._logger, 'log').callsFake(storeLogs);
});

afterEach(() => {
	logs = [];
});

describe('VXPay', () => {
	describe('#constructor()', () => {
		it('Can only be called with a valid config object', () => {
			assert.throws(() => new VXPay, TypeError, 'Please provide an instance of VXPayConfig!');
		});
		it('Will initialize logger by default', () => {
			const pay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			assert.isTrue(pay.logger instanceof VXPayLogger);
		});
	});
	describe('#config()', () => {
		it('Config can be set on the fly', () => {
			const pay         = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			const newConfig   = new VXPayConfig(VXPayTestFx.getWindow());
			newConfig.logging = true;
			pay.config        = newConfig;
			assert.equal(newConfig, pay.config);
		});
		it('Only a valid config can be accepted', () => {
			const pay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			assert.throws(() => {
				pay.config = {};
			}, TypeError, 'Please provide an instance of VXPayConfig!');
		});
	});
	describe('#logger()', () => {
		it('Logger can be set on the fly', () => {
			const pay       = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			const newLogger = new VXPayLogger(true);
			pay.logger      = newLogger;
			assert.equal(newLogger, pay.logger);
		});
		it('Only a valid logger can be accepted', () => {
			const pay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			assert.throws(() => {
				pay.logger = {};
			}, TypeError, 'Please provide an instance of VXPayLogger!');
		});
	});
	describe('#helperFrame()', () => {
		it('Can accept helper frame on the fly', () => {
			const window      = VXPayTestFx.getWindow();
			const pay         = new VXPay(new VXPayConfig(window));
			const helperFrame = new VXPayHelperFrame(window.document, 'https://example.com');
			pay.helperFrame   = helperFrame;
			assert.equal(helperFrame, pay.helperFrame);
		});
		it('Only a valid helper frame can be accepted', () => {
			const pay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			assert.throws(() => {
				pay.helperFrame = {};
			}, TypeError, 'Helper frame should be an instance of VXPayHelperFrame');
		});
	});
	describe('#hooks()', () => {
		it('Should return a Promise of hooks config for compatibility reasons', () => {
			const pay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			assert.instanceOf(pay.hooks, Promise);
		});
	});
	describe('#apiVersion()', () => {
		it('Can accept API version on the fly', () => {
			const pay      = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			pay.apiVersion = 123;
			assert.equal(123, pay.apiVersion);
		});
		it('API version should change the payment URL', () => {
			const pay    = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			const before = pay.config.getPaymentFrameUrl();

			// change API version
			pay.apiVersion = 555;

			const after = pay.config.getPaymentFrameUrl();

			assert.include(after, 555);
			assert.notEqual(before, after);
		});
	});
	describe('#initHelperFrame()', () => {
		it('Should return a Promise', () => assert.instanceOf(VxPayJs.initHelperFrame(), Promise));
		// not sure why, can't spy on a function :/
		it('Should call corresponding middleware', () => {
			sinon.spy(VXPayHelper, 'init');
			VxPayJs.initHelperFrame();
			assert.isTrue(VXPayHelper.init.called);
			VXPayHelper.init.restore();
		});
	});
    describe('#changeLanguage()', () => {
		it('Should return a Promise', () => assert.instanceOf(VxPayJs.changeLanguage('EN'), Promise));
		it('Should throw if invalid', () => {
            assert.throws(() => {
				VxPayJs.changeLanguage('RU');
			}, TypeError, `Please choose one of: ${VXPayLanguage.getAvailable().toString()}`);
        });
		
		
	});
});
