/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayOnAVSStatusListen = (vxpay, resolve, reject) => {
	try {
		if (!vxpay._hooks.hasOnAVSStatus(resolve)) {
			vxpay._hooks.onAVSStatus(resolve);
		}

		return vxpay;
	} catch (err) {
		reject(err);
	}
};

export default VXPayOnAVSStatusListen;
