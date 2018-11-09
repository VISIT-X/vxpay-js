import {assert}          from 'chai'
import {describe, it}    from 'mocha'
import VXPay             from './../src/VXPay'
import VXPayConfig       from './../src/VXPay/VXPayConfig'
import VXPayLogger       from './../src/VXPay/VXPayLogger'
import VXPayTestFx       from './Fixtures/VXPayTestFx'
import VXPayHelperFrame  from './../src/VXPay/Dom/Frame/VXPayHelperFrame'
import VXPayPaymentFrame from './../src/VXPay/Dom/Frame/VXPayPaymentFrame'
import VXPayPaymentTab   from './../src/VXPay/Dom/Frame/VXPayPaymentTab'

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
	describe('#paymentFrame()', () => {
		xit('Can accept VXPayPaymentFrame on the fly', () => {
			const window     = VXPayTestFx.getWindow();
			const pay        = new VXPay(new VXPayConfig(window));
			const frame      = new VXPayPaymentFrame(window.document, 'https://example.com');
			pay.paymentFrame = frame;
			assert.equal(frame, pay.paymentFrame);
		});
		xit('Can accept VXPayPaymentTab on the fly', () => {
			const window     = VXPayTestFx.getWindow();
			const config     = new VXPayConfig(window);
			const pay        = new VXPay(config);
			const frame      = new VXPayPaymentTab(window.document, 'test', config);
			pay.paymentFrame = frame;
			assert.equal(frame, pay.paymentFrame);
		});
		it('Only a valid payment frame can be accepted', () => {
			const pay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			assert.throws(() => {
				pay.paymentFrame = {};
			}, TypeError, 'Payment frame should be an instance of VXPayPaymentFrame or VXPayPaymentTab');
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
			const pay        = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			pay.apiVersion = 123;
			assert.equal(123, pay.apiVersion);
		});
		it('API version should change the payment URL', () => {
			const pay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow())),
			      before = pay.config.getPaymentFrameUrl();

			// change API version
			pay.apiVersion = 555;

			const after = pay.config.getPaymentFrameUrl();

			assert.include(after, 555);
			assert.notEqual(before, after);
		})
	});
});
