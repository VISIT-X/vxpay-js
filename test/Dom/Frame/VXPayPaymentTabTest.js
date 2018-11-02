import {assert}                   from 'chai';
import sinon                      from 'sinon';
import {describe, it, beforeEach} from 'mocha';
import {given}                    from 'mocha-testdata';
import VXPayPaymentTab            from './../../../src/VXPay/Dom/Frame/VXPayPaymentTab';
import VXPayTestFx                from './../../Fixtures/VXPayTestFx';
import VXPayConfig                from './../../../src/VXPay/VXPayConfig';
import VXPayPaymentHooksConfig    from './../../../src/VXPay/Config/VXPayPaymentHooksConfig';
import VXPayLanguage              from './../../../src/VXPay/VXPayLanguage';
import VXPayFlow                  from './../../../src/VXPay/Config/VXPayFlow';
import VXPayPaymentRoutes         from '../../../src/VXPay/Config/VXPayPaymentRoutes';
import VXPayPaymentFrame          from '../../../src/VXPay/Dom/Frame/VXPayPaymentFrame';

describe('VXPayPaymentTab', () => {

	/** @var {VXPayPaymentTab} */
	let tab;

	/** @var {VXPayConfig} */
	let config;

	/** @var {Document} */
	let doc;

	beforeEach(done => {
		doc    = VXPayTestFx.getDocument();
		config = new VXPayConfig(doc.defaultView);
		tab    = new VXPayPaymentTab(doc, 'test', config);
		done();
	});

	describe('#constructor()', () => {
		it('Should construct a valid object', () => {
			assert.instanceOf(tab, VXPayPaymentTab);
			assert.instanceOf(tab.hooks, VXPayPaymentHooksConfig);
			assert.equal(tab.route, VXPayPaymentTab.DEFAULT_ROUTE);
			assert.equal(tab.config, config);
			assert.equal(tab.document, doc);
			assert.equal(tab.name, 'test');
			assert.isFalse(tab.loaded);
		});
		it('Should setup a communication frame when constructed', () => {
			// check constructs communication tube
			assert.instanceOf(tab._invisibleFrame, VXPayPaymentFrame);
		});
	});
	describe('#sendOptions()', () => {
		it('Should update the config', () => {
			const options = {
				flow:     VXPayFlow.CHANGE_LS,
				language: VXPayLanguage.NL
			};

			// set mock
			sinon.spy(tab._config, 'merge');

			// call
			tab.sendOptions(options);

			// check merge called with correct params
			assert.isTrue(tab._config.merge.called);
			assert.equal(tab._config.merge.getCall(0).args[0], options);

			// cleanup
			tab._config.merge.restore();
		});
	});
	describe('#changeRoute', () => {
		it('Changes route to default with no param', () => {
			tab.changeRoute(VXPayPaymentRoutes.AUTO_RECHARGE);
			tab.changeRoute();
			assert.equal(tab.route, VXPayPaymentTab.DEFAULT_ROUTE);
		});
		given(VXPayPaymentRoutes.getAllowed())
			.test('Stores the changed route', route => {
				tab.changeRoute(route);
				assert.equal(tab.route, route);
			});
	});
	describe('#triggerLoad()', () => {
		it('Should create a new tab', done => {
			// re-define function to mock
			tab.getNewTab = () => {
				assert.isTrue(true);
				done();
			};

			try {
				tab.triggerLoad();
			} catch (err) { /* ignore */
			}
		});
		it('Should start listening for postMessage-s', done => {
			const window = VXPayTestFx.getWindow();

			// re-define functions to mock
			tab.getNewTab      = () => new Promise(resolve => resolve(window));
			tab.startListening = (wnd) => {
				assert.equal(wnd, window);
				done();
			};

			try {
				tab.triggerLoad();
			} catch (err) { /* ignore */
			}
		});
	});
	describe('#getNewTab()', () => {
		it('Should open a new window', done => {
			const targetUrl = tab.config.getPaymentFrameUrl() + '#' + tab.route;

			// define window open function
			tab.document.defaultView.open = (url, name) => {
				assert.equal(url, targetUrl);
				assert.equal(name, 'test');
				done();
			};

			tab.getNewTab();
		});
		it('Should resolve when window already open', done => {
			const dummyWindow = {
				closed: false
			};

			// set to be opened
			tab.document.defaultView.open = () => dummyWindow;

			// call first time to open
			tab.getNewTab().then(wnd => {
				assert.equal(wnd, dummyWindow);
				dummyWindow.pass = true;
			});

			// and call again
			tab.getNewTab().then(wnd => {
				assert.isTrue(wnd.pass);
				done();
			});
		});
	});
});