import {assert}           from 'chai'
import sinon              from 'sinon'
import {URL}              from 'url'
import {describe, it}     from 'mocha'
import VXPayIframe        from './../../src/VXPay/Dom/VXPayIframe'
import VXPayTestFx        from './../Fixtures/VXPayTestFx'
import VXPayEventListener from './../../src/VXPay/Event/VXPayEventListener'

describe('VXPayIframeTest', () => {

	/**
	 * @var {VXPayIframe} iframe
	 */
	let iframe;

	beforeEach(done => {
		iframe = new VXPayIframe(VXPayTestFx.getDocument(), 'http://example.com', 'test-frame');
		done();
	});

	describe('#constructor()', () => {
		it('Should throw an error on an invalid Document', () => {
			assert.throws(
				() => new VXPayIframe({}),
				TypeError,
				'An iFrame can only be build on a valid Document object!'
			)
		});
		it('Should throw an error on an invalid URL', () => {
			assert.throws(
				() => new VXPayIframe(VXPayTestFx.getDocument(), 'bfdsbndfnadgna'),
				TypeError,
				'Please provide a valid URL! bfdsbndfnadg'
			)
		});
		it('Should throw an error on an empty ID', () => {
			assert.throws(
				() => new VXPayIframe(VXPayTestFx.getDocument(), 'https://example.com', ''),
				TypeError,
				'Please provide a valid frame ID!'
			);
			assert.throws(
				() => new VXPayIframe(VXPayTestFx.getDocument(), 'https://example.com', false),
				TypeError,
				'Please provide a valid frame ID!'
			)
		});
		it('Should create an iframe element on valid Document', () => {
			// can't compare instance of objects as node.js doesn't have HTMLIframeElement
			assert.equal(iframe.frame.tagName.toLowerCase(), 'iframe');
		});
		it('Should apply styles if passed', () => {
			const styles = {
				width:   '675px',
				height:  '740px',
				top:     '5%',
				left:    '50%',
				display: 'none',
			};
			const iframe = new VXPayIframe(VXPayTestFx.getDocument(), 'http://example.com', 'test-frame', styles);

			// loop applied styles and check values
			for (let name in styles) {
				assert.equal(
					iframe.frame.style.getPropertyValue(name),
					styles[name],
					'Style property `' + name + "` doesn't match!"
				);
			}
		});
	});
	describe('#maximize()', () => {
		it('Should apply appropriate styles', () => {
			// check chainable
			assert.instanceOf(iframe.maximize(), VXPayIframe);

			// check styles
			assert.equal(iframe.frame.style.width, VXPayIframe.MAX_WIDTH);
			// somehow JSDOM doesn't understand vh, only px, so skip for now
			// assert.equal(iframe.frame.style.height, VXPayIframe.MAX_HEIGHT);
			assert.equal(iframe.frame.style.top, VXPayIframe.MAX_TOP + 'px', "Style `top` doesn't match!");
			assert.equal(iframe.frame.style.left, VXPayIframe.MAX_LEFT + 'px', "Style `left` doesn't match!");
			assert.equal(iframe.frame.style.marginLeft, VXPayIframe.MAX_LEFT_MARGIN + 'px', "Style `marginLeft` doesn't match!");
		});
	});
	describe('#triggerLoad()', () => {
		it('Should be implemented in child', () => {
			assert.throws(iframe.triggerLoad, Error, 'Method triggerLoad should be implemented in child class!')
		})
	});
	describe('#markLoaded()', () => {
		it('Should be implemented in child', () => {
			assert.isFalse(iframe.loaded);
			iframe._markLoaded();
			assert.isTrue(iframe.loaded);
		})
	});
	describe('#show()', () => {
		it('Should set display style to block', () => {
			assert.equal(iframe.frame.style.display, '');
			iframe.show();
			assert.equal(iframe.frame.style.display, VXPayIframe.DISPLAY_BLOCK);
		})
	});
	describe('#hide()', () => {
		it('Should set display style to none', () => {
			assert.equal(iframe.frame.style.display, '');
			iframe.hide();
			assert.equal(iframe.frame.style.display, VXPayIframe.DISPLAY_NONE);
		})
	});
});
