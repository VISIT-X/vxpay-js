import VXPayGetBalanceMessage from './../../Message/Actions/VXPayGetBalanceMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayBalanceTrigger = (vxpay) => {
	vxpay._paymentFrame.message(new VXPayGetBalanceMessage);
	return vxpay;
};

export default VXPayBalanceTrigger;
