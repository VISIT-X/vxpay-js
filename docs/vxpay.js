(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VX", [], factory);
	else if(typeof exports === 'object')
		exports["VX"] = factory();
	else
		root["VX"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = isMobile;
module.exports.isMobile = isMobile;

function isMobile (ua) {
  if (!ua && typeof navigator != 'undefined') ua = navigator.userAgent;
  if (ua && ua.headers && typeof ua.headers['user-agent'] == 'string') {
    ua = ua.headers['user-agent'];
  }
  if (typeof ua != 'string') return false;

  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0,4));
}



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/VXPay/VXPayEnvironment.js
class VXPayEnvironment {
	/**
	 * @return {String[]}
	 */
	static getAvailable() {
		return [
			VXPayEnvironment.LANDING_PAGE,
			VXPayEnvironment.CULT_BABES,
			VXPayEnvironment.TV_CHAT,
			VXPayEnvironment.SLP,
			VXPayEnvironment.VXONE_LP,
			VXPayEnvironment.VXONE,
		]
	}

	/**
	 * @return {string}
	 */
	static getDefault() {
		return VXPayEnvironment.VXONE;
	}
}

VXPayEnvironment.LANDING_PAGE = 'lp';
VXPayEnvironment.CULT_BABES   = 'cultbabes';
VXPayEnvironment.TV_CHAT      = 'tvchat';
VXPayEnvironment.SLP          = 'slp';
VXPayEnvironment.VXONE_LP     = 'vxonelp';
VXPayEnvironment.VXONE        = 'vxone';

/* harmony default export */ var VXPay_VXPayEnvironment = (VXPayEnvironment);

// CONCATENATED MODULE: ./src/VXPay/VXPayLanguage.js
class VXPayLanguage {

	/**
	 * @return {string}
	 */
	static getDefault() {
		return VXPayLanguage.DE;
	}

	/**
	 * @return {String[]}
	 */
	static getAvailable() {
		return [
			VXPayLanguage.DE,
			VXPayLanguage.EN,
			VXPayLanguage.NL,
		];
	}
}

VXPayLanguage.DE = 'DE';
VXPayLanguage.EN = 'EN';
VXPayLanguage.NL = 'NL';

/* harmony default export */ var VXPay_VXPayLanguage = (VXPayLanguage);

// CONCATENATED MODULE: ./src/VXPay/Config/VXPayFlow.js
class VXPayFlow {
	/**
	 * @return {String[]}
	 */
	static getAllowed() {
		return [
			VXPayFlow.AVS,
			VXPayFlow.LIMIT,
			VXPayFlow.LOGIN,
			VXPayFlow.MONEY_CHARGE,
			VXPayFlow.OP_COMPENSATION,
			VXPayFlow.PASSWORD_RESET,
			VXPayFlow.PASSWORD_LOST,
			VXPayFlow.PROMOCODE,
			VXPayFlow.SCRATCH_CARD,
			VXPayFlow.TRIAL_VIP_ABO,
			VXPayFlow.VIP_ABO,
			VXPayFlow.VXTV_ABO,
			VXPayFlow.SETTINGS,
			VXPayFlow.CHANGE_CARD,
			VXPayFlow.CHANGE_LS,
			VXPayFlow.ONE_CLICK,
			VXPayFlow.AUTO_RECHARGE,
		];
	}

	/**
	 * @return {string}
	 */
	static getDefault() {
		return VXPayFlow.MONEY_CHARGE;
	}
}

VXPayFlow.AVS             = 'avs';
VXPayFlow.LIMIT           = 'limit';
VXPayFlow.LOGIN           = 'login';
VXPayFlow.MONEY_CHARGE    = 'moneycharge';
VXPayFlow.OP_COMPENSATION = 'opcompensation';
VXPayFlow.AUTO_RECHARGE   = 'autorecharge';
VXPayFlow.PASSWORD_RESET  = 'pwdreset';
VXPayFlow.PASSWORD_LOST   = 'pwdlost';
VXPayFlow.PROMOCODE       = 'promocode';
VXPayFlow.SCRATCH_CARD    = 'scratchcard';
VXPayFlow.TRIAL_VIP_ABO   = 'trialvipabo';
VXPayFlow.VIP_ABO         = 'vipabo';
VXPayFlow.VXTV_ABO        = 'vxtvabo';
VXPayFlow.SETTINGS        = 'vxsettings';
VXPayFlow.CHANGE_CARD     = 'changecc';
VXPayFlow.CHANGE_LS       = 'changels';
VXPayFlow.ONE_CLICK       = 'oneclick';

/* harmony default export */ var Config_VXPayFlow = (VXPayFlow);
// CONCATENATED MODULE: ./src/VXPay/Config/VXPayModalConfig.js


class VXPayModalConfig_VXPayModalConfig {

	constructor() {
		this._login         = VXPayModalConfig_VXPayModalConfig.YES;
		this._showHeader    = VXPayModalConfig_VXPayModalConfig.YES;
		this._showTeaser    = VXPayModalConfig_VXPayModalConfig.YES;
		this._showFooter    = VXPayModalConfig_VXPayModalConfig.YES;
		this._support       = VXPayModalConfig_VXPayModalConfig.YES;
		this._showOAuth     = VXPayModalConfig_VXPayModalConfig.YES;
		this._showNL        = VXPayModalConfig_VXPayModalConfig.YES;
		this._neutralHeader = VXPayModalConfig_VXPayModalConfig.NO;
		this._teaserBonus   = VXPayModalConfig_VXPayModalConfig.NO;
		this._showThank     = VXPayModalConfig_VXPayModalConfig.NO;
		this._showLogo      = VXPayModalConfig_VXPayModalConfig.NO;
		this._showTeaserBar = VXPayModalConfig_VXPayModalConfig.NO;
		this._parentInFrame = VXPayModalConfig_VXPayModalConfig.NO;
	}

	/**
	 * @param value
	 * @private
	 */
	static _throwOnInvalid(value) {
		if (!VXPayValidator_VXPayValidator.isModalConfigValueAllowed(value)) {
			throw new TypeError('Value not allowed. Try one of: VXPayModalConfig.YES, VXPayModalConfig.NO');
		}
	}

	/**
	 * @return {0|1}
	 */
	get parentInFrame() {
		return this._parentInFrame;
	}

	/**
	 * @param {0|1} value
	 */
	set parentInFrame(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._parentInFrame = value;
	}

	/**
	 * @return {0|1}
	 */
	get login() {
		return this._login;
	}

	/**
	 * @param {0|1} value
	 */
	set login(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._login = value;
	}

	/**
	 * @return {0|1}
	 */
	get showHeader() {
		return this._showHeader;
	}

	/**
	 * @param {0|1} value
	 */
	set showHeader(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._showHeader = value;
	}

	/**
	 * @return {0|1}
	 */
	get showTeaser() {
		return this._showTeaser;
	}

	/**
	 * @param {0|1} value
	 */
	set showTeaser(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._showTeaser = value;
	}

	/**
	 * @return {0|1}
	 */
	get showFooter() {
		return this._showFooter;
	}

	/**
	 * @param {0|1} value
	 */
	set showFooter(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._showFooter = value;
	}

	/**
	 * @return {0|1}
	 */
	get neutralHeader() {
		return this._neutralHeader;
	}

	/**
	 * @param {0|1} value
	 */
	set neutralHeader(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._neutralHeader = value;
	}

	/**
	 * @return {0|1}
	 */
	get teaserBonus() {
		return this._teaserBonus;
	}

	/**
	 * @param {0|1} value
	 */
	set teaserBonus(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._teaserBonus = value;
	}

	/**
	 * @return {0|1}
	 */
	get support() {
		return this._support;
	}

	/**
	 * @param {0|1} value
	 */
	set support(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._support = value;
	}

	/**
	 * @return {0|1}
	 */
	get showOAuth() {
		return this._showOAuth;
	}

	/**
	 * @param {0|1} value
	 */
	set showOAuth(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._showOAuth = value;
	}

	/**
	 * @return {0|1}
	 */
	get showNL() {
		return this._showNL;
	}

	/**
	 * @param {0|1} value
	 */
	set showNL(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._showNL = value;
	}

	/**
	 * @return {0|1}
	 */
	get showThank() {
		return this._showThank;
	}

	/**
	 * @param {0|1} value
	 */
	set showThank(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._showThank = value;
	}

	/**
	 * @return {0|1}
	 */
	get showLogo() {
		return this._showLogo;
	}

	/**
	 * @param {0|1} value
	 */
	set showLogo(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._showLogo = value;
	}

	/**
	 * @return {0|1}
	 */
	get showTeaserBar() {
		return this._showTeaserBar;
	}

	/**
	 * @param {0|1} value
	 */
	set showTeaserBar(value) {
		VXPayModalConfig_VXPayModalConfig._throwOnInvalid(value);
		this._showTeaserBar = value;
	}

	/**
	 * @return {Number[]}
	 */
	static getAllowed() {
		return [
			VXPayModalConfig_VXPayModalConfig.YES,
			VXPayModalConfig_VXPayModalConfig.NO
		];
	}

	/**
	 * @return {Object}
	 */
	getOptions() {
		return {
			login: this.login,
			showHeader: this.showHeader,
			showTeaser: this.showTeaser,
			showFooter: this.showFooter,
			neutralHeader: this.neutralHeader,
			teaserBonus: this.teaserBonus,
			support: this.support,
			showOAuth: this.showOAuth,
			showNL: this.showNL,
			showThank: this.showThank,
			showLogo: this.showLogo,
			showTeaserBar: this.showTeaserBar,
			parentInFrame: this.parentInFrame,
		};
	}
}

VXPayModalConfig_VXPayModalConfig.YES = 1;
VXPayModalConfig_VXPayModalConfig.NO  = 0;

/* harmony default export */ var Config_VXPayModalConfig = (VXPayModalConfig_VXPayModalConfig);

// CONCATENATED MODULE: ./src/VXPay/VXPayUrlHelper.js
class VXPayUrlHelper {
	/**
	 * @param {Function} urlImplementation
	 */
	constructor(urlImplementation = undefined) {
		this._urlImpl = typeof urlImplementation === 'undefined' ? window.URL : urlImplementation;
	}

	/**
	 * @param {String} baseUrl
	 * @param {Object} params
	 * @param {Object} config
	 * @return {string}
	 */
	generate(baseUrl, params = undefined, config = undefined) {
		let url = new this._urlImpl(baseUrl);

		// fix url, remove existing hashes
		url.hash = '';

		// add params
		if (params) {
			for (let d in params) {
				if (typeof params[d] === 'undefined') {
					continue;
				}

				url.searchParams.append(d, params[d]);
			}
		}

		// add module config
		if (config) {
			for (let d2 in config) {
				// skip underline in object props
				let name = d2.charAt(1) === '_' ? d2.substr(1) : d2;

				if (typeof config[name] === 'undefined') {
					continue;
				}

				url.searchParams.append('mc[' + d2 + ']', config[d2]);
			}
		}

		return url.toString();
	}

	/**
	 * @param {String} location
	 * @param {String} name
	 * @return {String}
	 */
	getQueryParam(location, name) {
		try {
			const url = new this._urlImpl(location);
			return url.searchParams[name];
		} catch (err) {
			return '';
		}
	}

	/**
	 * @param {String} url
	 * @return {boolean}
	 */
	isValid(url) {
		try {
			new this._urlImpl(url);
			return true;
		} catch (_) {
			return false;
		}
	}
}
// CONCATENATED MODULE: ./src/VXPay/VXPayValidator.js






class VXPayValidator_VXPayValidator {
	/**
	 * @param {String} url
	 * @param {URL} urlImplementation
	 * @return {boolean}
	 */
	static isUrl(url, urlImplementation = undefined) {
		const helper = new VXPayUrlHelper(urlImplementation);
		return helper.isValid(url);
	}

	/**
	 * @param {String} language
	 * @return {boolean}
	 */
	static isLanguageSupported(language) {
		return VXPay_VXPayLanguage.getAvailable().indexOf(language) !== -1;
	}

	/**
	 * @param {String} env
	 * @return {boolean}
	 */
	static isEnvironmentSupported(env) {
		return VXPay_VXPayEnvironment.getAvailable().indexOf(env) !== -1;
	}

	/**
	 * @param {String} flow
	 * @return {boolean}
	 */
	static isFlowAllowed(flow) {
		return Config_VXPayFlow.getAllowed().indexOf(flow) !== -1;
	}

	/**
	 * @param {Number} value
	 * @return {boolean}
	 */
	static isModalConfigValueAllowed(value) {
		return Config_VXPayModalConfig.getAllowed().indexOf(value) !== -1;
	}
}

// CONCATENATED MODULE: ./src/VXPay/Event/VXPayEventListener.js
class VXPayEventListener {
	/**
	 * @param {String} event
	 * @param {HTMLElement|Window} elem
	 * @param {Function} func
	 */
	static addEvent(event, elem, func) {
		if (elem.addEventListener) {  // W3C DOM
			elem.addEventListener(event, func, false);
		}
		else if (elem.attachEvent) { // IE DOM
			elem.attachEvent(VXPayEventListener.IE_PREFIX + event, func);
		}
		else { // No much to do
			elem[event] = func;
		}
	}

	/**
	 * @param {String} event
	 * @param {HTMLElement|Window} elem
	 * @param {Function} func
	 */
	static removeEvent(event, elem, func) {
		if (elem.removeEventListener) {  // W3C DOM
			elem.removeEventListener(event, func, false);
		}
		else if (elem.detachEvent) { // IE DOM
			elem.detachEvent(VXPayEventListener.IE_PREFIX + event, func);
		}
		else { // No much to do
			elem[event] = null;
		}
	}
}

VXPayEventListener.IE_PREFIX = 'on';

/* harmony default export */ var Event_VXPayEventListener = (VXPayEventListener);
// CONCATENATED MODULE: ./src/VXPay/Dom/VXPayDomHelper.js
class VXPayDomHelper {

