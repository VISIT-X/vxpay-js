import VXPayHelperFrame from './../../Dom/Frame/VXPayHelperFrame'
import VXPayLogger      from './../../VXPayLogger'
import VXPayIframe      from './../../Dom/VXPayIframe'

export default class VXPayHelper {
	/**
	 * @param {VXPay} vxpay
	 * @param {Function} resolve
	 * @return {Function}
	 */
	static init(vxpay, resolve) {
		// check already initialized
		if (typeof vxpay.helperFrame !== 'undefined') {
			return resolve(vxpay);
		}

		vxpay.helperFrame = new VXPayHelperFrame(
			vxpay.window.document,
			VXPayIframe.ORIGIN_VX + '/VXPAY-V' + vxpay.apiVersion + '/helper'
		);

		if (vxpay.config.logging) {
			vxpay.helperFrame
				.hooks
				.onAny(msg => vxpay.logger.log(VXPayLogger.IN, msg))
				.onBeforeSend(msg => vxpay.logger.log(VXPayLogger.OUT, msg));
		}

		vxpay.helperFrame.triggerLoad();
		return resolve(vxpay);
	}
}
