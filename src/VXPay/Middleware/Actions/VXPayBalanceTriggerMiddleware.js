import VXPayGetBalanceMessage from './../../Message/Actions/VXPayGetBalanceMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayBalanceTriggerMiddleware = (vxpay) => {
	vxpay._paymentFrame.postMessage(new VXPayGetBalanceMessage);
	return vxpay;
};

export default VXPayBalanceTriggerMiddleware;
