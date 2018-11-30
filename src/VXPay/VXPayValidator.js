import VXPayLanguage    from './VXPayLanguage'
import VXPayEnvironment from './VXPayEnvironment'
import VXPayFlow        from './Config/VXPayFlow'
import VXPayModalConfig from './Config/VXPayModalConfig'
import VXPayUrlHelper   from './VXPayUrlHelper'

export default class VXPayValidator {
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
	static isLangOk(language) {
		return VXPayLanguage.getAvailable().indexOf(language) !== -1;
	}

	/**
	 * @param {String} env
	 * @return {boolean}
	 */
	static isEnvOk(env) {
		return VXPayEnvironment.getAvailable().indexOf(env) !== -1;
	}

	/**
	 * @param {String} flow
	 * @return {boolean}
	 */
	static isFlowOk(flow) {
		return VXPayFlow.getAllowed().indexOf(flow) !== -1;
	}

	/**
	 * @param {Number} value
	 * @return {boolean}
	 */
	static isModalConfValOk(value) {
		return VXPayModalConfig.getAllowed().indexOf(value) !== -1;
	}
}
