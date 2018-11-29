import VXPayUpdateParamsMessage from '../../Message/VXPayUpdateParamsMessage';
import VXPayPaymentFrame        from './VXPayPaymentFrame';
import VXPayPaymentHooksConfig  from './../../Config/VXPayPaymentHooksConfig';
import VXPayAdditionalOptions   from '../../Message/VXPayAdditionalOptions';
import VXPayInitSessionMessage  from '../../Message/VXPayInitSessionMessage';
import VXPayChangeRouteMessage  from '../../Message/VXPayChangeRouteMessage';
import VXPayDeferred            from '../../VXPayDeferred';
import VXPayIframe              from '../VXPayIframe';

/**
 * @link https://www.npmjs.com/package/es6-interface
 */
class VXPayPaymentTab {
	/**
	 * @param {Document} document
	 * @param {String} name
	 * @param {VXPayConfig} config
	 * @param {VXPayPaymentHooksConfig} hooks
	 */
	constructor(document, name, config, hooks) {
		this._document = document;
		this._loaded   = false;
		this._name     = name;
		this._config   = config;
		this._hooks    = hooks;
		this._route    = VXPayPaymentTab.DEFAULT_ROUTE;
		this._window   = null;
		this._deferred = VXPayDeferred();

		// load the normal iFrame to communicate
		this._invisibleFrame = new VXPayPaymentFrame(document, config.getPaymentFrameUrl(), VXPayPaymentFrame.NAME + '_hidden', hooks);
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
		this.getNewTab(true);
		return this._deferred.promise;
	}

	getNewTab(doLoad = false) {
		if (doLoad) {
			const url    = this._config.getPaymentFrameUrl() + '#' + this._route;
			this._window = this._document.defaultView.open(url, this._name);
			this._deferred.resolve();
		}
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentTab}
	 */
	sendOptions(options = {}) {
		this._config.merge(options);
		this.message(new VXPayUpdateParamsMessage(options));
		return this;
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentTab}
	 */
	sendAdditionalOptions(options = {}) {
		this._config.merge(options);
		this.message(new VXPayAdditionalOptions(options));
		return this;
	}

	/**
	 * @param {Object} params
	 * @returns {VXPayPaymentTab}
	 */
	sendUpdateParams(params) {
		this.message(new VXPayUpdateParamsMessage(params));
		return this;
	}

	/**
	 * Override to add a before send hook
	 * @param {String|VXPayMessage} message
	 * @param {String} origin
	 * @return {VXPayPaymentTab}
	 */
	message(message, origin = VXPayIframe.ORIGIN_ALL) {
		if (!message.isAction) {
			this._deferred.promise.then(() => {
				this._hooks.trigger(VXPayPaymentHooksConfig.ON_BEFORE_SEND, [message], this._name);
				this._window.postMessage(message.toString(), origin);
			});
		} else {
			this._invisibleFrame.message(message, origin);
		}

		return this;
	}

	/**
	 * [@param {String|undefined} token]
	 * @return {VXPayPaymentTab}
	 */
	initSession(token = undefined) {
		this.message(new VXPayInitSessionMessage(token));
		return this;
	}

	/**
	 * @param {String} route
	 * @return {VXPayPaymentTab}
	 */
	changeRoute(route = VXPayPaymentTab.DEFAULT_ROUTE) {
		this._route = route;
		return this.message(new VXPayChangeRouteMessage(route));
	}

	/**
	 * [@param {VXPayViewReadyMessage} message]
	 */
	setVisible() {}

	/**
	 * @return {VXPayPaymentTab}
	 */
	show() {
		return this;
	}

	/**
	 * @return {VXPayPaymentTab}
	 */
	hide() {
		if (this._window && !this._window.closed) {
			this._window.close();
			this.resetWindow();
		}

		// reset internal state
		this._loaded   = false;
		this._route    = VXPayPaymentTab.DEFAULT_ROUTE;
		this._deferred = VXPayDeferred();

		return this;
	}

	resetWindow() {
		this._window = null;
	}
}

VXPayPaymentTab.NAME = 'vx-payment-tab';

VXPayPaymentTab.DEFAULT_ROUTE = '/';

export default VXPayPaymentTab;
