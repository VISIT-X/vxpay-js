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
			if (vxpay.state.hasToken) {
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

export default VXPayWhenTokenTransferred;
