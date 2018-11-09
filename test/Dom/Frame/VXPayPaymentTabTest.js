import {assert}                   from 'chai';
import sinon                      from 'sinon';
import {describe, it, beforeEach} from 'mocha';
import {given}                    from 'mocha-testdata';
import VXPayPaymentTab            from './../../../src/VXPay/Dom/Frame/VXPayPaymentTab';
import VXPayTestFx                from './../../Fixtures/VXPayTestFx';
import VXPayConfig                  from './../../../src/VXPay/VXPayConfig';
import VXPayPaymentHooksConfig       from './../../../src/VXPay/Config/VXPayPaymentHooksConfig';
import VXPayLanguage                 from './../../../src/VXPay/VXPayLanguage';
import VXPayFlow                     from './../../../src/VXPay/Config/VXPayFlow';
import VXPayPaymentRoutes            from '../../../src/VXPay/Config/VXPayPaymentRoutes';
import VXPayPaymentFrame             from '../../../src/VXPay/Dom/Frame/VXPayPaymentFrame';
import VXPayIsLoggedInActionMessage  from '../../../src/VXPay/Message/Actions/VXPayIsLoggedInActionMessage';
import VXPayAdditionalOptionsMessage from '../../../src/VXPay/Message/VXPayAdditionalOptionsMessage';
import {JSDOM}                       from 'jsdom';

describe('VXPayPaymentTab', () => {

	/** @var {VXPayPaymentTab} */
	let tab;

	/** @var {VXPayConfig} */
	let config;

	/** @var {Document} */
	let doc;

	/** @var {VXPayPaymentHooksConfig} */
	let hooks;

	beforeEach(done => {
		doc    = VXPayTestFx.getDocument();
		hooks  = new VXPayPaymentHooksConfig();
		config = new VXPayConfig(doc.defaultView);
		tab    = new VXPayPaymentTab(doc, 'test', config, hooks);
		done();
	});

	describe('#constructor()', () => {
		it('Should construct a valid object', () => {
			assert.instanceOf(tab, VXPayPaymentTab);
			assert.instanceOf(tab._hooks, VXPayPaymentHooksConfig);
			assert.equal(tab.route, VXPayPaymentTab.DEFAULT_ROUTE);
			assert.equal(tab.config, config);
			assert.equal(tab._hooks, hooks);
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
	describe('#getNewTab()', () => {
		it('Does not do anything when `doLoad` is false', () => {
			assert.equal(tab.getNewTab(), undefined);
		});
		it('Triggers load then `doLoad` is true', () => {
			// set dummy function to window.open
			tab._document.defaultView.open = () => {};

			// set mock
			sinon.spy(tab._document.defaultView, 'open');
			tab.getNewTab(true);

			assert.isTrue(tab._document.defaultView.open.called);
			assert.equal(tab._document.defaultView.open.getCall(0).args[0], tab._config.getPaymentFrameUrl() + '#' + tab._route);
			assert.equal(tab._document.defaultView.open.getCall(0).args[1], tab._name);
		});
	});
	describe('#triggerLoad()', () => {
		it('Always returns a promise (resolved)', done => {
			// mock with dummy function to avoid errors
			tab._document.defaultView.open = () => {};
			sinon.spy(tab._document.defaultView, 'open');

			assert.instanceOf(tab.triggerLoad(), Promise);
			tab.triggerLoad().then(done);
		});
	});
	describe('#postMessage()', () => {
		it('Routes messages to iFrame if it is an ActionMessage', () => {
			const message = new VXPayIsLoggedInActionMessage();

			sinon.spy(tab._invisibleFrame, 'postMessage');

			tab.postMessage(message);

			assert.isTrue(tab._invisibleFrame.postMessage.called);
			assert.equal(tab._invisibleFrame.postMessage.getCall(0).args[0], message);
		});
		it('Routes messages to tab if it is NOT an ActionMessage and will wait for tab to open', () => {
			const message = new VXPayAdditionalOptionsMessage({'test': 'some'});

			tab.postMessage(message);

			assert.isNull(tab._window);
		});
		it('Routes messages to tab if it is NOT an ActionMessage and execute after load', () => {
			const message = new VXPayAdditionalOptionsMessage({'test': 'some'});
			const vxpPayWindow = (new JSDOM(VXPayTestFx.DOC)).window;

			sinon.spy(vxpPayWindow, 'postMessage');

			// set dummy function to window.open
			tab._document.defaultView.open = (url, name) => vxpPayWindow;

			tab.postMessage(message);
			return tab.triggerLoad().then(() => assert.isTrue(vxpPayWindow.postMessage.called));
		});
	});
});