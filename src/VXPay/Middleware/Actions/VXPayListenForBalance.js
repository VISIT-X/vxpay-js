/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForBalance = (vxpay, resolve, reject) => {
	try {
		if (!vxpay._hooks.hasOnBalance(resolve)) {
			vxpay._hooks.onBalance(resolve);
		}

		return vxpay;
	} catch (err) {
		reject(err);
	}
};

export default VXPayListenForBalance;
