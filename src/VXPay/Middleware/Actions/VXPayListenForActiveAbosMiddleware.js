/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForActiveAbosMiddleware = (vxpay, resolve, reject) => {
	try {
		if (!vxpay.hooks.hasOnActiveAbos(resolve)) {
			vxpay.hooks.onActiveAbos(resolve);
		}
	} catch (err) {
		reject(err);
	}

	return vxpay;
};

export default VXPayListenForActiveAbosMiddleware;
