/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForBalanceMiddleware = (vxpay, resolve, reject) => {
	try {
		if (!vxpay.hooks.hasOnBalance(resolve)) {
			vxpay.hooks.onBalance(resolve);
		}

		return vxpay;
	} catch (err) {
		reject(err);
	}
};

export default VXPayListenForBalanceMiddleware;
