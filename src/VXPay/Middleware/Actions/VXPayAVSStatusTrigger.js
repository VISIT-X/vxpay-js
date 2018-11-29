import VXPayGetAVSStatusMessage from './../../Message/Actions/VXPayGetAVSStatusMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayAVSStatusTrigger = (vxpay) => {
	vxpay._paymentFrame.message(new VXPayGetAVSStatusMessage);
	return vxpay;
};

export default VXPayAVSStatusTrigger;
