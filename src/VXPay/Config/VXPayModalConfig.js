import VXPayValidator from './../VXPayValidator';

class VXPayModalConfig {

	constructor() {
		this._login         = VXPayModalConfig.YES;
		this._showHeader    = VXPayModalConfig.YES;
		this._showTeaser    = VXPayModalConfig.YES;
		this._showFooter    = VXPayModalConfig.YES;
		this._support       = VXPayModalConfig.YES;
		this._showOAuth     = VXPayModalConfig.YES;
		this._showNL        = VXPayModalConfig.YES;
		this._neutralHeader = VXPayModalConfig.NO;
		this._teaserBonus   = VXPayModalConfig.NO;
		this._showThank     = VXPayModalConfig.NO;
		this._showLogo      = VXPayModalConfig.NO;
		this._showTeaserBar = VXPayModalConfig.NO;
		this._parentInFrame = VXPayModalConfig.NO;
	}

	/**
	 * @param value
	 * @private
	 */
	static _throwOnInvalid(value) {
		if (!VXPayValidator.isModalConfValOk(value)) {
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
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
		VXPayModalConfig._throwOnInvalid(value);
		this._showTeaserBar = value;
	}

	/**
	 * @return {Number[]}
	 */
	static getAllowed() {
		return [
			VXPayModalConfig.YES,
			VXPayModalConfig.NO
		];
	}

	/**
	 * @return {Object}
	 */
	getOptions() {
		return {
			login:         this._login,
			showHeader:    this._showHeader,
			showTeaser:    this._showTeaser,
			showFooter:    this._showFooter,
			neutralHeader: this._neutralHeader,
			teaserBonus:   this._teaserBonus,
			support:       this._support,
			showOAuth:     this._showOAuth,
			showNL:        this._showNL,
			showThank:     this._showThank,
			showLogo:      this._showLogo,
			showTeaserBar: this._showTeaserBar,
			parentInFrame: this._parentInFrame,
		};
	}
}

VXPayModalConfig.YES = 1;
VXPayModalConfig.NO  = 0;

export default VXPayModalConfig;
