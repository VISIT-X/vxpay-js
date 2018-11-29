export default class VXPayWhen {
	/**
	 * @param {VXPay} vxpay
	 * @return {Promise<VXPay>}
	 */
	static tokenTransferred(vxpay) {
		vxpay.logger.log('VXPayWhen::tokenTransferred()');

		return new Promise((resolve, reject) => {
			try {
				// do we have the token already?
				if (vxpay.state.hasToken) {
					resolve(vxpay);
				} else {
					// otherwise - wait for it
					vxpay._hooks.onTransferToken(() => resolve(vxpay));
				}
			} catch (err) {
				reject(err);
			}
		});
	}

	/**
	 * @param {VXPay} vxpay
	 * @return {Promise<VXPay>}
	 */
	static frameReady(vxpay) {
		vxpay.logger.log('VXPayWhen::frameReady()');

		return new Promise(resolve => {
			// do we have the token already?
			if (vxpay.state.isFrameReady) {
				resolve(vxpay);
			} else {
				// otherwise - wait for it
				vxpay._hooks.onIframeReady(() => resolve(vxpay));
			}

			return vxpay;
		});
	}
}