	/**
	 * @see VXPayDomHelperFactory::getHelper
	 * @param {Window} window
	 * @param {jQuery} jQuery
	 * @param {Fx} Fx
	 */
	constructor(window, jQuery, Fx) {
		this._window = window;
		this._jQuery = jQuery;
		this._fx     = Fx; // Mootools FX
	}

	/**
	 * @return {Window}
	 */
	get window() {
		return this._window;
	}

	/**
	 * @return {jQuery}
	 */
	get jQuery() {
		return this._jQuery;
	}

	/**
	 * @return {Fx}
	 */
	get fx() {
		return this._fx;
	}

	/**
	 * @param {Window} window
	 * @return {number}
	 */
	static getClientHeight(window) {
		return window.innerHeight ||
			window.document.documentElement.clientHeight ||
			window.document.body.clientHeight;
	}

	/**
	 * @param {HTMLElement} element
	 * @param {String} attribute
	 * @param {String|Number} value
	 * @return {boolean}
	 */
	static isStyleAttributeSuppored(element, attribute, value) {
		let supported = false;

		try {
			element.style[attribute] = value;
			supported                = element.style[attribute] === value;
		} catch (e) { /* suppress */ }

		return supported;
	}

	/**
	 * @return {boolean}
	 * @private
	 */
	_hasJQuery() {
		return typeof this._jQuery !== 'undefined'
			&& typeof this._jQuery.Animation !== 'undefined';
	}

	/**
	 * @return {boolean}
	 * @private
	 */
	_hasMooTools() {
		return typeof this._fx !== 'undefined'
			&& typeof this._fx.Scroll !== 'undefined';
	}

	/**
	 * @param {Number} top
	 * @link https://www.similartech.com/compare/jquery-vs-mootools
	 * @return {*}
	 */
	scrollTo(top) {
		try {
			if (this._hasJQuery()) {
				const opts = VXPayDomHelper.OPTIONS_JQUERY;
				opts.scrollTop = top;

				return this._jQuery('html, body')
					.animate(opts, VXPayDomHelper.ANIMATION_DURATION);
			}

			if (this._hasMooTools()) {
				return new this._fx
					.Scroll(this._window, VXPayDomHelper.OPTIONS_MTOOLS).start(0, top);
			}

			// default no animation
			return this._window.scrollTo(0, top);

		} catch (e) { /* suppress */ }
	}
}

VXPayDomHelper.TAG_IFRAME = 'iframe';

VXPayDomHelper.OPTIONS_JQUERY = {scrollTop: 0};
VXPayDomHelper.OPTIONS_MTOOLS = {duration: VXPayDomHelper.ANIMATION_DURATION};

VXPayDomHelper.ANIMATION_DURATION = 500;

/* harmony default export */ var Dom_VXPayDomHelper = (VXPayDomHelper);

// CONCATENATED MODULE: ./src/VXPay/Dom/VXPayIframe.js




class VXPayIframe_VXPayIframe extends Event_VXPayEventListener {
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

		if (!VXPayValidator_VXPayValidator.isUrl(url, document.defaultView.URL)) {
			throw new TypeError('Please provide a valid URL! ' + url);
		}

		if (!id || id.length === 0) {
			throw new TypeError('Please provide a valid frame ID!');
		}

