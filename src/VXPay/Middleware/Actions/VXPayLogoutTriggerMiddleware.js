import VXPayLogoutMessage from './../../Message/Actions/VXPayLogoutMessage';

let localVxPay   = null;
const sendLogout = (frame) => frame.postMessage(new VXPayLogoutMessage);
const wrapper    = () => localVxPay._paymentFrame.postMessage(new VXPayLogoutMessage);

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayLogoutTriggerMiddleware = (vxpay) => {
	localVxPay = vxpay;

	if (!vxpay.state.hasToken) {
		if (!vxpay._hooks.hasOnTransferToken(wrapper)) {
			vxpay._hooks.onTransferToken(wrapper);
		}
	} else {
		sendLogout(vxpay._paymentFrame);
	}

	return vxpay;
};

export default VXPayLogoutTriggerMiddleware;
