import VXPayIsLoggedInActionMessage   from './../../Message/Actions/VXPayIsLoggedInActionMessage';

/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @constructor
 */
const VXPayIsLoggedInTriggerMiddleware = (vxpay, resolve, reject) => {
	vxpay.logger.log('VXPayIsLoggedInTriggerMiddleware()');

	try {
		// is hook setup?
		if (!vxpay._hooks.hasOnIsLoggedIn(resolve)) {
			vxpay._hooks.onIsLoggedIn(resolve);
		}

		vxpay._paymentFrame.postMessage(new VXPayIsLoggedInActionMessage);
	} catch (err) {
		reject(err);
	}

	return vxpay;
};

export default VXPayIsLoggedInTriggerMiddleware;