		this._loaded          = false;
		this._frame           = document.createElement(Dom_VXPayDomHelper.TAG_IFRAME);
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
		this._frame.style.width      = VXPayIframe_VXPayIframe.MAX_WIDTH;
		this._frame.style.height     = VXPayIframe_VXPayIframe.MAX_HEIGHT;
		this._frame.style.left       = VXPayIframe_VXPayIframe.MAX_LEFT;
		this._frame.style.top        = VXPayIframe_VXPayIframe.MAX_TOP;
		this._frame.style.marginLeft = VXPayIframe_VXPayIframe.MAX_LEFT_MARGIN;
		return this;
	}

	/**
	 * @param {String|VXPayMessage} message
	 * @param {String} origin
	 * @return {VXPayIframe}
	 */
	postMessage(message = '', origin = VXPayIframe_VXPayIframe.ORIGIN_ALL) {
		this._frame.contentWindow.postMessage(message.toString(), origin);
		return this;
	}

	/**
	 * @param {Function} handler
	 */
	setMessageHandler(handler) {
		Event_VXPayEventListener.addEvent(VXPayIframe_VXPayIframe.EVENT_MESSAGE, this._frame.contentWindow, handler);
	}

	/**
	 * @param {Function} handler
	 */
	removeMessageHandler(handler) {
		Event_VXPayEventListener.removeEvent(VXPayIframe_VXPayIframe.EVENT_MESSAGE, this._frame.contentWindow, handler);
	}

	show() {
		this._frame.style.display = VXPayIframe_VXPayIframe.DISPLAY_BLOCK;
	}

	hide() {
		this._frame.style.display = VXPayIframe_VXPayIframe.DISPLAY_NONE;
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

VXPayIframe_VXPayIframe.EVENT_MESSAGE = 'message';
VXPayIframe_VXPayIframe.EVENT_LOAD    = 'load';
VXPayIframe_VXPayIframe.EVENT_UNLOAD  = 'beforeunload';

VXPayIframe_VXPayIframe.POSITION_ABSOLUTE = 'absolute';
VXPayIframe_VXPayIframe.POSITION_FIXED    = 'fixed';

VXPayIframe_VXPayIframe.DISPLAY_BLOCK = 'block';
VXPayIframe_VXPayIframe.DISPLAY_NONE  = 'none';

VXPayIframe_VXPayIframe.MAX_HEIGHT      = '100vh';
VXPayIframe_VXPayIframe.MAX_WIDTH       = '100%';
VXPayIframe_VXPayIframe.MAX_TOP         = '0';
VXPayIframe_VXPayIframe.MAX_LEFT        = '0';
VXPayIframe_VXPayIframe.MAX_LEFT_MARGIN = '0';

VXPayIframe_VXPayIframe.ORIGIN_VX  = 'https://www.visit-x.net';
VXPayIframe_VXPayIframe.ORIGIN_ALL = '*';

/* harmony default export */ var Dom_VXPayIframe = (VXPayIframe_VXPayIframe);

// EXTERNAL MODULE: ./node_modules/is-mobile/index.js
var is_mobile = __webpack_require__(0);
var is_mobile_default = /*#__PURE__*/__webpack_require__.n(is_mobile);

// CONCATENATED MODULE: ./src/VXPay/VXPayUserAgentHelper.js


class VXPayUserAgentHelper_VXPayUserAgentHelper {
	/**
	 * @param {String} uaString
	 */
	constructor(uaString = '') {
		this._userAgent = uaString;
	}

	/**
	 * @return {boolean}
	 */
	isMobile() {
		return is_mobile_default()(this._userAgent);
	}

	/**
	 * @return {string}
	 */
	get userAgent() {
		return this._userAgent;
	}

	/**
	 * @param {string} value
	 */
	set userAgent(value) {
		this._userAgent = value;
	}
}

// CONCATENATED MODULE: ./src/VXPay/VXPayConfig.js









class VXPayConfig_VXPayConfig {
	/**
	 * @param {Window} window
	 * @param {VXPayModalConfig} modalConfig
	 */
	constructor(window, modalConfig = undefined) {
		this._env      = VXPay_VXPayEnvironment.getDefault();
		this._logging  = false;
		this._flow     = Config_VXPayFlow.getDefault();
		this._language = VXPay_VXPayLanguage.getDefault();
		this._urls     = {
			abg:     VXPayConfig_VXPayConfig.ABG_DEFAULT.replace('{language}', this._language),
			privacy: VXPayConfig_VXPayConfig.PRIVACY_DEFAULT.replace('{language}', this._language),
			ruri:    '',
			suri:    '',
			purl:    ''
		};

		this._pfm        = '';
		this._enableTab  = (new VXPayUserAgentHelper_VXPayUserAgentHelper(window.navigator.userAgent || '')).isMobile();
		this._host       = '';
		this._token      = '';
		this._promoCode  = '';
		this._wmId       = '';
		this._wmSubRef   = '';
		this._wmToken    = '';
		this._adtv       = '';
		this._subRef     = '';
		this._apiVersion = 3;

		this._modalConfig = typeof modalConfig === 'undefined'
			? new Config_VXPayModalConfig()
			: modalConfig;

		this._window = window;
		this._helper = new VXPayUrlHelper(window.URL);
	}

	/**
	 * @return {string}
	 */
	get ruri() {
		return this._urls.ruri;
	}

	/**
	 * @return {string}
	 */
	get suri() {
		return this._urls.suri;
	}

	/**
	 * @return {string}
	 */
	get purl() {
		return this._urls.purl;
	}

	/**
	 * @return {Window|*}
	 */
	get window() {
		return this._window;
	}

	/**
	 * @example https://www.visit-x.net/VXPAY-V3/?pfm=1502&lang=en&environment=vxone&flow=login&sview=&lazy=1&mc[login]=1&mc[showHeader]=1&mc[showTeaser]=1&mc[showFooter]=1&mc[neutralHeader]=1&mc[teaserBonus]=0&mc[support]=1&mc[showOAuth]=1&mc[showNL]=1&mc[showThank]=0&mc[showLogo]=1&mc[showTeaserBar]=1&mc[parentInFrame]=0
	 * @return {string}
	 */
	getPaymentFrameUrl() {
		return this._helper.generate(
			Dom_VXPayIframe.ORIGIN_VX + '/VXPAY-V' + this._apiVersion + '/',
			this.getOptions(),
			this._modalConfig.getOptions()
		);
	}

	/**
	 * @return {Object}
	 */
	getOptions() {
		return {
			agbUrl:      this.abgUrl,
			privacyUrl:  this.privacyUrl,
			environment: this._env,
			flow:        this._flow,
			lang:        this._language,
			pfm:         this._pfm,
			w:           this._wmId,
			ws:          this._wmSubRef,
			wt:          this._wmToken,
			adtv:        this._adtv,
			sub:         this._subRef,
			enableTab:   this._enableTab ? 1 : 0,
			option:      '',
			pc:          this._promoCode,
			tt:          this._token,
			ruri:        this._urls.ruri,
			host:        this._host
		};
	}

	/**
	 * @return {Object}
	 */
	getAdditionalOptions() {
		const urls = {
			ref:   this._wmId,
			ruri:  this._urls.ruri,
			surl:  this._urls.suri,
			aurl:  this.abgUrl,
			prurl: this.privacyUrl,
			purl:  this._urls.purl
		};

		return Object.assign(
			{},
			urls,
			this.modalConfig.getOptions()
		);
	}

	/**
	 * @return {String}
	 */
	get abgUrl() {
		return this._urls.abg;
	}

	/**
	 * @param {String} url
	 */
	set abgUrl(url) {
		if (!VXPayValidator_VXPayValidator.isUrl(url)) {
			throw new Error('Invalid URL provided: ' + url);
		}

		this._urls.abg = url;
	}

	/**
	 * @return {String}
	 */
	get privacyUrl() {
		return this._urls.privacy;
	}

	/**
	 * @param {String} url
	 */
	set privacyUrl(url) {
		if (!VXPayValidator_VXPayValidator.isUrl(url)) {
			throw new Error('Invalid URL provided: ' + url);
		}

		this._urls.privacy = url;
	}

	/**
	 * @return {String}
	 */
	get env() {
		return this._env;
	}

	/**
	 * @param {String} value
	 */
	set env(value) {
		if (!VXPayValidator_VXPayValidator.isEnvironmentSupported(value)) {
			throw new TypeError('Environment ' + value + ' is not supported. Please select one of ' + VXPay_VXPayEnvironment.getAvailable())
		}

		this._env = value;
	}

	/**
	 * @return {Boolean}
	 */
	get logging() {
		return this._logging;
	}

	/**
	 * @param {Boolean} value
	 */
	set logging(value) {
		this._logging = value;
	}

	/**
	 * @return {String}
	 */
	get language() {
		return this._language.toUpperCase();
	}

	/**
	 * @param {String} value
	 */
	set language(value) {
		if (!VXPayValidator_VXPayValidator.isLanguageSupported(value)) {
			const msg = 'Unsupported language: ' + value.toString() + '. Allowed: ' + VXPay_VXPayLanguage.getAvailable().join(', ');
			throw new TypeError(msg);
		}

		this._language = value;
	}

	/**
	 * @return {String}
	 */
	get flow() {
		return this._flow;
	}

	/**
	 * @param {String} value
	 * @see VXPayFlow
	 */
	set flow(value) {
		if (!VXPayValidator_VXPayValidator.isFlowAllowed(value)) {
			const msg = 'Flow not allowed: ' + value.toString()
				+ '. Select one of: ' + Config_VXPayFlow.getAllowed().join(', ');
			throw new TypeError(msg);
		}

		this._flow = value;
	}

	/**
	 * @return {String|int}
	 */
	get host() {
		return this._host;
	}

	/**
	 * @param {String|int} value
	 */
	set host(value) {
		this._host = value;
	}

	/**
	 * @return {String}
	 */
	get token() {
		return this._token;
	}

	/**
	 * @param {String} value
	 */
	set token(value) {
		this._token = value;
	}

	/**
	 * @param {VXPayTransferTokenMessage} message
	 */
	setTokenFromMessage(message) {
		this._token = message.token;
	}

	/**
	 * @return {String}
	 */
	get promoCode() {
		return this._promoCode;
	}

	/**
	 * @param {String} value
	 */
	set promoCode(value) {
		this._promoCode = value;
	}

	/**
	 * @return {String|int}
	 */
	get wmId() {
		return this._wmId;
	}

	/**
	 * @param {String|int} value
	 */
	set wmId(value) {
		this._wmId = value;
	}

	/**
	 * @return {String|int}
	 */
	get wmSubRef() {
		return this._wmSubRef;
	}

	/**
	 * @param {String|int} value
	 */
	set wmSubRef(value) {
		this._wmSubRef = value;
	}

	/**
	 * @return {String}
	 */
	get wmToken() {
		return this._wmToken;
	}

	/**
	 * @param {String} value
	 */
	set wmToken(value) {
		this._wmToken = value;
	}

	/**
	 * @return {*}
	 */
	get adtv() {
		return this._adtv;
	}

	/**
	 * @param value
	 */
	set adtv(value) {
		this._adtv = value;
	}

	/**
	 * @return {*}
	 */
	get subRef() {
		return this._subRef;
	}

	/**
	 * @param value
	 */
	set subRef(value) {
		this._subRef = value;
	}

	/**
	 * @return {number}
	 */
	get apiVersion() {
		return this._apiVersion;
	}

	/**
	 * @param {number} value
	 */
	set apiVersion(value) {
		this._apiVersion = parseInt(value, 10);
	}

	/**
	 * @return {VXPayModalConfig}
	 */
	get modalConfig() {
		return this._modalConfig;
	}

	/**
	 * @param {VXPayModalConfig} value
	 */
	set modalConfig(value) {
		if (!(value instanceof Config_VXPayModalConfig)) {
			throw new TypeError('Modal config value should be instance of VXPayModalConfig!');
		}

		this._modalConfig = value;
	}

	/**
	 * @return {string}
	 */
	get pfm() {
		return this._pfm;
	}

	/**
	 * @param {string} value
	 */
	set pfm(value) {
		this._pfm = value;
	}

	/**
	 * @return {boolean}
	 */
	get enableTab() {
		return this._enableTab;
	}

	/**
	 * @param {boolean} value
	 */
	set enableTab(value) {
		this._enableTab = value;
	}

	/**
	 * @param {Object} options
	 */
	merge(options = {}) {
		const that = this;

		Object
			.keys(that.getOptions())
			.forEach(key => {
				const valid = options.hasOwnProperty(key) && typeof options[key] !== 'undefined';

				// map
				if (key === 'lang' && options.hasOwnProperty('language')) {
					that[key] = options['language'];
				}
				// normal flow
				else if (valid) {
					that[key] = options[key];
				}
			});
	}

	/**
	 * @param {VXPayFlowChangedHookMessage} message
	 */
	updateFlow(message) {
		this._flow = message.newFlow;
	}
}

VXPayConfig_VXPayConfig.ABG_DEFAULT     = 'https://www.visit-x.net/CAMS/{language}/Info/Zentrum.html?submod=AGB&track=Account';
VXPayConfig_VXPayConfig.PRIVACY_DEFAULT = 'https://www.visit-x.net/CAMS/{language}/Info/Zentrum.html?submod=Datenschutz&track=Index';

/* harmony default export */ var VXPay_VXPayConfig = (VXPayConfig_VXPayConfig);

// CONCATENATED MODULE: ./src/VXPay/VXPayLogger.js
class VXPayLogger {
	/**
	 * @param {Boolean} enable
	 * @param {Window} window
	 */
	constructor(enable, window = undefined) {
		this.enabled = enable || false;
		this._container = [];
		this._window = window;
	}

	/**
	 * Accepts any number of params
	 */
	log() {
		// check enabled
		if (!this.enabled) {
			return;
		}

		// for browser
		if (typeof this._window !== 'undefined') {
			return this._window.console.log.apply(this, arguments);
		}

		// for tests - just collect
		this._container.push({
			time: new Date(),
			message: JSON.stringify(arguments)
		});
	}

	/**
	 * @return {Array<String>}
	 */
	get container() {
		return this._container;
	}
}

VXPayLogger.LOG_INCOMING = '<-- []';
VXPayLogger.LOG_OUTGOING = '--> []';

/* harmony default export */ var VXPay_VXPayLogger = (VXPayLogger);

// CONCATENATED MODULE: ./src/VXPay/VXPayMessage.js
class VXPayMessage {

	/**
	 * @param {String} type
	 */
	constructor(type = '') {
		this.type = type;
	}

	/**
	 * @return {string}
	 */
	toString() {
		return JSON.stringify(this);
	}

	/**
	 * @return {String[]}
	 */
	static getValidTypes() {
		return [
			VXPayMessage.TYPE_INIT_SESSION,
			VXPayMessage.TYPE_UPDATE_PARAMS,
			VXPayMessage.TYPE_IS_VISIBLE,
			VXPayMessage.TYPE_ADDITIONAL_INFO,
			VXPayMessage.TYPE_CHANGE_ROUTE,
			VXPayMessage.TYPE_HOOK,
			VXPayMessage.TYPE_SCROLL_TO,
			VXPayMessage.TYPE_SUCCESS,
			VXPayMessage.TYPE_IFRAME_CLOSE,
			VXPayMessage.TYPE_IFRAME_READY,
			VXPayMessage.TYPE_VIEW_READY,
			VXPayMessage.TYPE_TRANSFER_TOKEN,
			VXPayMessage.TYPE_CONTENT_LOADED,
			// actions
			VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS,
			VXPayMessage.TYPE_ACTION_LOGOUT,
			VXPayMessage.TYPE_ACTION_GET_AVS_STATUS,
			VXPayMessage.TYPE_ACTION_GET_BALANCE,
			VXPayMessage.TYPE_ACTION_IS_LOGGED_IN,
			// action response messages
			VXPayMessage.TYPE_HAS_LOGIN_COOKIE,
			VXPayMessage.TYPE_BALANCE,
			VXPayMessage.TYPE_AVS_STATUS,
			VXPayMessage.TYPE_IS_LOGGED_IN,
		];
	}
}

VXPayMessage.TYPE_HOOK                   = 'modalbox-hook';
VXPayMessage.TYPE_SCROLL_TO              = 'modalbox-scrollto';
VXPayMessage.TYPE_SUCCESS                = 'modalbox-success';
VXPayMessage.TYPE_IFRAME_CLOSE           = 'modalbox-iframe-close';
VXPayMessage.TYPE_IFRAME_READY           = 'modalbox-iframe-ready';
VXPayMessage.TYPE_VIEW_READY             = 'modalbox-view-ready';
VXPayMessage.TYPE_TRANSFER_TOKEN         = 'modalbox-transfer-token';
VXPayMessage.TYPE_CONTENT_LOADED         = 'modalbox-content-loaded';
VXPayMessage.TYPE_INIT_SESSION           = 'modalbox-init-session';
VXPayMessage.TYPE_UPDATE_PARAMS          = 'modalbox-update-params';
VXPayMessage.TYPE_IS_VISIBLE             = 'modalbox-is-visible';
VXPayMessage.TYPE_ADDITIONAL_INFO        = 'modalbox-additional-info';
VXPayMessage.TYPE_CHANGE_ROUTE           = 'modalbox-change-route';

VXPayMessage.TYPE_HAS_LOGIN_COOKIE       = 'modalbox-response-hasLoginCookie';
VXPayMessage.TYPE_IS_LOGGED_IN           = 'modalbox-response-isLoggedIn';
VXPayMessage.TYPE_AVS_STATUS             = 'modalbox-response-getavsstatus';
VXPayMessage.TYPE_BALANCE                = 'modalbox-response-getbalance';
VXPayMessage.TYPE_ACTIVE_ABOS            = 'modalbox-response-getactiveabos';
VXPayMessage.TYPE_LOGGED_OUT             = 'modalbox-response-logout';

VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS = 'modalbox-action-getactiveabos';
VXPayMessage.TYPE_ACTION_LOGOUT          = 'modalbox-action-logout';
VXPayMessage.TYPE_ACTION_GET_AVS_STATUS  = 'modalbox-action-getavsstatus';
VXPayMessage.TYPE_ACTION_IS_LOGGED_IN    = 'modalbox-action-isLoggedIn';
VXPayMessage.TYPE_ACTION_GET_BALANCE     = 'modalbox-action-getbalance';

VXPayMessage.TRANSFER_TOKEN_PREFIX = 'transfer_token:';

/* harmony default export */ var VXPay_VXPayMessage = (VXPayMessage);

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayHasSessionCookieMessage.js


class VXPayHasSessionCookieMessage_VXPayHasSessionCookieMessage extends VXPay_VXPayMessage {
	/**
	 * @param {Boolean} hasCookie
	 */
	constructor(hasCookie = false) {
		super(VXPay_VXPayMessage.TYPE_HAS_LOGIN_COOKIE);
		this.hasCookie = hasCookie;
	}
}

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayContentLoadedMessage.js


class VXPayContentLoadedMessage_VXPayContentLoadedMessage extends VXPay_VXPayMessage {
	constructor() {
		super(VXPay_VXPayMessage.TYPE_CONTENT_LOADED);
	}
}

// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookMessage.js


class VXPayHookMessage_VXPayHookMessage extends VXPay_VXPayMessage {

	/**
	 * @param {string} hook
	 */
	constructor(hook = VXPayHookMessage_VXPayHookMessage.HOOK_UNKNOWN) {
		super(VXPay_VXPayMessage.TYPE_HOOK);
		this.hook = hook;
	}
}

VXPayHookMessage_VXPayHookMessage.HOOK_UNKNOWN      = 'dummy-unknown';
VXPayHookMessage_VXPayHookMessage.HOOK_FLOW_CHANGED = 'flowChanged';
VXPayHookMessage_VXPayHookMessage.HOOK_LOGIN        = 'login';

/* harmony default export */ var Hooks_VXPayHookMessage = (VXPayHookMessage_VXPayHookMessage);

// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayFlowChangedMessage.js


class VXPayFlowChangedMessage_VXPayFlowChangedHookMessage extends Hooks_VXPayHookMessage {
	/**
	 * @param {string} oldFlow
	 * @param {string} newFlow
	 */
	constructor(oldFlow = '', newFlow = '') {
		super(Hooks_VXPayHookMessage.HOOK_FLOW_CHANGED);
		this.oldFlow  = oldFlow;
		this.newFlow = newFlow;
	}
}

// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayLoggedInMessage.js


class VXPayLoggedInMessage_VXPayLoggedInMessage extends Hooks_VXPayHookMessage {
	constructor() {
		super(Hooks_VXPayHookMessage.HOOK_LOGIN);
	}
}

// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookMessageFactory.js




class VXPayHookMessageFactory_VXPayHookMessageFactory {

	/**
	 * @param data
	 * @return {VXPayHookMessage}
	 */
	static fromData(data = {}) {
		if (typeof data === 'undefined' || !data.hasOwnProperty('hook')) {
			throw new TypeError('Invalid message format - no hook field');
		}

		switch (data.hook) {
			case Hooks_VXPayHookMessage.HOOK_FLOW_CHANGED:
				return new VXPayFlowChangedMessage_VXPayFlowChangedHookMessage(data.prevFlow, data.flow);

			case Hooks_VXPayHookMessage.HOOK_LOGIN:
				return new VXPayLoggedInMessage_VXPayLoggedInMessage();

			default:
				return new Hooks_VXPayHookMessage();
		}
	}
}

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayIframeReadyMessage.js


class VXPayIframeReadyMessage_VXPayIframeReadyMessage extends VXPay_VXPayMessage {
	constructor() {
		super(VXPay_VXPayMessage.TYPE_IFRAME_READY);
	}
}

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayViewReadyMessage.js


class VXPayViewReadyMessage_VXPayViewReadyMessage extends VXPay_VXPayMessage {
	constructor() {
		super(VXPay_VXPayMessage.TYPE_VIEW_READY);
	}
}

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayTransferTokenMessage.js


class VXPayTransferTokenMessage_VXPayTransferTokenMessage extends VXPay_VXPayMessage {
	/**
	 * @param {String} token
	 */
	constructor(token) {
		super(VXPay_VXPayMessage.TYPE_TRANSFER_TOKEN);
		this.token = token;
	}
}

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayIframeCloseMessage.js


class VXPayIframeCloseMessage_VXPayIframeCloseMessage extends VXPay_VXPayMessage {
	/**
	 * @param {Object} data
	 */
	constructor(data = {}) {
		super(VXPay_VXPayMessage.TYPE_IFRAME_CLOSE);
		this.data = data;
	}
}

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayIsVisibleMessage.js


class VXPayIsVisibleMessage_VXPayIsVisibleMessage extends VXPay_VXPayMessage {
	/** {@inheritDoc} */
	constructor() {
		super(VXPay_VXPayMessage.TYPE_IS_VISIBLE);
	}
}

// CONCATENATED MODULE: ./src/VXPay/Config/VXPayUser.js
class VXPayUser {
	constructor() {
		this._balance = NaN;
		this._fsk18 = false;
		this._nickname = '';
		this._userId = NaN;
	}

	/**
	 * @return {Number|NaN}
	 */
	get balance() {
		return this._balance;
	}

	/**
	 * @param {Number} value
	 */
	set balance(value) {
		this._balance = value;
	}

	/**
	 * @return {Boolean}
	 */
	get fsk18() {
		return this._fsk18;
	}

	/**
	 * @param {Boolean} value
	 */
	set fsk18(value) {
		this._fsk18 = value;
	}

	/**
	 * @return {String}
	 */
	get nickname() {
		return this._nickname;
	}

	/**
	 * @param {String} value
	 */
	set nickname(value) {
		this._nickname = value;
	}

	/**
	 * @return {Number|NaN}
	 */
	get userId() {
		return this._userId;
	}

	/**
	 * @param {Number} value
	 */
	set userId(value) {
		this._userId = value;
	}
}

/* harmony default export */ var Config_VXPayUser = (VXPayUser);

// CONCATENATED MODULE: ./src/VXPay/Message/VXPaySuccessMessage.js



class VXPaySuccessMessage_VXPaySuccessMessage extends VXPay_VXPayMessage {
	/**
	 * @param {Object} data
	 */
	constructor(data = VXPaySuccessMessage_VXPaySuccessMessage.USER_DATA_STRUCT) {
		super(VXPay_VXPayMessage.TYPE_SUCCESS);
		this.user = new Config_VXPayUser();

		// populate user model
		this.user.balance = data.availableMoney || 0;
		this.user.nickname = data.screenname || '';
		this.user.fsk18 = data.fsk18 || false;
		this.user.userId = data.userId || NaN;
	}
}

/**
 * Sample response data
 * @type {Object}
 */
VXPaySuccessMessage_VXPaySuccessMessage.USER_DATA_STRUCT = {
	"success":        true,
	"userFromLogin":  false,
	"userFromSignup": false,
	"flow":           "login",
	"hostId":         null,
	"screenname":     "user123",
	"userId":         9876789087,
	"isLoggedIn":     true,
	"transferToken":  "TT_7a9523c9-5555-4c48-5555-91cc2465f484",
	"availableMoney": 12.34,
	"fsk18":          false,
	"uhash":          null
};

/* harmony default export */ var Message_VXPaySuccessMessage = (VXPaySuccessMessage_VXPaySuccessMessage);

// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayIsLoggedInResponseMessage.js


class VXPayIsLoggedInResponseMessage_VXPayIsLoggedInResponseMessage extends VXPay_VXPayMessage {
	/**
	 * @param {Boolean} loggedIn
	 */
	constructor(loggedIn = false) {
		super(VXPay_VXPayMessage.TYPE_IS_LOGGED_IN);
		this.loggedIn = loggedIn;
	}
}

/* harmony default export */ var Actions_VXPayIsLoggedInResponseMessage = (VXPayIsLoggedInResponseMessage_VXPayIsLoggedInResponseMessage);

// CONCATENATED MODULE: ./src/VXPay/Model/VXPayAVSStatus.js
class VXPayAVSStatus {
	constructor() {
		this._fsk18 = false;
	}

	/**
	 * @return {Boolean}
	 */
	get fsk18() {
		return this._fsk18;
	}

	/**
	 * @param {Boolean} value
	 */
	set fsk18(value) {
		this._fsk18 = value;
	}

	/**
	 * @param {Object} data
	 * @return {VXPayAVSStatus}
	 */
	static fromData(data = {}) {
		const instance = new VXPayAVSStatus();
		instance.fsk18 = data.fsk18 || false;
		return instance;
	}
}

// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayAVSStatusMessage.js



class VXPayAVSStatusMessage_VXPayAVSStatusMessage extends VXPay_VXPayMessage {
	/**
	 * @param {VXPayAVSStatus} status
	 */
	constructor(status = new VXPayAVSStatus) {
		super(VXPay_VXPayMessage.TYPE_AVS_STATUS);
		this.status = status;
	}
}

// CONCATENATED MODULE: ./src/VXPay/Config/VXPayCurrency.js
class VXPayCurrency {
	/**
	 * @return {string}
	 */
	static getDefault() {
		return VXPayCurrency.EUR;
	}

	/**
	 * @return {String[]}
	 */
	static getAllowed() {
		return [
			VXPayCurrency.EUR,
			VXPayCurrency.USD,
			VXPayCurrency.CHF,
		];
	}
}

VXPayCurrency.EUR = 'EUR';
VXPayCurrency.USD = 'USD';
VXPayCurrency.CHF = 'CHF';

/* harmony default export */ var Config_VXPayCurrency = (VXPayCurrency);

// CONCATENATED MODULE: ./src/VXPay/Model/VXPayBalance.js


class VXPayBalance_VXPayBalance {
	/**
	 * @param {Number} amount
	 * @param {String} currency
	 */
	constructor(amount = 0, currency = Config_VXPayCurrency.EUR) {
		this._amount = amount;
		this._currency = currency;
	}

	/**
	 * @return {number}
	 */
	get amount() {
		return this._amount;
	}

	/**
	 * @return {string}
	 */
	get currency() {
		return this._currency;
	}

	/**
	 * @return {string}
	 */
	toString() {
		return this._amount.toFixed(2) + ' ' + this._currency;
	}
}

/* harmony default export */ var Model_VXPayBalance = (VXPayBalance_VXPayBalance);

// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayBalanceMessage.js




class VXPayBalanceMessage_VXPayBalanceMessage extends VXPay_VXPayMessage {
	constructor() {
		super(VXPay_VXPayMessage.TYPE_BALANCE);
		this.balance = new Model_VXPayBalance();
	}

	/**
	 * @param {Object} data
	 * @return {VXPayBalanceMessage}
	 */
	static fromData(data = VXPayBalanceMessage_VXPayBalanceMessage.SAMPLE_DATA) {
		const instance   = new VXPayBalanceMessage_VXPayBalanceMessage;
		instance.balance = new Model_VXPayBalance(data.balance, data.currency);
		return instance;
	}
}

VXPayBalanceMessage_VXPayBalanceMessage.SAMPLE_DATA = {
	balance:  0,
	currency: Config_VXPayCurrency.EUR
};

/* harmony default export */ var Actions_VXPayBalanceMessage = (VXPayBalanceMessage_VXPayBalanceMessage);

// CONCATENATED MODULE: ./src/VXPay/Model/VXPayAbo.js
class VXPayAbo {
	constructor() {
		this._amount = 0;
		this._endDate = 0;
		this._isActive = false;
		this._isFreeAbo = false;
		this._isPaidAbo = true;
		this._isTrialAbo = true;
		this._name = '';
	}

	/**
	 * @return {Number}
	 */
	get amount() {
		return this._amount;
	}

	/**
	 * @param {Number} value
	 */
	set amount(value) {
		this._amount = value;
	}

	/**
	 * @return {Number}
	 */
	get endDate() {
		return this._endDate;
	}

	/**
	 * @param {Number} value
	 */
	set endDate(value) {
		this._endDate = value;
	}

	/**
	 * @return {Boolean}
	 */
	get isActive() {
		return this._isActive;
	}

	/**
	 * @param {Boolean} value
	 */
	set isActive(value) {
		this._isActive = value;
	}

	/**
	 * @return {Boolean}
	 */
	get isFreeAbo() {
		return this._isFreeAbo;
	}

	/**
	 * @param {Boolean} value
	 */
	set isFreeAbo(value) {
		this._isFreeAbo = value;
		this._isPaidAbo = !value;
	}

	/**
	 * @return {Boolean}
	 */
	get isPaidAbo() {
		return this._isPaidAbo;
	}

	/**
	 * @param {Boolean} value
	 */
	set isPaidAbo(value) {
		this._isPaidAbo = value;
		this._isFreeAbo = !value;
	}

	/**
	 * @return {Boolean}
	 */
	get isTrialAbo() {
		return this._isTrialAbo;
	}

	/**
	 * @param {Boolean} value
	 */
	set isTrialAbo(value) {
		this._isTrialAbo = value;
	}

	/**
	 * @return {String}
	 */
	get name() {
		return this._name;
	}

	/**
	 * @param {String} value
	 */
	set name(value) {
		this._name = value;
	}
}

/* harmony default export */ var Model_VXPayAbo = (VXPayAbo);

// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayActiveAbosMessage.js



class VXPayActiveAbosMessage_VXPayActiveAbosMessage extends VXPay_VXPayMessage {
	constructor() {
		super(VXPay_VXPayMessage.TYPE_ACTIVE_ABOS);
		this.abos = [];
	}

	/**
	 * @param {VXPayAbo} abo
	 */
	add(abo) {
		this.abos.push(abo);
	}

	/**
	 * @param {Object} data
	 * @return {VXPayActiveAbosMessage}
	 */
	static fromData(data = VXPayActiveAbosMessage_VXPayActiveAbosMessage.SAMPLE_DATA) {
		const instance = new VXPayActiveAbosMessage_VXPayActiveAbosMessage;

		// instantiate models
		Object.keys(data).forEach(key => {
			const model      = new Model_VXPayAbo();
			model.amount     = data[key].amount;
			model.endDate    = data[key].endDate;
			model.isActive   = data[key].isActive;
			model.isFreeAbo  = data[key].isFreeAbo;
			model.isPaidAbo  = data[key].isPaidAbo;
			model.isTrialAbo = data[key].isTrialAbo;
			model.name       = data[key].name;

			// append
			instance.add(model);
		});

		return instance;
	}
}

VXPayActiveAbosMessage_VXPayActiveAbosMessage.SAMPLE_DATA = {
	name: {
		amount:     0,
		endDate:    {},
		isActive:   true,
		isFreeAbo:  false,
		isPaidAbo:  true,
		isTrialAbo: true,
		name:       'Abo'
	}
};

/* harmony default export */ var Actions_VXPayActiveAbosMessage = (VXPayActiveAbosMessage_VXPayActiveAbosMessage);

// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayLoggedOutMessage.js


class VXPayLoggedOutMessage_VXPayLoggedOutMessage extends VXPay_VXPayMessage {
	constructor() {
		super(VXPay_VXPayMessage.TYPE_LOGGED_OUT);
		// this.loggedIn = false; - do we need it?
	}
}

/* harmony default export */ var Actions_VXPayLoggedOutMessage = (VXPayLoggedOutMessage_VXPayLoggedOutMessage);

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayMessageFactory.js

















class VXPayMessageFactory_VXPayMessageFactory {

	/**
	 * @param {string} json
	 * @return {VXPayMessage}
	 * @throws {TypeError|SyntaxError}
	 */
	static fromJson(json = '{}') {
		const message = JSON.parse(json);

		if (!message.hasOwnProperty('type')) {
			throw new TypeError('Invalid message format - no type field');
		}

		switch (message.type) {
			case VXPay_VXPayMessage.TYPE_HAS_LOGIN_COOKIE:
				return new VXPayHasSessionCookieMessage_VXPayHasSessionCookieMessage(!!message.data);

			case VXPay_VXPayMessage.TYPE_AVS_STATUS:
				return new VXPayAVSStatusMessage_VXPayAVSStatusMessage(VXPayAVSStatus.fromData(message.data));

			case VXPay_VXPayMessage.TYPE_BALANCE:
				return Actions_VXPayBalanceMessage.fromData(message.data);

			case VXPay_VXPayMessage.TYPE_LOGGED_OUT:
				return new Actions_VXPayLoggedOutMessage;

			case VXPay_VXPayMessage.TYPE_ACTIVE_ABOS:
				return Actions_VXPayActiveAbosMessage.fromData(message.data);

			case VXPay_VXPayMessage.TYPE_CONTENT_LOADED:
				return new VXPayContentLoadedMessage_VXPayContentLoadedMessage();

			case VXPay_VXPayMessage.TYPE_IFRAME_READY:
				return new VXPayIframeReadyMessage_VXPayIframeReadyMessage();

			case VXPay_VXPayMessage.TYPE_HOOK:
				return VXPayHookMessageFactory_VXPayHookMessageFactory.fromData(message.data);

			case VXPay_VXPayMessage.TYPE_VIEW_READY:
				return new VXPayViewReadyMessage_VXPayViewReadyMessage();

			case VXPay_VXPayMessage.TYPE_IFRAME_CLOSE:
				return new VXPayIframeCloseMessage_VXPayIframeCloseMessage(message.data);

			case VXPay_VXPayMessage.TYPE_IS_VISIBLE:
				return new VXPayIsVisibleMessage_VXPayIsVisibleMessage();

			case VXPay_VXPayMessage.TYPE_SUCCESS:
				return new Message_VXPaySuccessMessage(message.data);

			case VXPay_VXPayMessage.TYPE_IS_LOGGED_IN:
				return new Actions_VXPayIsLoggedInResponseMessage(message.data);
		}

		// default
		// transfer token?
		if (message.type.indexOf(VXPay_VXPayMessage.TRANSFER_TOKEN_PREFIX) === 0) {
			const token = message.type.substr(VXPay_VXPayMessage.TRANSFER_TOKEN_PREFIX.length);
			return new VXPayTransferTokenMessage_VXPayTransferTokenMessage(token);
		}

		// return an unknown message, but still a message
		const unknown = new VXPay_VXPayMessage(message.type);
		unknown.raw   = json;

		return unknown;
	}
}

// CONCATENATED MODULE: ./src/VXPay/Config/VXPayHooksConfig.js
class VXPayHooksConfig {
	constructor() {
		this._onAny           = [];
		this._onBeforeSend    = [];
		this._onLoad          = [];
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayHooksConfig}
	 */
	onLoad(handler) {
		this._onLoad.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayHooksConfig}
	 */
	onAny(handler) {
		this._onAny.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayHooksConfig}
	 */
	onBeforeSend(handler) {
		this._onBeforeSend.push(handler);
		return this;
	}

	/**
	 * @param {String} hook
	 * @param {Array} callbackArguments
	 * @return {boolean}
	 */
	trigger(hook, callbackArguments = []) {
		const name = '_' + hook;

		if (!this.hasOwnProperty(name)) {
			throw new Error('Hook ' + hook + ' not available!');
		}

		// early exit
		if (this[name].length === 0) {
			return true;
		}

		// process all callbacks
		this[name].map(callback => {
			callback.apply(callback, callbackArguments);
		});

		return true;
	}
}

VXPayHooksConfig.ON_LOAD        = 'onLoad';
VXPayHooksConfig.ON_ANY         = 'onAny';
VXPayHooksConfig.ON_BEFORE_SEND = 'onBeforeSend';

/* harmony default export */ var Config_VXPayHooksConfig = (VXPayHooksConfig);

// CONCATENATED MODULE: ./src/VXPay/Config/VXPayHelperHooksConfig.js


class VXPayHelperHooksConfig_VXPayHelperHooksConfig extends Config_VXPayHooksConfig {
}

/* harmony default export */ var Config_VXPayHelperHooksConfig = (VXPayHelperHooksConfig_VXPayHelperHooksConfig);

// CONCATENATED MODULE: ./src/VXPay/Dom/Frame/VXPayHelperFrame.js







class VXPayHelperFrame_VXPayHelperFrame extends Dom_VXPayIframe {
	/**
	 * @param {Document} document
	 * @param {String} url
	 * @param {String} id
	 * @param {CSSStyleDeclaration} style
	 */
	constructor(document, url, id = VXPayHelperFrame_VXPayHelperFrame.NAME, style = VXPayHelperFrame_VXPayHelperFrame.STYLE_DEFAULT) {
		// init the frame
		super(document, url, id, style);
		this._cookieMsg = null;
		this._frame.name = 'vxpay-helper';
		this._hooks = new Config_VXPayHelperHooksConfig();
	}

	/**
	 * @param {Function} resolve
	 * @param {Function} reject
	 * @param {MessageEvent} event
	 * @return {boolean}
	 * @private
	 */
	_cookieMessageHandler(resolve, reject, event) {
		// origin check
		if (event.origin && Dom_VXPayIframe.ORIGIN_VX.indexOf(event.origin) === -1) {
			reject('Event origin does not match: ' + event.origin);
		}

		try {
			this._cookieMsg = VXPayMessageFactory_VXPayMessageFactory.fromJson(event.data);
		} catch (e) {
			this._cookieMsg = new VXPayHasSessionCookieMessage_VXPayHasSessionCookieMessage();
		}

		// trigger hook
		this._hooks.trigger(Config_VXPayHooksConfig.ON_ANY, [this._cookieMsg]);

		// otherwise - not logged in
		resolve(this._cookieMsg);
	}

	/**
	 * @return {Promise<VXPayHasSessionCookieMessage>}
	 */
	getLoginCookie() {
		return new Promise((resolve, reject) => {
			if (null !== this._cookieMsg) {
				resolve(this._cookieMsg);
			}

			Event_VXPayEventListener.addEvent(
				Dom_VXPayIframe.EVENT_MESSAGE,
				this._frame.ownerDocument.defaultView,
				this._cookieMessageHandler.bind(this, resolve, reject)
			)
		})
	}

	_markLoaded() {
		super._markLoaded();
		this._hooks.trigger(Config_VXPayHelperHooksConfig.ON_LOAD);
	}

	/**
	 * Override to add a before send hook
	 * @param {String|VXPayMessage} message
	 * @param {String} origin
	 */
	postMessage(message, origin = '*') {
		this._hooks.trigger(Config_VXPayHelperHooksConfig.ON_BEFORE_SEND, [message]);
		super.postMessage(message, origin);
	}

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

	/**
	 * @return {VXPayHelperHooksConfig}
	 */
	get hooks() {
		return this._hooks;
	}
}

VXPayHelperFrame_VXPayHelperFrame.STYLE_DEFAULT = {display: 'none'};

VXPayHelperFrame_VXPayHelperFrame.NAME = 'vx-helper-frame-payment';

/* harmony default export */ var Frame_VXPayHelperFrame = (VXPayHelperFrame_VXPayHelperFrame);

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayInitSessionMessage.js


class VXPayInitSessionMessage_VXPayInitSessionMessage extends VXPay_VXPayMessage {
	/**
	 * @param {String} token
	 */
	constructor(token = null) {
		super(VXPay_VXPayMessage.TYPE_INIT_SESSION);
		this.token = token;
	}
}

/* harmony default export */ var Message_VXPayInitSessionMessage = (VXPayInitSessionMessage_VXPayInitSessionMessage);

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayUpdateParamsMessage.js


class VXPayUpdateParamsMessage_VXPayUpdateParamsMessage extends VXPay_VXPayMessage {
	/**
	 * @param {Object} options
	 */
	constructor(options = {}) {
		super(VXPay_VXPayMessage.TYPE_UPDATE_PARAMS);
		this.options = options;
	}
}

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayChangeRouteMessage.js


class VXPayChangeRouteMessage_VXPayChangeRouteMessage extends VXPay_VXPayMessage {
	/**
	 * @param {String} route
	 */
	constructor(route = '') {
		super(VXPay_VXPayMessage.TYPE_CHANGE_ROUTE);

		// change route message can be empty
		if (route.length > 0) {
			this.route = route;
		}
	}
}

// CONCATENATED MODULE: ./src/VXPay/Config/VXPayPaymentHooksConfig.js


class VXPayPaymentHooksConfig_VXPayPaymentHooksConfig extends Config_VXPayHooksConfig {
	constructor() {
		super();
		this._onViewReady     = [];
		this._onContentLoaded = [];
		this._onClose         = [];
		this._onSuccess       = [];
		this._onIframeReady   = [];
		this._onLogin         = [];
		this._onLogout        = [];
		this._onFlowChange    = [];
		this._onIsLoggedIn    = [];
		this._onTransferToken = [];
		this._onAVSStatus     = [];
		this._onBalance       = [];
		this._onActiveAbos    = [];
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onLogout(handler) {
		this._onLogout.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnLogout(handler) {
		return this._onLogout.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onActiveAbos(handler) {
		this._onActiveAbos.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnActiveAbos(handler) {
		return this._onActiveAbos.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onBalance(handler) {
		this._onBalance.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnBalance(handler) {
		return this._onBalance.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 */
	onAVSStatus(handler) {
		this._onAVSStatus.push(handler);
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnAVSStatus(handler) {
		return this._onAVSStatus.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onIsLoggedIn(handler) {
		this._onIsLoggedIn.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnIsLoggedIn(handler) {
		return this._onIsLoggedIn.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onTransferToken(handler) {
		this._onTransferToken.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnTransferToken(handler) {
		return this._onTransferToken.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onFlowChange(handler) {
		this._onFlowChange.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onLogin(handler) {
		this._onLogin.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onIframeReady(handler) {
		this._onIframeReady.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onClose(handler) {
		this._onClose.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onSuccess(handler) {
		this._onSuccess.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onViewReady(handler) {
		this._onViewReady.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onContentLoaded(handler) {
		this._onContentLoaded.push(handler);
		return this;
	}
}

VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_VIEW_READY     = 'onViewReady';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_IFRAME_READY   = 'onIframeReady';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_CONTENT_LOADED = 'onContentLoaded';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_CLOSE          = 'onClose';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_SUCCESS        = 'onSuccess';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_LOGIN          = 'onLogin';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_LOGOUT         = 'onLogout';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_FLOW_CHANGE    = 'onFlowChange';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_IS_LOGGED_IN   = 'onIsLoggedIn';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN = 'onTransferToken';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_AVS_STATUS     = 'onAVSStatus';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_BALANCE        = 'onBalance';
VXPayPaymentHooksConfig_VXPayPaymentHooksConfig.ON_ACTIVE_ABOS    = 'onActiveAbos';

/* harmony default export */ var Config_VXPayPaymentHooksConfig = (VXPayPaymentHooksConfig_VXPayPaymentHooksConfig);

// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookRouter.js






/**
 * @param {VXPayPaymentHooksConfig} hooks
 * @param {MessageEvent|Object} event
 * @return {boolean}
 * @throws {TypeError}
 * @constructor
 */
const VXPayHookRouter = (hooks, event) => {
	// origin check
	if (event.origin && Dom_VXPayIframe.ORIGIN_VX.indexOf(event.origin) === -1) {
		return false;
	}

	// parse message
	const message = VXPayMessageFactory_VXPayMessageFactory.fromJson(event.data);

	// route any
	hooks.trigger(Config_VXPayPaymentHooksConfig.ON_ANY, [message]);

	switch (message.type) {
		case VXPay_VXPayMessage.TYPE_TRANSFER_TOKEN:
			return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN, [message]);

		case VXPay_VXPayMessage.TYPE_AVS_STATUS:
			return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_AVS_STATUS, [message]);

		case VXPay_VXPayMessage.TYPE_BALANCE:
			return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_BALANCE, [message]);

		case VXPay_VXPayMessage.TYPE_ACTIVE_ABOS:
			return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_ACTIVE_ABOS, [message]);

		case VXPay_VXPayMessage.TYPE_IFRAME_READY:
			return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_IFRAME_READY, [message]);

		case VXPay_VXPayMessage.TYPE_CONTENT_LOADED:
			return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_CONTENT_LOADED, [message]);

		case VXPay_VXPayMessage.TYPE_VIEW_READY:
			return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_VIEW_READY, [message]);

		case VXPay_VXPayMessage.TYPE_IFRAME_CLOSE:
			return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_CLOSE, [message]);

		case VXPay_VXPayMessage.TYPE_SUCCESS:
			return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_SUCCESS, [message]);

		case VXPay_VXPayMessage.TYPE_IS_LOGGED_IN:
			return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_IS_LOGGED_IN, [message]);

		case VXPay_VXPayMessage.TYPE_LOGGED_OUT:
			return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_LOGOUT, [message]);

		case VXPay_VXPayMessage.TYPE_HOOK:
			switch (message.hook) {
				case Hooks_VXPayHookMessage.HOOK_LOGIN:
					return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_LOGIN, [message]);

				case Hooks_VXPayHookMessage.HOOK_FLOW_CHANGED:
					return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_FLOW_CHANGE, [message]);
			}
	}
};

/* harmony default export */ var Hooks_VXPayHookRouter = (VXPayHookRouter);

// CONCATENATED MODULE: ./src/VXPay/Message/VXPayAdditionalOptionsMessage.js


class VXPayAdditionalOptionsMessage_VXPayAdditionalOptionsMessage extends VXPay_VXPayMessage {
	/**
	 * @param {Object} options
	 */
	constructor(options = {}) {
		super(VXPay_VXPayMessage.TYPE_ADDITIONAL_INFO);
		this.options = options;
	}
}

/* harmony default export */ var Message_VXPayAdditionalOptionsMessage = (VXPayAdditionalOptionsMessage_VXPayAdditionalOptionsMessage);

// CONCATENATED MODULE: ./src/VXPay/Dom/Frame/VXPayPaymentFrame.js












class VXPayPaymentFrame_VXPayPaymentFrame extends Dom_VXPayIframe {
	/**
	 * Override styles
	 */
	constructor(document, url, id = VXPayPaymentFrame_VXPayPaymentFrame.NAME, style = {}) {
		// merge default with incoming
		style = Object.assign(
			{},
			VXPayPaymentFrame_VXPayPaymentFrame.getDefaultStyles(document),
			style
		);

		// call parent
		super(document, url, id, style);

		// allow transparent iframe for <= IE8
		this._frame.allowTransparency = true;
		this._frame.name              = 'vxpay';

		// hooks config
		this._hooks              = new Config_VXPayPaymentHooksConfig();
		this._sessionInitialized = false;

		// listen for incoming post messages
		this.startListening();
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

	/**
	 * @todo refactor this mess!
	 * @param {Document} document
	 * @return {Object}
	 */
	static getDefaultStyles(document = undefined) {
		const uaString    = typeof document !== 'undefined' ? document.defaultView.navigator.userAgent : '',
			userAgent     = new VXPayUserAgentHelper_VXPayUserAgentHelper(uaString),
			bodyElement   = typeof document !== 'undefined' ? document.getElementsByTagName('body').item(0) : null,
			defaultStyles = {
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
			? Dom_VXPayIframe.POSITION_ABSOLUTE
			: Dom_VXPayIframe.POSITION_FIXED;

		if (typeof document !== 'undefined'
			&& Dom_VXPayDomHelper.isStyleAttributeSuppored(bodyElement, 'maxHeight', '100vh')
		) {
			defaultStyles.maxHeight = '100vh';
		} else {
			if (userAgent.isMobile()) {
				defaultStyles.maxHeight = Dom_VXPayDomHelper.getClientHeight(document.defaultView) + 'px';
			}
		}

		return defaultStyles;
	}

	/**
	 * listen for incoming messages
	 */
	startListening() {
		Event_VXPayEventListener.addEvent(
			Dom_VXPayIframe.EVENT_MESSAGE,
			this._frame.ownerDocument.defaultView,
			(event) => Hooks_VXPayHookRouter(this._hooks, event)
		);

		Event_VXPayEventListener.addEvent(
			Dom_VXPayIframe.EVENT_UNLOAD,
			this._frame.ownerDocument.defaultView,
			this.stopListening.bind(this)
		);
	}

	/**
	 * Remove listeners
	 */
	stopListening() {
		Event_VXPayEventListener.removeEvent(
			Dom_VXPayIframe.EVENT_MESSAGE,
			this._frame.ownerDocument.defaultView,
			(event) => Hooks_VXPayHookRouter(this._hooks, event)
		);

		Event_VXPayEventListener.removeEvent(
			Dom_VXPayIframe.EVENT_UNLOAD,
			this._frame.ownerDocument.defaultView,
			this.stopListening.bind(this)
		);
	}

	/**
	 * Override to add a hook
	 * @protected
	 */
	_markLoaded() {
		super._markLoaded();
		return this._hooks.trigger(Config_VXPayPaymentHooksConfig.ON_LOAD);
	}

	/**
	 * Override to add a before send hook
	 * @param {String|VXPayMessage} message
	 * @param {String} origin
	 * @return {VXPayPaymentFrame}
	 */
	postMessage(message, origin = '*') {
		this._hooks.trigger(Config_VXPayPaymentHooksConfig.ON_BEFORE_SEND, [message]);

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
		this.postMessage(new Message_VXPayInitSessionMessage(token));
		this._sessionInitialized = true;

		return this;
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentFrame}
	 */
	sendOptions(options = {}) {
		this.postMessage(new VXPayUpdateParamsMessage_VXPayUpdateParamsMessage(options));
		return this;
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentFrame}
	 */
	sendAdditionalOptions(options = {}) {
		this.postMessage(new Message_VXPayAdditionalOptionsMessage(options));
		return this;
	}

	/**
	 * @param {String} route
	 * @return {VXPayPaymentFrame}
	 */
	changeRoute(route = '') {
		return this.postMessage(new VXPayChangeRouteMessage_VXPayChangeRouteMessage(route));
	}

	/**
	 * [@param {VXPayViewReadyMessage} message]
	 */
	setVisible() {
		this.postMessage(new VXPayIsVisibleMessage_VXPayIsVisibleMessage());
	}

	/**
	 * @return {VXPayPaymentHooksConfig}
	 */
	get hooks() {
		return this._hooks;
	}
}

VXPayPaymentFrame_VXPayPaymentFrame.NAME = 'vx-payment-frame-payment';

/* harmony default export */ var Frame_VXPayPaymentFrame = (VXPayPaymentFrame_VXPayPaymentFrame);

// CONCATENATED MODULE: ./src/VXPay/Dom/Frame/VXPayPaymentTab.js





/**
 * @link https://www.npmjs.com/package/es6-interface
 */
class VXPayPaymentTab_VXPayPaymentTab {
	/**
	 * @param {Document} document
	 * @param {String} name
	 * @param {VXPayConfig} config
	 */
	constructor(document, name, config) {
		this._document = document;
		this._hooks    = new Config_VXPayPaymentHooksConfig();
		this._loaded   = false;
		this._name     = name;
		this._config   = config;
		this._route    = VXPayPaymentTab_VXPayPaymentTab.DEFAULT_ROUTE;
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
			.then(this.startListening.bind(this))
	}

	/**
	 * @return {Promise<Window>}
	 */
	getNewTab() {
		const that = this,
			url  = this._config.getPaymentFrameUrl() + '#' + this._route;

		return new Promise(resolve => {
			if (that.hasOwnProperty('_window') && !that._window.closed) {
				resolve(that._window);
			}

			that._window = that._document.defaultView.open(url, that._name);
			resolve(that._window);
		});
	}

	/**
	 * @return {VXPayPaymentHooksConfig}
	 */
	get hooks() {
		return this._hooks;
	}

	/**
	 * listen for incoming messages
	 * @param {Window} window
	 * @return {Window}
	 */
	startListening(window) {
		Event_VXPayEventListener.addEvent(
			Dom_VXPayIframe.EVENT_MESSAGE,
			this._document.defaultView,
			(event) => Hooks_VXPayHookRouter(this._hooks, event)
		);

		Event_VXPayEventListener.addEvent(
			Dom_VXPayIframe.EVENT_UNLOAD,
			this._document.defaultView,
			this.stopListening.bind(this)
		);

		return window;
	}

	/**
	 * Remove listeners
	 */
	stopListening() {
		Event_VXPayEventListener.removeEvent(
			Dom_VXPayIframe.EVENT_MESSAGE,
			this._document.defaultView,
			(event) => Hooks_VXPayHookRouter(this._hooks, event)
		);

		Event_VXPayEventListener.removeEvent(
			Dom_VXPayIframe.EVENT_UNLOAD,
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
		return this;
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentTab}
	 */
	sendAdditionalOptions(options = {}) {
		this._config.merge(options);
		return this;
	}

	/**
	 * Not really much to do here, but should match the interface of {VXPayPaymentFrame}
	 *
	 * [@param {String|undefined} token]
	 * @return {VXPayPaymentTab}
	 */
	initSession() {
		return this;
	}

	/**
	 * @param {String} route
	 * @return {VXPayPaymentTab}
	 */
	changeRoute(route = VXPayPaymentTab_VXPayPaymentTab.DEFAULT_ROUTE) {
		this._route = route;
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

		return this;
	}
}

VXPayPaymentTab_VXPayPaymentTab.NAME = 'vx-payment-tab-payment';

VXPayPaymentTab_VXPayPaymentTab.DEFAULT_ROUTE = '/';

/* harmony default export */ var Frame_VXPayPaymentTab = (VXPayPaymentTab_VXPayPaymentTab);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Frames/VXPayInitPaymentMiddleware.js




/**
 * @todo function seems a bit too long, maybe refactor in future?
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Boolean} load
 * @return {Function}
 * @constructor
 */
const VXPayInitPaymentMiddleware = (vxpay, resolve, load = true) => {
	vxpay.logger.log('VXPayInitPaymentMiddleware()');

	// check already initialized
	if (vxpay.state.isContentLoaded) {
		vxpay.logger.log('VXPayInitPaymentMiddleware() - already loaded, resolve ...');
		return resolve(vxpay);
	}

	// or in progress
	if (vxpay.state.isFrameInProgress && !load) {
		vxpay.logger.log('VXPayInitPaymentMiddleware() - already in progress, resolve ...');
		return resolve(vxpay);
	}

	// tab or frame?
	vxpay.state.isFrameInProgress = true;
	if (!vxpay.hasOwnProperty('_paymentFrame')) {
		vxpay._paymentFrame = vxpay.config.enableTab
			? new Frame_VXPayPaymentTab(vxpay.window.document, Frame_VXPayPaymentTab.NAME, vxpay.config)
			: new Frame_VXPayPaymentFrame(vxpay.window.document, vxpay.config.getPaymentFrameUrl(), Frame_VXPayPaymentFrame.NAME);

		// do we need logging?
		if (vxpay.config.logging) {
			vxpay._paymentFrame
				.hooks
				.onAny(msg => vxpay.logger.log(VXPay_VXPayLogger.LOG_INCOMING, msg))
				.onBeforeSend(msg => vxpay.logger.log(VXPay_VXPayLogger.LOG_OUTGOING, msg));
		}
	}

	if (!vxpay._paymentFrame.loaded) {
		// set resolve hook
		vxpay._paymentFrame
			.hooks
			// state updates
			.onIframeReady(vxpay.state.markFrameReady.bind(vxpay.state))
			.onContentLoaded(vxpay.state.markContentLoaded.bind(vxpay.state))
			.onTransferToken(vxpay.state.markHasToken.bind(vxpay.state))
			// functional hooks
			.onTransferToken(vxpay.config.setTokenFromMessage.bind(vxpay.config))
			.onFlowChange(vxpay.config.updateFlow.bind(vxpay.config))
			// show frame and send isVisible
			.onViewReady(vxpay._paymentFrame.setVisible.bind(vxpay._paymentFrame))
			.onViewReady(vxpay._paymentFrame.show.bind(vxpay._paymentFrame))
			.onSuccess(vxpay._paymentFrame.hide.bind(vxpay._paymentFrame))
			.onClose(vxpay._paymentFrame.hide.bind(vxpay._paymentFrame))
			.onContentLoaded(() => resolve(vxpay));

		// trigger load if not tab
		if (!vxpay.config.enableTab && load) {
			vxpay.logger.log('VXPayInitPaymentMiddleware() - not loaded yet, trigger load');
			vxpay._paymentFrame.url = vxpay.config.getPaymentFrameUrl();
			vxpay._paymentFrame.triggerLoad();
		} else {
			// resolve promise
			resolve(vxpay);
		}
	}
};

/* harmony default export */ var Frames_VXPayInitPaymentMiddleware = (VXPayInitPaymentMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Frames/VXPayInitHelperMiddleware.js




/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {Function}
 * @constructor
 */
const VXPayInitHelperMiddleware = (vxpay, resolve) => {
	// check already initialized
	if (typeof vxpay.helperFrame !== 'undefined') {
		return resolve(vxpay);
	}

	vxpay.helperFrame = new Frame_VXPayHelperFrame(
		vxpay.window.document,
		Dom_VXPayIframe.ORIGIN_VX + '/VXPAY-V' + vxpay.apiVersion + '/helper'
	);

	if (vxpay.config.logging) {
		vxpay.helperFrame
			.hooks
			.onAny(msg => vxpay.logger.log(VXPay_VXPayLogger.LOG_INCOMING, msg))
			.onBeforeSend(msg => vxpay.logger.log(VXPay_VXPayLogger.LOG_OUTGOING, msg));
	}

	vxpay.helperFrame.triggerLoad();
	return resolve(vxpay);
};

/* harmony default export */ var Frames_VXPayInitHelperMiddleware = (VXPayInitHelperMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayIsLoggedInActionMessage.js


class VXPayIsLoggedInActionMessage_VXPayIsLoggedInActionMessage extends VXPay_VXPayMessage {
	constructor() {
		super(VXPay_VXPayMessage.TYPE_ACTION_IS_LOGGED_IN);
	}
}

// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayIsLoggedInTriggerMiddleware.js


/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @constructor
 */
const VXPayIsLoggedInTriggerMiddleware = (vxpay, resolve, reject) => {
	try {
		vxpay.hooks.then(hooks => {
			// is hook setup?
			if (!hooks.hasOnIsLoggedIn(resolve)) {
				hooks.onIsLoggedIn(resolve);
			}
		});

		// trigger post message
		vxpay.paymentFrame.then(frame => frame.postMessage(new VXPayIsLoggedInActionMessage_VXPayIsLoggedInActionMessage));
	} catch (err) {
		reject(err);
	}

	return vxpay;
};

/* harmony default export */ var Actions_VXPayIsLoggedInTriggerMiddleware = (VXPayIsLoggedInTriggerMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayListenOrCallLoggedInMiddleware.js


class VXPayListenOrCallLoggedInMiddleware_VXPayListenOrCallLoggedInMiddleware {
	/**
	 * @param {VXPay} vxpay
	 * @param {Function} resolve
	 * @param {Function} reject
	 * @constructor
	 */
	constructor(vxpay, resolve, reject) {
		this._vxpay   = vxpay;
		this._resolve = resolve;
		this._reject  = reject;
		this._handler = this.trigger.bind(this);
	}

	/**
	 * @return {VXPay}
	 */
	run() {
		try {
			// is token already received?
			if (this._vxpay.state.hasToken) {
				this._handler();
				return this._vxpay;
			}

			// did we set handler already?
			this._vxpay.hooks.then(hooks => {
				if (!hooks.hasOnTransferToken(this._handler)) {
					hooks.onTransferToken(this._handler);
				}
			});

			return this._vxpay;
		} catch (err) {
			this._reject(err);
		}
	}

	/**
	 * @return {void}
	 */
	trigger() {
		Actions_VXPayIsLoggedInTriggerMiddleware(this._vxpay, this._resolve, this._reject);
	}
}

/* harmony default export */ var Actions_VXPayListenOrCallLoggedInMiddleware = (VXPayListenOrCallLoggedInMiddleware_VXPayListenOrCallLoggedInMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayOnAVSStatusListenMiddleware.js
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayOnAVSStatusListenMiddleware = (vxpay, resolve, reject) => {
	try {
		vxpay.hooks.then(hooks => {
			if (!hooks.hasOnAVSStatus(resolve)) {
				hooks.onAVSStatus(resolve);
			}
		});

		return vxpay;
	} catch (err) {
		reject(err);
	}
};

/* harmony default export */ var Actions_VXPayOnAVSStatusListenMiddleware = (VXPayOnAVSStatusListenMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayGetAVSStatusMessage.js


class VXPayGetAVSStatusMessage_VXPayGetAVSStatusMessage extends VXPay_VXPayMessage {
	constructor() {
		super(VXPay_VXPayMessage.TYPE_ACTION_GET_AVS_STATUS);
	}
}

// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayAVSStatusTriggerMiddleware.js


/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayAVSStatusTriggerMiddleware = (vxpay) => {
	const message = (frame) => frame.postMessage(new VXPayGetAVSStatusMessage_VXPayGetAVSStatusMessage);

	// is token already received?
	if (!vxpay.state.hasToken) {
		vxpay.hooks.then(hooks => {
			hooks.onTransferToken(() => vxpay.paymentFrame.then(message))
		})
	} else {
		// or trigger post message
		vxpay.paymentFrame.then(message);
	}

	return vxpay;
};

/* harmony default export */ var Actions_VXPayAVSStatusTriggerMiddleware = (VXPayAVSStatusTriggerMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayListenForBalanceMiddleware.js
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForBalanceMiddleware = (vxpay, resolve, reject) => {
	try {
		vxpay.hooks.then(hooks => {
			if (!hooks.hasOnBalance(resolve)) {
				hooks.onBalance(resolve);
			}
		});

		return vxpay;
	} catch (err) {
		reject(err);
	}
};

/* harmony default export */ var Actions_VXPayListenForBalanceMiddleware = (VXPayListenForBalanceMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayGetBalanceMessage.js


class VXPayGetBalanceMessage_VXPayGetBalanceMessage extends VXPay_VXPayMessage {
	constructor() {
		super(VXPay_VXPayMessage.TYPE_ACTION_GET_BALANCE);
	}
}

/* harmony default export */ var Actions_VXPayGetBalanceMessage = (VXPayGetBalanceMessage_VXPayGetBalanceMessage);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayBalanceTriggerMiddleware.js


/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayBalanceTriggerMiddleware = (vxpay) => {
	const message = frame => frame.postMessage(new Actions_VXPayGetBalanceMessage);

	if (!vxpay.state.hasToken) {
		vxpay.hooks.then(hooks => {
			hooks.onTransferToken(() => vxpay.paymentFrame.then(message))
		})
	} else {
		vxpay.paymentFrame.then(message);
	}

	return vxpay;
};

/* harmony default export */ var Actions_VXPayBalanceTriggerMiddleware = (VXPayBalanceTriggerMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayListenForActiveAbosMiddleware.js
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForActiveAbosMiddleware = (vxpay, resolve, reject) => {
	try {
		vxpay.hooks.then(hooks => {
			if (!hooks.hasOnActiveAbos(resolve)) {
				hooks.onActiveAbos(resolve);
			}
		})
	} catch (err) {
		reject(err);
	}

	return vxpay;
};

/* harmony default export */ var Actions_VXPayListenForActiveAbosMiddleware = (VXPayListenForActiveAbosMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayGetActiveAbosMessage.js


class VXPayGetActiveAbosMessage_VXPayGetActiveAbosMessage extends VXPay_VXPayMessage {
	constructor() {
		super(VXPay_VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS);
	}
}

/* harmony default export */ var Actions_VXPayGetActiveAbosMessage = (VXPayGetActiveAbosMessage_VXPayGetActiveAbosMessage);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayActiveAbosTriggerMiddleware.js


/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayActiveAbosTriggerMiddleware = (vxpay) => {
	const send = (frame) => {
		frame.postMessage(new Actions_VXPayGetActiveAbosMessage);
	};

	if (!vxpay.state.hasToken) {
		vxpay.hooks.then(hooks => {
			hooks.onTransferToken(() => vxpay.paymentFrame.then(send));
		})
	} else {
		vxpay.paymentFrame.then(send);
	}

	return vxpay;
};

/* harmony default export */ var Actions_VXPayActiveAbosTriggerMiddleware = (VXPayActiveAbosTriggerMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayListenForLogoutMiddleware.js
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForLogoutMiddleware = (vxpay, resolve, reject) => {
	try {
		vxpay.hooks.then(hooks => {
			if (!hooks.hasOnLogout(resolve)) {
				hooks.onLogout(resolve);
			}
		});

		return vxpay;
	} catch (err) {
		reject(err);
	}
};

/* harmony default export */ var Actions_VXPayListenForLogoutMiddleware = (VXPayListenForLogoutMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayLogoutMessage.js


class VXPayLogoutMessage_VXPayLogoutMessage extends VXPay_VXPayMessage {
	constructor() {
		super(VXPay_VXPayMessage.TYPE_ACTION_LOGOUT);
	}
}

/* harmony default export */ var Actions_VXPayLogoutMessage = (VXPayLogoutMessage_VXPayLogoutMessage);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayLogoutTriggerMiddleware.js


/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayLogoutTriggerMiddleware = (vxpay) => {
	const caller = (frame) => frame.postMessage(new Actions_VXPayLogoutMessage);

	if (!vxpay.state.hasToken) {
		vxpay.hooks.then(hooks => {
			hooks.onTransferToken(() => vxpay.paymentFrame.then(caller))
		});
	} else {
		vxpay.paymentFrame.then(caller);
	}

	return vxpay;
};

/* harmony default export */ var Actions_VXPayLogoutTriggerMiddleware = (VXPayLogoutTriggerMiddleware);

// CONCATENATED MODULE: ./src/VXPay/Model/VXPayState.js
class VXPayState {
	constructor() {
		this._isFrameReady = false;
		this._token = undefined;
		this._isContentLoaded = false;
		this._isSessionInitialized = false;
		this._isFrameInProgress = false;
	}

	/**
	 * @return {boolean}
	 */
	get isFrameInProgress() {
		return this._isFrameInProgress;
	}

	/**
	 * @param {boolean} value
	 */
	set isFrameInProgress(value) {
		this._isFrameInProgress = value;
	}

	/**
	 * @return {boolean}
	 */
	get isFrameReady() {
		return this._isFrameReady;
	}

	/**
	 * @param {boolean} value
	 */
	set isFrameReady(value) {
		this._isFrameReady = value;
	}

	/**
	 * @return {boolean}
	 */
	get hasToken() {
		return typeof this._token !== 'undefined';
	}

	/**
	 * @return {boolean}
	 */
	get isContentLoaded() {
		return this._isContentLoaded;
	}

	/**
	 * @param {boolean} value
	 */
	set isContentLoaded(value) {
		this._isContentLoaded = value;
	}

	/**
	 * @return {boolean}
	 */
	get isSessionInitialized() {
		return this._isSessionInitialized;
	}

	/**
	 * @param {boolean} value
	 */
	set isSessionInitialized(value) {
		this._isSessionInitialized = value;
	}

	/**
	 * @return {void}
	 */
	markFrameReady() {
		this._isFrameReady = true;
		this._isFrameInProgress = false;
	}

	/**
	 * @return {void}
	 */
	markContentLoaded() {
		this._isContentLoaded = true;
	}

	/**
	 * @param {VXPayTransferTokenMessage} msg
	 */
	markHasToken(msg) {
		this._token = msg;
	}

	/**
	 * @return {undefined|VXPayTransferTokenMessage}
	 */
	get transferToken() {
		return this._token;
	}

	markSessionInitialized() {
		this._isSessionInitialized = true;
	}
}
// CONCATENATED MODULE: ./src/VXPay/Middleware/Condition/VXPayWhenTokenTransferred.js
/**
 * @param {VXPay} vxpay
 * @return {Promise<VXPay>}
 * @constructor
 */
const VXPayWhenTokenTransferred = (vxpay) => {
	vxpay.logger.log('VXPayWhenTokenTransferred()');

	return new Promise((resolve, reject) => {
		try {
			// do we have the token already?
			if (vxpay.state.hasToken || vxpay.config.enableTab) {
				resolve(vxpay);
			} else {
				// otherwise - wait for it
				vxpay.hooks.then(hooks => hooks.onTransferToken(() => resolve(vxpay)));
			}
		} catch (err) {
			reject(err);
		}
	});
};

/* harmony default export */ var Condition_VXPayWhenTokenTransferred = (VXPayWhenTokenTransferred);

// CONCATENATED MODULE: ./src/VXPay/Config/VXPayPaymentRoutes.js
class VXPayPaymentRoutes {
	/**
	 * @return {String[]}
	 */
	static getAllowed() {
		return [
			VXPayPaymentRoutes.LOGIN,
			VXPayPaymentRoutes.SIGN_UP,
			VXPayPaymentRoutes.PAYMENT,
			VXPayPaymentRoutes.ABO,
			VXPayPaymentRoutes.AVS,
			VXPayPaymentRoutes.PROMOCODE,
			VXPayPaymentRoutes.OP_COMPENSATION,
			VXPayPaymentRoutes.PASSWORD,
			VXPayPaymentRoutes.PASSWORD_RESET,
			VXPayPaymentRoutes.AUTO_RECHARGE,
			VXPayPaymentRoutes.ONE_CLICK,
			VXPayPaymentRoutes.SETTINGS,
			VXPayPaymentRoutes.VOICE_CALL,
			VXPayPaymentRoutes.LIMIT,
		];
	}
}

VXPayPaymentRoutes.LOGIN           = '/login';
VXPayPaymentRoutes.SIGN_UP         = '/signup';
VXPayPaymentRoutes.PAYMENT         = '/payment';
VXPayPaymentRoutes.ABO             = '/abo';
VXPayPaymentRoutes.AVS             = '/avs';
VXPayPaymentRoutes.PROMOCODE       = '/promocode';
VXPayPaymentRoutes.OP_COMPENSATION = '/opcompensation';
VXPayPaymentRoutes.PASSWORD        = '/password';
VXPayPaymentRoutes.PASSWORD_RESET  = '/passwordreset';
VXPayPaymentRoutes.AUTO_RECHARGE   = '/autorecharge';
VXPayPaymentRoutes.ONE_CLICK       = '/comfort';
VXPayPaymentRoutes.SETTINGS        = '/user/settings';
VXPayPaymentRoutes.VOICE_CALL      = '/voicecall';
VXPayPaymentRoutes.LIMIT           = '/limit';

/* harmony default export */ var Config_VXPayPaymentRoutes = (VXPayPaymentRoutes);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenLoginCommand.js



/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenLoginCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenLoginCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.sendOptions({'flow': Config_VXPayFlow.LOGIN})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(Config_VXPayPaymentRoutes.LOGIN)
			.initSession());

	return vxpay;
};

/* harmony default export */ var Command_VXPayOpenLoginCommand = (VXPayOpenLoginCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenSignUpCommand.js



/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenSignUpCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenSignUpCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.sendOptions({'flow': Config_VXPayFlow.LOGIN})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(Config_VXPayPaymentRoutes.SIGN_UP)
			.initSession());

	return vxpay;
};

/* harmony default export */ var Command_VXPayOpenSignUpCommand = (VXPayOpenSignUpCommand);

// CONCATENATED MODULE: ./src/VXPay/Config/VXPayPaymentType.js
class VXPayPaymentType {}

VXPayPaymentType.VOICE_CALL  = 'Voice';
VXPayPaymentType.CREDIT_CARD = 'CC';
VXPayPaymentType.LASTSCHRIFT = 'LS';

/* harmony default export */ var Config_VXPayPaymentType = (VXPayPaymentType);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenVoiceCallCommand.js




class VXPayOpenVoiceCallCommand_VXPayOpenVoiceCallCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayOpenVoiceCallCommand::run()');

		vxpay.paymentFrame
			.then(frame => frame
				.sendOptions(VXPayOpenVoiceCallCommand_VXPayOpenVoiceCallCommand.PARAMS)
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(Config_VXPayPaymentRoutes.VOICE_CALL)
				.initSession());

		return vxpay;
	}
}

VXPayOpenVoiceCallCommand_VXPayOpenVoiceCallCommand.PARAMS = {
	flow:    Config_VXPayFlow.MONEY_CHARGE,
	paytype: Config_VXPayPaymentType.VOICE_CALL
};

/* harmony default export */ var Command_VXPayOpenVoiceCallCommand = (VXPayOpenVoiceCallCommand_VXPayOpenVoiceCallCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenPaymentCommand.js



class VXPayOpenPaymentCommand_VXPayOpenPaymentCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayOpenPaymentCommand()');

		vxpay.paymentFrame
			.then(frame => frame
				.sendOptions(VXPayOpenPaymentCommand_VXPayOpenPaymentCommand.PARAMS)
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(Config_VXPayPaymentRoutes.PAYMENT)
				.initSession());

		return vxpay;
	}
}

VXPayOpenPaymentCommand_VXPayOpenPaymentCommand.PARAMS = {
	flow:    Config_VXPayFlow.MONEY_CHARGE,
	paytype: '' // unset paytype
};

/* harmony default export */ var Command_VXPayOpenPaymentCommand = (VXPayOpenPaymentCommand_VXPayOpenPaymentCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenSettingsCommand.js



class VXPayOpenSettingsCommand_VXPayOpenSettingsCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayOpenSettingsCommand()');

		vxpay.paymentFrame
			.then(frame => frame
				.sendOptions(VXPayOpenSettingsCommand_VXPayOpenSettingsCommand.PARAMS)
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(Config_VXPayPaymentRoutes.SETTINGS)
				.initSession());

		return vxpay;
	}
}

VXPayOpenSettingsCommand_VXPayOpenSettingsCommand.PARAMS = {
	flow:    Config_VXPayFlow.SETTINGS,
	paytype: '' // reset paytype
};

/* harmony default export */ var Command_VXPayOpenSettingsCommand = (VXPayOpenSettingsCommand_VXPayOpenSettingsCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenAboCommand.js



/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenAboCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenAboCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.sendOptions({'flow': Config_VXPayFlow.VIP_ABO})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(Config_VXPayPaymentRoutes.ABO)
			.initSession());

	return vxpay;
};

/* harmony default export */ var Command_VXPayOpenAboCommand = (VXPayOpenAboCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayResetPasswordCommand.js




class VXPayResetPasswordCommand_VXPayResetPasswordCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayResetPasswordCommand()');

		vxpay.paymentFrame
			.then(frame => frame
				.initSession()
				.sendOptions(VXPayResetPasswordCommand_VXPayResetPasswordCommand.getParams(vxpay.config))
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(Config_VXPayPaymentRoutes.PASSWORD_RESET));

		return vxpay;
	}

	/**
	 * @param config
	 * @return {{flow: string, pwdresetUserId: String, pwdresetUserName: String, pwdresetKey: String}}
	 */
	static getParams(config) {
		const helper = new VXPayUrlHelper(config.window.URL);

		return {
			flow:             Config_VXPayFlow.PASSWORD_RESET,
			pwdresetUserId:   helper.getQueryParam('u', config.window.location.href),
			pwdresetUserName: helper.getQueryParam('tpLoginPwdLost', config.window.location.href),
			pwdresetKey:      helper.getQueryParam('key', config.window.location.href)
		};
	}
}
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayLostPasswordCommand.js




class VXPayLostPasswordCommand_VXPayLostPasswordCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayLostPasswordCommand()');

		vxpay.paymentFrame
			.then(frame => frame
				.initSession()
				.sendOptions(VXPayLostPasswordCommand_VXPayLostPasswordCommand.getParams(vxpay.config))
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(Config_VXPayPaymentRoutes.PASSWORD));

		return vxpay;
	}

	/**
	 * @param config
	 * @return {{flow: string, pwdresetUserId: String, pwdresetUserName: String, pwdresetEmail: String}}
	 */
	static getParams(config) {
		const helper = new VXPayUrlHelper(config.window.URL);

		return {
			flow:             Config_VXPayFlow.PASSWORD_LOST,
			pwdresetUserId:   helper.getQueryParam('u', config.window.location.href),
			pwdresetUserName: helper.getQueryParam('tpLoginPwdLost', config.window.location.href),
			pwdresetEmail:    helper.getQueryParam('tpEmailPwdLost', config.window.location.href)
		};
	}
}
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenLimitedPaymentCommand.js



class VXPayOpenLimitedPaymentCommand_VXPayOpenLimitedPaymentCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayOpenLimitedPaymentCommand()');

		vxpay.paymentFrame
			.then(frame => frame
				.sendOptions(VXPayOpenLimitedPaymentCommand_VXPayOpenLimitedPaymentCommand.PARAMS)
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(Config_VXPayPaymentRoutes.LIMIT)
				.initSession());

		return vxpay;
	}
}

VXPayOpenLimitedPaymentCommand_VXPayOpenLimitedPaymentCommand.PARAMS = {
	flow: Config_VXPayFlow.LIMIT,
	paytype: ''
};

/* harmony default export */ var Command_VXPayOpenLimitedPaymentCommand = (VXPayOpenLimitedPaymentCommand_VXPayOpenLimitedPaymentCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenVipAboTrialCommand.js



/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenVipAboTrialCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenVipAboTrialCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.initSession()
			.sendOptions({'flow': Config_VXPayFlow.TRIAL_VIP_ABO})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(Config_VXPayPaymentRoutes.ABO));

	return vxpay;
};

/* harmony default export */ var Command_VXPayOpenVipAboTrialCommand = (VXPayOpenVipAboTrialCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenPremiumAboCommand.js



/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayOpenPremiumAboCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenPaymentCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.initSession()
			.sendOptions({'flow': Config_VXPayFlow.VXTV_ABO})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(Config_VXPayPaymentRoutes.ABO));

	return vxpay;
};

/* harmony default export */ var Command_VXPayOpenPremiumAboCommand = (VXPayOpenPremiumAboCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenAVSCommand.js



/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenAVSCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenAVSCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.initSession()
			.sendOptions({'flow': Config_VXPayFlow.AVS})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(Config_VXPayPaymentRoutes.AVS));

	return vxpay;
};

/* harmony default export */ var Command_VXPayOpenAVSCommand = (VXPayOpenAVSCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenPromoCodeCommand.js



/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenPromoCodeCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenPromoCodeCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.initSession()
			.sendOptions({'flow': Config_VXPayFlow.PROMOCODE})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(Config_VXPayPaymentRoutes.PROMOCODE));

	return vxpay;
};

/* harmony default export */ var Command_VXPayOpenPromoCodeCommand = (VXPayOpenPromoCodeCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenOneClickCommand.js



class VXPayOpenOneClickCommand_VXPayOpenOneClickCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayOpenOneClickCommand()');

		vxpay.paymentFrame
			.then(frame => frame
				.initSession()
				.sendOptions(VXPayOpenOneClickCommand_VXPayOpenOneClickCommand.PARAMS)
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(Config_VXPayPaymentRoutes.ONE_CLICK));

		return vxpay;
	}
}

VXPayOpenOneClickCommand_VXPayOpenOneClickCommand.PARAMS = {
	flow: Config_VXPayFlow.ONE_CLICK,
	paytype: '',
	oneClickData: {
		data: null
	}
};

/* harmony default export */ var Command_VXPayOpenOneClickCommand = (VXPayOpenOneClickCommand_VXPayOpenOneClickCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenAutoRechargeCommand.js



class VXPayOpenAutoRechargeCommand_VXPayOpenAutoRechargeCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayOpenAutoRechargeCommand()');

		vxpay.paymentFrame
			.then(frame => frame
				.initSession()
				.sendOptions(VXPayOpenAutoRechargeCommand_VXPayOpenAutoRechargeCommand.PARAMS)
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(Config_VXPayPaymentRoutes.AUTO_RECHARGE));

		return vxpay;
	}
}

VXPayOpenAutoRechargeCommand_VXPayOpenAutoRechargeCommand.PARAMS = {
	flow: Config_VXPayFlow.AUTO_RECHARGE,
	autoRechargeData: {
		data: null
	}
};

/* harmony default export */ var Command_VXPayOpenAutoRechargeCommand = (VXPayOpenAutoRechargeCommand_VXPayOpenAutoRechargeCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenOpenBalanceCommand.js



/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenOpenBalanceCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenOneClickCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.initSession()
			.sendOptions({'flow': Config_VXPayFlow.OP_COMPENSATION})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(Config_VXPayPaymentRoutes.OP_COMPENSATION));

	return vxpay;
};

/* harmony default export */ var Command_VXPayOpenOpenBalanceCommand = (VXPayOpenOpenBalanceCommand);

// CONCATENATED MODULE: ./src/VXPay/Middleware/Frames/VXPayTriggerShowForTab.js
/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayTriggerShowForTab = (vxpay) => {
	vxpay.logger.log('VXPayTriggerShowForTab()');

	// ony for tab config - trigger show manually
	if (vxpay.config.enableTab) {
		vxpay.paymentFrame.then(frame => frame.show());
	}

	return vxpay;
};

/* harmony default export */ var Frames_VXPayTriggerShowForTab = (VXPayTriggerShowForTab);

// CONCATENATED MODULE: ./src/VXPay.js




































class VXPay_VXPay {
	/**
	 * @param {VXPayConfig} config
	 */
	constructor(config) {
		this.config      = config;
		this.logger      = new VXPay_VXPayLogger(this.config.logging, this.config.window);
		this._state      = new VXPayState();
		this.logger.log('VXPay::constructor - ' + JSON.stringify(this.config.getOptions()));
	}

	/**
	 * @return {VXPayState}
	 */
	get state() {
		return this._state;
	}

	/**
	 * @return {Promise<VXPay>}
	 * @private
	 */
	_initHelperFrame() {
		return new Promise(resolve => Frames_VXPayInitHelperMiddleware(this, resolve))
	}

	/**
	 * @param {Boolean} triggerLoad
	 * @return {Promise<VXPay>}
	 * @private
	 */
	_initPaymentFrame(triggerLoad = true) {
		this.logger.log('VXPay::_initPaymentFrame');
		return new Promise(resolve => Frames_VXPayInitPaymentMiddleware(this, resolve, triggerLoad))
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openLogin() {
		this.logger.log('VXPay::openLogin');

		return new Promise((resolve, reject) => {
			return this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenLoginCommand)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSignUp() {
		return new Promise((resolve, reject) => {
			return this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenSignUpCommand)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openVoiceCall() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenVoiceCallCommand.run)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSignUpOrLogin() {
		return this._initHelperFrame()
			.then(vxpay => vxpay.helperFrame.getLoginCookie())
			.then(msg => msg.hasCookie ? this.openLogin() : this.openSignUp())
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openPayment() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenPaymentCommand.run)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openAbo() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenAboCommand)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSettings() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenSettingsCommand.run)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @note most times opens registration?
	 * @note some times view-ready is not fired?
	 *
	 * @return {Promise<VXPay>}
	 */
	resetPassword() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(VXPayResetPasswordCommand_VXPayResetPasswordCommand.run)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	lostPassword() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(VXPayLostPasswordCommand_VXPayLostPasswordCommand.run)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	limitPayment() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenLimitedPaymentCommand.run)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	vipAboTrial() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenVipAboTrialCommand)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	premiumAbo() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenPremiumAboCommand)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openAVS() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenAVSCommand)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openPromoCode() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenPromoCodeCommand)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openScratchCard() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenPromoCodeCommand)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openOneClick() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenOneClickCommand.run)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openAutoReCharge() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenAutoRechargeCommand.run)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openBalance() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(Condition_VXPayWhenTokenTransferred)
				.then(Command_VXPayOpenOpenBalanceCommand)
				.then(Frames_VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPayIsLoggedInResponseMessage>}
	 */
	isLoggedIn() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => (new Actions_VXPayListenOrCallLoggedInMiddleware(vxpay, resolve, reject)).run())
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPayAVSStatusMessage>}
	 */
	getAVSStatus() {
		return new Promise((resolve, reject) => {
			return this._initPaymentFrame()
				.then(vxpay => Actions_VXPayOnAVSStatusListenMiddleware(vxpay, resolve, reject))
				.then(Actions_VXPayAVSStatusTriggerMiddleware)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPayBalanceMessage>}
	 */
	getBalance() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => Actions_VXPayListenForBalanceMiddleware(vxpay, resolve, reject))
				.then(Actions_VXPayBalanceTriggerMiddleware)
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPayActiveAbosMessage>}
	 */
	getActiveAbos() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => Actions_VXPayListenForActiveAbosMiddleware(vxpay, resolve, reject))
				.then(Actions_VXPayActiveAbosTriggerMiddleware)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPayLoggedOutMessage>}
	 */
	logout() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => Actions_VXPayListenForLogoutMiddleware(vxpay, resolve, reject))
				.then(Actions_VXPayLogoutTriggerMiddleware)
				.catch(reject)
		})
	}

	/**
	 * @return {VXPayConfig}
	 */
	get config() {
		return this._config;
	}

	/**
	 * @param {VXPayConfig} value
	 */
	set config(value) {
		if (!(value instanceof VXPay_VXPayConfig)) {
			throw new TypeError('Please provide an instance of VXPayConfig!');
		}

		if (typeof this._logger !== 'undefined') {
			this._logger.log('VXPay::config -> ', value);
		}

		this._config = value;
	}

	/**
	 * @return {VXPayLogger}
	 */
	get logger() {
		return this._logger;
	}

	/**
	 * @param {VXPayLogger} value
	 */
	set logger(value) {
		if (!(value instanceof VXPay_VXPayLogger)) {
			throw new TypeError('Please provide an instance of VXPayLogger!');
		}

		this._logger = value;
	}

	/**
	 * @return {Number}
	 */
	get apiVersion() {
		return this.config.apiVersion;
	}

	/**
	 * @param {Number} value
	 */
	set apiVersion(value) {
		this.config.apiVersion = value;
	}

	/**
	 * @return {Promise<VXPayPaymentHooksConfig>}
	 */
	get hooks() {
		this.logger.log('VXPay::hooks');

		return new Promise((resolve, reject) => {
			if (this.state.isContentLoaded) {
				this.logger.log('VXPay::hooks -> already loaded, resolve ...');
				return resolve(this._paymentFrame.hooks);
			}

			// init and don't trigger load
			this._initPaymentFrame(false)
				.then(vxpay => resolve(vxpay._paymentFrame.hooks))
				.catch(reject);
		});
	}

	/**
	 * @return {Promise<VXPayPaymentFrame|VXPayPaymentTab>}
	 */
	get paymentFrame() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => resolve(vxpay._paymentFrame))
				.catch(reject)
		});
	}

	/**
	 * @param {VXPayPaymentFrame|VXPayPaymentTab} value
	 */
	set paymentFrame(value) {
		if (!(value instanceof Frame_VXPayPaymentFrame) && !(value instanceof Frame_VXPayPaymentTab)) {
			throw new TypeError('Payment frame should be an instance of VXPayPaymentFrame or VXPayPaymentTab');
		}

		this._paymentFrame = value;
	}

	/**
	 * @return {VXPayHelperFrame}
	 */
	get helperFrame() {
		return this._helperFrame;
	}

	/**
	 * @param {VXPayHelperFrame} value
	 */
	set helperFrame(value) {
		if (!(value instanceof Frame_VXPayHelperFrame)) {
			throw new TypeError('Helper frame should be an instance of VXPayHelperFrame');
		}

		this._helperFrame = value;
	}

	/**
	 * @return {Window|undefined}
	 */
	get window() {
		return this.config.window;
	}
}

