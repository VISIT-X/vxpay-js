import VXPayValidator     from '../VXPayValidator'
import VXPayEventListener from './../Event/VXPayEventListener'
import VXPayDomHelper     from './VXPayDomHelper'

class VXPayIframe extends VXPayEventListener {
	/**
	 * @param {Document} document
	 * @param {String} url
	 * @param {String|Number} id
	 * @param {CSSStyleDeclaration} style
	 */
	constructor(document, url, id, style = null) {
		super();

		if (typeof document.createElement !== 'function') {
			throw new TypeError('An iFrame can only be build on a valid Document object!');
		}

		if (!VXPayValidator.isUrl(url, document.defaultView.URL)) {
			throw new TypeError('Please provide a valid URL! ' + url);
		}

		if (!id || id.length === 0) {
			throw new TypeError('Please provide a valid frame ID!');
		}

		this._loaded          = false;
		this._frame           = document.createElement(VXPayDomHelper.TAG_IFRAME);
		this._frame.src       = url;
		this._frame.id        = id;
		this._frame.onload    = this._markLoaded.bind(this);

		// only apply if valid
		if (null !== style) {
			for (let item in style) {
				this._frame.style.setProperty(item, style[item]);
			}
		}
	}

	/**
	 * @throws Error
	 */
	triggerLoad() {
		throw new Error('Method triggerLoad should be implemented in child class!');
	}

	/**
	 * @protected
	 */
	_markLoaded() {
		this._loaded = true;
	}

	/**
	 * @return {boolean}
	 */
	get loaded() {
		return this._loaded;
	}

	/**
	 * @return {HTMLIFrameElement|HTMLElement}
	 */
	get frame() {
		return this._frame;
	}

	/**
	 * @return {VXPayIframe}
	 */
	maximize() {
		this._frame.style.width      = VXPayIframe.MAX_WIDTH;
		this._frame.style.height     = VXPayIframe.MAX_HEIGHT;
		this._frame.style.left       = VXPayIframe.MAX_LEFT;
		this._frame.style.top        = VXPayIframe.MAX_TOP;
		this._frame.style.marginLeft = VXPayIframe.MAX_LEFT_MARGIN;
		return this;
	}

	/**
	 * @param {String|VXPayMessage} message
	 * @param {String} origin
	 * @return {VXPayIframe}
	 */
	postMessage(message = '', origin = VXPayIframe.ORIGIN_ALL) {
		this._frame.contentWindow.postMessage(message.toString(), origin);
		return this;
	}

	show() {
		this._frame.style.display = VXPayIframe.DISPLAY_BLOCK;
	}

	hide() {
		this._frame.style.display = VXPayIframe.DISPLAY_NONE;
	}

	/**
	 * @param {string} value
	 */
	set url(value) {
		this._frame.src = value;
	}

	/**
	 * @return {string}
	 */
	get url() {
		return this._frame.src;
	}
}

VXPayIframe.EVENT_MESSAGE = 'message';
VXPayIframe.EVENT_LOAD    = 'load';
VXPayIframe.EVENT_UNLOAD  = 'beforeunload';

VXPayIframe.POSITION_ABSOLUTE = 'absolute';
VXPayIframe.POSITION_FIXED    = 'fixed';

VXPayIframe.DISPLAY_BLOCK = 'block';
VXPayIframe.DISPLAY_NONE  = 'none';

VXPayIframe.MAX_HEIGHT      = '100vh';
VXPayIframe.MAX_WIDTH       = '100%';
VXPayIframe.MAX_TOP         = '0';
VXPayIframe.MAX_LEFT        = '0';
VXPayIframe.MAX_LEFT_MARGIN = '0';

VXPayIframe.ORIGIN_VX  = 'https://www.visit-x.net';
VXPayIframe.ORIGIN_ALL = '*';

export default VXPayIframe;
