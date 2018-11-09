/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForLogoutMiddleware = (vxpay, resolve, reject) => {
	try {
		if (!vxpay.hooks.hasOnLogout(resolve)) {
			vxpay.hooks.onLogout(resolve);
		}

		return vxpay;
	} catch (err) {
		reject(err);
	}
};

export default VXPayListenForLogoutMiddleware;