// CONCATENATED MODULE: ./src/VXPay/VXPayNotifications.js
class VXPayNotifications {
}

VXPayNotifications.SESSION_ACKNOWLEDGE              = 'ackSession';
VXPayNotifications.SESSION_EXPIRED                  = 'sessionExpired';
VXPayNotifications.MESSAGE                          = 'message';
VXPayNotifications.MESSAGE_PRICE                    = 'messagePrice';
VXPayNotifications.CHANNELS                         = 'channels';
VXPayNotifications.INCOMING_MESSAGE                 = 'incomingMessage';
VXPayNotifications.ALL_CHANNELS_SEEN                = 'allChannelsSeen';
VXPayNotifications.CAN_ONECLICK_RESULT              = 'canOneClickResult';
VXPayNotifications.CHARGE_AUTORECHARGE_RESULT       = 'chargeAutoRechargeResult';
VXPayNotifications.CHARGE_ONECLICK_RESULT           = 'chargeOneClickResult';
VXPayNotifications.FAVORITE_ACTOR_PINNED            = 'FavoriteActorPinned';
VXPayNotifications.FAVORITE_ACTOR_UNPINNED          = 'FavoriteActorUnpinned';
VXPayNotifications.FAVORITE_PICTURE_PINNED          = 'FavoritePicturePinned';
VXPayNotifications.FAVORITE_PICTURE_UNPINNED        = 'FavoritePictureUnpinned';
VXPayNotifications.FAVORITE_ALBUM_PINNED            = 'FavoriteAlbumPinned';
VXPayNotifications.FAVORITE_ALBUM_UNPINNED          = 'FavoriteAlbumUnpinned';
VXPayNotifications.FAVORITE_SEDCARDS_ALBUM_PINNED   = 'FavoriteSedcardsAlbumPinned';
VXPayNotifications.FAVORITE_SEDCARDS_ALBUM_UNPINNED = 'FavoriteSedcardsAlbumUnpinned';
VXPayNotifications.FAVORITE_ACTORS                  = 'FavoriteActors';
VXPayNotifications.GUEST_BALANCE                    = 'guestBalance';
VXPayNotifications.NAVBAR_NOTIFICATIONS             = 'navbarNotifications';
VXPayNotifications.ACTOR_ONLINE                     = 'actorOnline';
VXPayNotifications.ACTOR_OFFLINE                    = 'actorOffline';
VXPayNotifications.AVS_REVOKED                      = 'avsRevoked';
VXPayNotifications.AVS_SET                          = 'avsSet';
VXPayNotifications.GUEST_LOCKED                     = 'guestLocked';
VXPayNotifications.CHANNEL_ARCHIVED                 = 'channelArchived';
VXPayNotifications.SEND_SIGNUP_EMAIL_RESULT         = 'sendSignupEmailResult';
VXPayNotifications.VIP_ABO_UPDATE                   = 'vipAboUpdate';
VXPayNotifications.VXTV_ABO_UPDATE                  = 'vxtvAboUpdate';
VXPayNotifications.VOICECALL_START                  = 'voicecallStart';
VXPayNotifications.VOICECALL_STOP                   = 'voicecallStop';
VXPayNotifications.WELCOME_BONUS_REDEEMED           = 'welcomeBonusRedeemed';
VXPayNotifications.FREE_SHOW_START                  = 'freeShowStart';
VXPayNotifications.FREE_SHOW_STOP                   = 'freeShowStop';
VXPayNotifications.PONG                             = 'pong';

