import VXPayPaymentHooksConfig  from './../../Config/VXPayPaymentHooksConfig';
import VXPayEventListener       from './../../Event/VXPayEventListener';
import VXPayIframe              from './../VXPayIframe';
import VXPayHookRouter          from './../../Message/Hooks/VXPayHookRouter';
import VXPayUpdateParamsMessage from '../../Message/VXPayUpdateParamsMessage';
import VXPayPaymentFrame        from './VXPayPaymentFrame';

/**
 * @link https://www.npmjs.com/package/es6-interface
 */
class VXPayPaymentTab {
	/**
	 * @param {Document} document
	 * @param {String} name
	 * @param {VXPayConfig} config
	 */
	constructor(document, name, config) {
		this._document       = document;
		this._hooks          = new VXPayPaymentHooksConfig();
		this._loaded         = false;
		this._name           = name;
		this._config         = config;
		this._route          = VXPayPaymentTab.DEFAULT_ROUTE;
		this._promise        = null;
		this._window         = null;

		// load the normal iframe to communicate
		this._invisibleFrame = new VXPayPaymentFrame(document, config.getPaymentFrameUrl(), VXPayPaymentFrame.NAME + '_hidden');
		this._invisibleFrame.triggerLoad();
	}

	/**
	 * @return {Document}
	 */
	get document() {
		return this._document;
	}

	/**
	 * @return {String}
	 */
	get name() {
		return this._name;
	}

	/**
	 * @return {VXPayConfig}
	 */
	get config() {
		return this._config;
	}

	/**
	 * @return {boolean}
	 */
	get loaded() {
		return this._loaded;
	}

	/**
	 * @return {string}
	 */
	get route() {
		return this._route;
	}

	/**
	 * Open the window
	 */
	triggerLoad() {
		this.getNewTab()
			.then(this.startListening.bind(this));
	}

	/**
	 * @return {Promise<Window>}
	 */
	getNewTab() {
		const that = this;
		const url  = this._config.getPaymentFrameUrl() + '#' + this._route;

		return new Promise(resolve => {
			that._window = that._document.defaultView.open(url, that._name);
			resolve(that._window);
		});
	}

	/**
	 * @return {VXPayPaymentHooksConfig}
	 */
	get hooks() {
		return this._invisibleFrame.hooks;
	}

	/**
	 * listen for incoming messages
	 * @param {Window} window
	 * @return {Window}
	 */
	startListening(window) {
		VXPayEventListener.addEvent(
			VXPayIframe.EVENT_MESSAGE,
			this._document.defaultView,
			(event) => VXPayHookRouter(this._hooks, event, this._name + '<VXPayPaymentTab>')
		);

		VXPayEventListener.addEvent(
			VXPayIframe.EVENT_UNLOAD,
			this._document.defaultView,
			this.stopListening.bind(this)
		);

		return window;
	}

	/**
	 * Remove listeners
	 */
	stopListening() {
		VXPayEventListener.removeEvent(
			VXPayIframe.EVENT_MESSAGE,
			this._document.defaultView,
			(event) => VXPayHookRouter(this._hooks, event, this._name + '<VXPayPaymentTab>')
		);

		VXPayEventListener.removeEvent(
			VXPayIframe.EVENT_UNLOAD,
			this._document.defaultView,
			this.stopListening.bind(this)
		);
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentTab}
	 */
	sendOptions(options = {}) {
		this._config.merge(options);
		this._invisibleFrame.sendOptions(options);
		return this;
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentTab}
	 */
	sendAdditionalOptions(options = {}) {
		this._config.merge(options);
		this._invisibleFrame.sendAdditionalOptions(options);
		return this;
	}

	/**
	 * @param {Object} params
	 * @returns {VXPayPaymentTab}
	 */
	sendUpdateParams(params) {
		this.postMessage(new VXPayUpdateParamsMessage(params));
		return this;
	}

	/**
	 * Override to add a before send hook
	 * @param {String|VXPayMessage} message
	 * @param {String} origin
	 * @return {VXPayPaymentTab}
	 */
	postMessage(message, origin = '*') {
		this._hooks.trigger(VXPayPaymentHooksConfig.ON_BEFORE_SEND, [message], this._name + '<VXPayPaymentTab>');

		if (this._window !== null && this._loaded) {
			this._window.postMessage(message.toString(), origin);
		} else {
			this._invisibleFrame.postMessage(message, origin);
		}

		return this;
	}

	/**
	 * [@param {String|undefined} token]
	 * @return {VXPayPaymentTab}
	 */
	initSession(token = undefined) {
		this._invisibleFrame.initSession(token);
		return this;
	}

	/**
	 * @param {String} route
	 * @return {VXPayPaymentTab}
	 */
	changeRoute(route = VXPayPaymentTab.DEFAULT_ROUTE) {
		this._route = route;
		this._invisibleFrame.changeRoute(route);
		return this;
	}

	/**
	 * [@param {VXPayViewReadyMessage} message]
	 */
	setVisible() {
		this.triggerLoad();
	}

	/**
	 * @return {VXPayPaymentTab}
	 */
	show() {
		this.triggerLoad();
		return this;
	}

	/**
	 * @return {VXPayPaymentTab}
	 */
	hide() {
		if (this._window && !this._window.closed) {
			this._window.close();
		}

		// reset internal state
		this._loaded  = false;
		this._route   = VXPayPaymentTab.DEFAULT_ROUTE;
		this._promise = null;

		return this;
	}
}

VXPayPaymentTab.NAME = 'vx-payment-tab-payment';

VXPayPaymentTab.DEFAULT_ROUTE = '/';

export default VXPayPaymentTab;
