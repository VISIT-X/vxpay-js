import VXPayIsLoggedInActionMessage   from './../../Message/Actions/VXPayIsLoggedInActionMessage'
import VXPayIsLoggedInResponseMessage from '../../Message/Actions/VXPayIsLoggedInResponseMessage';

/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @constructor
 */
const VXPayIsLoggedInTriggerMiddleware = (vxpay, resolve, reject) => {
	try {
		// when the main frame is loaded - send post message
		if (vxpay.state.isContentLoaded) {
			vxpay.hooks.then(hooks => {
				// is hook setup?
				if (!hooks.hasOnIsLoggedIn(resolve)) {
					hooks.onIsLoggedIn(resolve);
				}
			});

			vxpay.paymentFrame.then(frame => frame.postMessage(new VXPayIsLoggedInActionMessage));
		} else {
			// otherwise - rely on cookie
			vxpay.initHelperFrame()
				.then(vxpay => vxpay.helperFrame.getLoginCookie())
				.then(msg => resolve(new VXPayIsLoggedInResponseMessage(msg.hasCookie)))
				.catch(err => reject(err));
		}
	} catch (err) {
		reject(err);
	}

	return vxpay;
};

export default VXPayIsLoggedInTriggerMiddleware;