/* harmony default export */ var VXPay_VXPayNotifications = (VXPayNotifications);

// CONCATENATED MODULE: ./src/main.js
/* concated harmony reexport VXPay */__webpack_require__.d(__webpack_exports__, "VXPay", function() { return VXPay_VXPay; });
/* concated harmony reexport VXPayConfig */__webpack_require__.d(__webpack_exports__, "VXPayConfig", function() { return VXPay_VXPayConfig; });
/* concated harmony reexport VXPayEnvironment */__webpack_require__.d(__webpack_exports__, "VXPayEnvironment", function() { return VXPay_VXPayEnvironment; });
/* concated harmony reexport VXPayLanguage */__webpack_require__.d(__webpack_exports__, "VXPayLanguage", function() { return VXPay_VXPayLanguage; });
/* concated harmony reexport VXPayNotifications */__webpack_require__.d(__webpack_exports__, "VXPayNotifications", function() { return VXPay_VXPayNotifications; });
/* concated harmony reexport VXPayModalConfig */__webpack_require__.d(__webpack_exports__, "VXPayModalConfig", function() { return Config_VXPayModalConfig; });
/* concated harmony reexport VXPayPaymentHooksConfig */__webpack_require__.d(__webpack_exports__, "VXPayPaymentHooksConfig", function() { return Config_VXPayPaymentHooksConfig; });
/* concated harmony reexport VXPayFlow */__webpack_require__.d(__webpack_exports__, "VXPayFlow", function() { return Config_VXPayFlow; });
/* concated harmony reexport VXPayCurrency */__webpack_require__.d(__webpack_exports__, "VXPayCurrency", function() { return Config_VXPayCurrency; });















/***/ })
/******/ ]);
});