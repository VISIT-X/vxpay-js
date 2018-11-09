import {assert}                   from 'chai';
import {describe, it, beforeEach} from 'mocha';
import VXPayPaymentHooksConfig    from './../../../src/VXPay/Config/VXPayPaymentHooksConfig';
import VXPayPaymentFrame          from './../../../src/VXPay/Dom/Frame/VXPayPaymentFrame';
import VXPayTestFx                from './../../Fixtures/VXPayTestFx';

describe('VXPayPaymentFrameTest', () => {

	/** @var {VXPayPaymentFrame} */
	let frame;

	/** @var {VXPayPaymentHooksConfig} */
	let hooks;

	/** @var {Document} */
	let doc;

	/** @var {String} */
	let fid = 'test-frame-id';

	beforeEach(done => {
		doc   = VXPayTestFx.getDocument();
		hooks = new VXPayPaymentHooksConfig();
		frame = new VXPayPaymentFrame(doc, 'https://example.com', fid, hooks);
		done();
	});

	describe('#triggerLoad()', done => {
		it('Should inject a frame into Document', () => {
			assert.isFalse(frame.loaded);
			hooks.onLoad(() => {
				assert.isTrue(frame.loaded);
				assert.equal(doc.getElementById(fid).length, 1);
				done();
			});
			frame.triggerLoad();
		});
	});
});