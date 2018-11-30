import VXPayGetActiveAbosMessage from './../../Message/Actions/VXPayGetActiveAbosMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayActiveAbosTrigger = (vxpay) => {
	vxpay._paymentFrame.message(new VXPayGetActiveAbosMessage);
	return vxpay;
};

export default VXPayActiveAbosTrigger;
