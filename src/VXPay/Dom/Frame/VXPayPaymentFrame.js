import VXPayIframe              from './../VXPayIframe';
import VXPayInitSessionMessage  from './../../Message/VXPayInitSessionMessage';
import VXPayUpdateParamsMessage from './../../Message/VXPayUpdateParamsMessage';
import VXPayChangeRouteMessage  from './../../Message/VXPayChangeRouteMessage';
import VXPayUserAgent           from '../../VXPayUserAgent';
import VXPayDomHelper           from './../VXPayDomHelper';
import VXPayIsVisibleMessage    from './../../Message/VXPayIsVisibleMessage';
import VXPayAdditionalOptions   from '../../Message/VXPayAdditionalOptions';
import VXPayPaymentHooksConfig  from './../../Config/VXPayPaymentHooksConfig';

class VXPayPaymentFrame extends VXPayIframe {
	/**
	 * @param {Document} document
	 * @param {String} url
	 * @param {String} id
	 * @param {VXPayPaymentHooksConfig} hooks
	 * @param {CSSStyleDeclaration|Object} style
	 */
	constructor(document, url, id = VXPayPaymentFrame.NAME, hooks, style = {}) {
		// merge default with incoming
		style = Object.assign(
			{},
			VXPayPaymentFrame.getDefaultStyles(document),
			style
		);

		// call parent
		super(document, url, id, style);

		// allow transparent iframe for <= IE8
		this._frame.allowTransparency = true;
		this._frame.name              = 'vxpay';
		this._sessionInitialized      = false;
		this._hooks                   = hooks;
	}

	/**
	 * Insert in DOM
	 */
	triggerLoad() {
		if (this._loaded) {
			return;
		}

		this._frame
			.ownerDocument
			.getElementsByTagName('body')
			.item(0)
			.appendChild(this._frame);
	}

	removeFromDOM() {
		this._frame.remove();
	}

	/**
	 * @todo refactor this mess!
	 * @param {Document} document
	 * @return {Object}
	 */
	static getDefaultStyles(document = undefined) {
		const uaString      = typeof document !== 'undefined' ? document.defaultView.navigator.userAgent : '';
		const userAgent     = new VXPayUserAgent(uaString);
		const bodyElement   = typeof document !== 'undefined' ? document.getElementsByTagName('body').item(0) : null;
		const defaultStyles = {
			border:     'none',
			width:      '100%',
			height:     '100%',
			top:        '50%',
			left:       '50%',
			marginLeft: '-325px',  // margin does not seem to be applied :/
			zIndex:     10001,
			display:    'none',
			transform:  'translate(-50%, -50%)'
		};

		defaultStyles.position = userAgent.isMobile()
			? VXPayIframe.POSITION_ABSOLUTE
			: VXPayIframe.POSITION_FIXED;

		if (typeof document !== 'undefined'
			&& VXPayDomHelper.isStyleAttributeSuppored(bodyElement, 'maxHeight', '100vh')
		) {
			defaultStyles.maxHeight = '100vh';
		} else {
			if (userAgent.isMobile()) {
				defaultStyles.maxHeight = VXPayDomHelper.getClientHeight(document.defaultView) + 'px';
			}
		}

		return defaultStyles;
	}

	/**
	 * Override to add a hook
	 * @protected
	 */
	_markLoaded() {
		super._markLoaded();
		return this._hooks.trigger(VXPayPaymentHooksConfig.ON_LOAD, [], this._frame.id);
	}

	/**
	 * Override to add a before send hook
	 * @param {String|VXPayMessage} message
	 * @param {String} origin
	 * @return {VXPayPaymentFrame}
	 */
	message(message, origin = VXPayIframe.ORIGIN_ALL) {
		this._hooks.trigger(VXPayPaymentHooksConfig.ON_BEFORE_SEND, [message], this._frame.id);

		if (this._frame.contentWindow !== null) {
			this._frame.contentWindow.postMessage(message.toString(), origin);
		}

		return this;
	}

	/**
	 * @param {String|undefined} token
	 * @return {VXPayPaymentFrame}
	 */
	initSession(token = undefined) {
		if (this._sessionInitialized) {
			return this;
		}

		token = token || null;

		// init lazy loading session
		this.message(new VXPayInitSessionMessage(token));
		this._sessionInitialized = true;

		return this;
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentFrame}
	 */
	sendOptions(options = {}) {
		return this.message(new VXPayUpdateParamsMessage(options));
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentFrame}
	 */
	sendAdditionalOptions(options = {}) {
		return this.message(new VXPayAdditionalOptions(options));
	}

	/**
	 * @param {Object} params
	 * @returns {VXPayPaymentFrame}
	 */
	sendUpdateParams(params) {
		return this.message(new VXPayUpdateParamsMessage(params));
	}

	/**
	 * @param {String} route
	 * @return {VXPayPaymentFrame}
	 */
	changeRoute(route = '') {
		return this.message(new VXPayChangeRouteMessage(route));
	}

	/**
	 * [@param {VXPayViewReadyMessage} message]
	 * @return {VXPayPaymentFrame}
	 */
	setVisible() {
		return this.message(new VXPayIsVisibleMessage());
	}

	show() {
		super.show();
		this._hooks.trigger(VXPayPaymentHooksConfig.ON_SHOW, [], this._frame.id);

	}

}

VXPayPaymentFrame.NAME = 'vx-payment-frame';

export default VXPayPaymentFrame;
