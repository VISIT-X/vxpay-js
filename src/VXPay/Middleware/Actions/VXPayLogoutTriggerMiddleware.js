import VXPayLogoutMessage from './../../Message/Actions/VXPayLogoutMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayLogoutTriggerMiddleware = (vxpay) => {
	const caller = (frame) => frame.postMessage(new VXPayLogoutMessage);

	if (!vxpay.state.hasToken) {
		vxpay._hooks.onTransferToken(() => vxpay.paymentFrame.then(caller));
	} else {
		vxpay.paymentFrame.then(caller);
	}

	return vxpay;
};

export default VXPayLogoutTriggerMiddleware;
