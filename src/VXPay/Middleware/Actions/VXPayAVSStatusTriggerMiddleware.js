import VXPayGetAVSStatusMessage from './../../Message/Actions/VXPayGetAVSStatusMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayAVSStatusTriggerMiddleware = (vxpay) => {
	vxpay._paymentFrame.postMessage(new VXPayGetAVSStatusMessage);
	return vxpay;
};

export default VXPayAVSStatusTriggerMiddleware;
