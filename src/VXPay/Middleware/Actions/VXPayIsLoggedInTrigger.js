import VXPayIsLoggedInActionMessage   from './../../Message/Actions/VXPayIsLoggedInActionMessage';

/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @constructor
 */
const VXPayIsLoggedInTrigger = (vxpay, resolve, reject) => {
	vxpay.logger.log('VXPayIsLoggedInTrigger()');

	try {
		// is hook setup?
		if (!vxpay._hooks.hasOnIsLoggedIn(resolve)) {
			vxpay._hooks.onIsLoggedIn(resolve);
		}

		vxpay._paymentFrame.message(new VXPayIsLoggedInActionMessage);
	} catch (err) {
		reject(err);
	}

	return vxpay;
};

export default VXPayIsLoggedInTrigger;
