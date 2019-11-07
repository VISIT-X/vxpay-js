import VXPayEnvironment from './VXPayEnvironment'
import VXPayLanguage    from './VXPayLanguage'
import VXPayValidator   from './VXPayValidator'
import VXPayFlow        from './Config/VXPayFlow'
import VXPayIframe      from './Dom/VXPayIframe'
import VXPayModalConfig from './Config/VXPayModalConfig'
import VXPayUrlHelper   from './VXPayUrlHelper'
import VXPayUserAgent   from './VXPayUserAgent'

class VXPayConfig {
	/**
	 * @param {Window} window
	 * @param {VXPayModalConfig} modalConfig
	 */
	constructor(window, modalConfig = undefined) {
		this._env      = VXPayEnvironment.getDefault();
		this._logging  = false;
		this._flow     = VXPayFlow.getDefault();
		this._language = VXPayLanguage.getDefault();
		this._urls     = {
			agb:        VXPayConfig.AGB_DEFAULT.replace('{language}', this._language),
			privacy:    VXPayConfig.PRIVACY_DEFAULT.replace('{language}', this._language),
			ref:        '',
			ruri:       '',
			suri:       '',
			successUrl: '',
			purl:       ''
		};

		this._pfm        = '';
		this._pfmsub     = '';
		this._enableTab  = (new VXPayUserAgent(window.navigator.userAgent || '')).isMobile();
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
			? new VXPayModalConfig()
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
	 * @param {string} ruri
	 */
	set ruri(ruri) {
		this._urls.ruri = ruri;
	}

	/**
	 * @return {string}
	 */
	get ref() {
		return this._urls.ref;
	}

	/**
	 * @param {string} ref
	 */
	set ref(ref) {
		this._urls.ref = ref;
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
	get successUrl() {
		return this._urls.successUrl;
	}

	/**
	 * @param {string} successUrl
	 */
	set successUrl(successUrl) {
		this._urls.successUrl = successUrl;
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
			VXPayIframe.ORIGIN_VX + '/VXPAY-V' + this._apiVersion + '/',
			this.getOptions(),
			this._modalConfig.getOptions()
		);
	}

	/**
	 * @return {Object}
	 */
	getOptions() {
		return {
			agbUrl:      this.agbUrl,
			privacyUrl:  this.privacyUrl,
			environment: this._env,
			flow:        this._flow,
			lang:        this._language,
			pfm:         this._pfm,
			pfmsub:      this._pfmsub,
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
			successUrl:  this._urls.successUrl,
			host:        this._host
		};
	}

	/**
	 * @return {Object}
	 */
	getAdditionalOptions() {
		const urls = {
			ref:   this._urls.ref,
			ruri:  this._urls.ruri,
			surl:  this._urls.suri,
			aurl:  this.agbUrl,
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
	get agbUrl() {
		return this._urls.agb;
	}

	/**
	 * @param {String} url
	 */
	set agbUrl(url) {
		if (!VXPayValidator.isUrl(url)) {
			throw new Error('Invalid URL provided: ' + url);
		}

		this._urls.agb = url;
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
		if (!VXPayValidator.isUrl(url)) {
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
		if (!VXPayValidator.isEnvOk(value)) {
			throw new TypeError('Environment ' + value + ' is not supported. Please select one of ' + VXPayEnvironment.getAvailable())
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
		if (!VXPayValidator.isLangOk(value)) {
			const msg = 'Unsupported language: ' + value.toString() + '. Allowed: ' + VXPayLanguage.getAvailable().join(', ');
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
		if (!VXPayValidator.isFlowOk(value)) {
			const msg = 'Flow not allowed: ' + value.toString()
				+ '. Select one of: ' + VXPayFlow.getAllowed().join(', ');
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
		if (!(value instanceof VXPayModalConfig)) {
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
	 * @return {string}
	 */
	get pfmsub() {
		return this._pfmsub;
	}

	/**
	 * @param {string} value
	 */
	set pfmsub(value) {
		this._pfmsub = value;
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

VXPayConfig.AGB_DEFAULT     = 'https://www.visit-x.net/CAMS/{language}/Info/Zentrum.html?submod=AGB&track=Account';
VXPayConfig.PRIVACY_DEFAULT = 'https://www.visit-x.net/CAMS/{language}/Info/Zentrum.html?submod=Datenschutz&track=Index';

export default VXPayConfig;
