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
}
