import {assert}                      from 'chai';
import sinon                         from 'sinon';
import {describe, it, beforeEach}    from 'mocha';
import {given}                       from 'mocha-testdata';
import VXPayPaymentTab               from './../../../src/VXPay/Dom/Frame/VXPayPaymentTab';
import VXPayTestFx                   from './../../Fixtures/VXPayTestFx';
import VXPayConfig                   from './../../../src/VXPay/VXPayConfig';
import VXPayPaymentHooksConfig      from './../../../src/VXPay/Config/VXPayPaymentHooksConfig';
import VXPayLanguage                from './../../../src/VXPay/VXPayLanguage';
import VXPayFlow                    from './../../../src/VXPay/Config/VXPayFlow';
import VXPayRoutes                  from '../../../src/VXPay/Config/VXPayRoutes';
import VXPayPaymentFrame            from '../../../src/VXPay/Dom/Frame/VXPayPaymentFrame';
import VXPayIsLoggedInActionMessage from '../../../src/VXPay/Message/Actions/VXPayIsLoggedInActionMessage';
import VXPayAdditionalOptions       from '../../../src/VXPay/Message/VXPayAdditionalOptions';
import {JSDOM}                      from 'jsdom';
import VXPayUpdateParamsMessage     from '../../../src/VXPay/Message/VXPayUpdateParamsMessage';
import VXPayInitSessionMessage      from '../../../src/VXPay/Message/VXPayInitSessionMessage';

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
			tab.changeRoute(VXPayRoutes.RECHARGE);
			tab.changeRoute();
			assert.equal(tab.route, VXPayPaymentTab.DEFAULT_ROUTE);
		});
		given(VXPayRoutes.getAllowed())
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
			tab._document.defaultView.open.restore();
		});
	});
	describe('#triggerLoad()', () => {
		it('Always returns a promise (resolved)', done => {
			// mock with dummy function to avoid errors
			tab._document.defaultView.open = () => {};
			sinon.spy(tab._document.defaultView, 'open');

			assert.instanceOf(tab.triggerLoad(), Promise);
			tab.triggerLoad().then(() => {
				tab._document.defaultView.open.restore();
				done();
			});
		});
	});
	describe('#message()', () => {
		it('Routes messages to iFrame if it is an ActionMessage', () => {
			const message = new VXPayIsLoggedInActionMessage();

			sinon.spy(tab._invisibleFrame, 'message');

			tab.message(message);

			assert.isTrue(tab._invisibleFrame.message.called);
			assert.equal(tab._invisibleFrame.message.getCall(0).args[0], message);
			tab._invisibleFrame.message.restore();
		});
		it('Routes messages to tab if it is NOT an ActionMessage and will wait for tab to open', () => {
			const message = new VXPayAdditionalOptions({'test': 'some'});

			tab.message(message);

			assert.isNull(tab._window);
		});
		it('Routes messages to tab if it is NOT an ActionMessage and execute after load', () => {
			const message      = new VXPayAdditionalOptions({'test': 'some'});
			const vxpPayWindow = (new JSDOM(VXPayTestFx.DOC)).window;

			sinon.spy(vxpPayWindow, 'postMessage');

			// set dummy function to window.open
			tab._document.defaultView.open = (url, name) => vxpPayWindow;

			tab.message(message);
			return tab.triggerLoad().then(() => {
				assert.isTrue(vxpPayWindow.postMessage.called);
				vxpPayWindow.postMessage.restore();
			});
		})
	});
	describe('#sendAdditionalOptions()', () => {
		it('Should send a message to tab with options', () => {
			const additional = {'test': 'some'};
			const message    = new VXPayAdditionalOptions(additional);

			sinon.spy(tab, 'message');

			tab.sendAdditionalOptions(additional);

			assert.isTrue(tab.message.called);
			assert.equal(tab.message.getCall(0).args[0].toString(), message.toString());

			tab.message.restore();
		});
		it('Should merge options with config', () => {
			// set some config values
			config = new VXPayConfig(doc.defaultView);
			config.flow     = VXPayFlow.AVS;
			config.language = VXPayLanguage.NL;

			// re-create tab with new config
			tab = new VXPayPaymentTab(doc, 'test', config, hooks);

			const additional = {'pfm': 'some'};
			const message    = new VXPayAdditionalOptions(additional);

			sinon.spy(tab, 'message');

			tab.sendAdditionalOptions(additional);

			assert.isTrue(tab.message.called);
			assert.equal(tab.message.getCall(0).args[0].toString(), message.toString());
			assert.equal(tab.config.pfm, 'some');

			tab.message.restore();
		})
	});
	describe('#sendUpdateParams()', () => {
		it('Should send a message to tab with params', () => {
			const params = {'test': 'some'};
			const message    = new VXPayUpdateParamsMessage(params);

			sinon.spy(tab, 'message');

			tab.sendUpdateParams(params);

			assert.isTrue(tab.message.called);
			assert.equal(tab.message.getCall(0).args[0].toString(), message.toString());

			tab.message.restore();
		})
	});
	describe('#hide()', () => {
		it('Should close the window if not yet closed', () => {
			tab._window = {
				close: () => {},
				closed: false,
			};

			tab.resetWindow = sinon.fake();
			sinon.spy(tab._window, 'close');

			tab.hide();

			assert.isTrue(tab._window.close.called);
			assert.isTrue(tab.resetWindow.called);

			tab._window.close.restore();
		})
	});
	describe('#resetWindow()', () => {
		it('Should wipe window out', () => {
			tab._window = true;
			tab.resetWindow();
			assert.isNull(tab._window);
		})
	});
	describe('#initSession()', () => {
		it('Should send a message', () => {
			const token = 'some-token-test-token';
			const message = new VXPayInitSessionMessage(token);

			sinon.spy(tab, 'message');

			tab.initSession(token);

			assert.isTrue(tab.message.called);
			assert.equal(tab.message.getCall(0).args[0].toString(), message.toString());

			tab.message.restore();
		});
		it('Should send a message even with no token', () => {
			const message = new VXPayInitSessionMessage();

			sinon.spy(tab, 'message');

			tab.initSession();

			assert.isTrue(tab.message.called);
			assert.equal(tab.message.getCall(0).args[0].toString(), message.toString());

			tab.message.restore();
		})
	});
});