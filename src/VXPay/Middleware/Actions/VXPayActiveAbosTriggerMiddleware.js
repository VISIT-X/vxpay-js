import VXPayGetActiveAbosMessage from './../../Message/Actions/VXPayGetActiveAbosMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayActiveAbosTriggerMiddleware = (vxpay) => {
	vxpay._paymentFrame.postMessage(new VXPayGetActiveAbosMessage);
	return vxpay;
};

export default VXPayActiveAbosTriggerMiddleware;
