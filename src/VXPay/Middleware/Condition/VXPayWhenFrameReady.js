/**
 * @param {VXPay} vxpay
 * @return {Promise<VXPay>}
 * @constructor
 */
const VXPayWhenFrameReady = (vxpay) => {
	return new Promise(resolve => {
		// do we have the token already?
		if (vxpay.state.isFrameReady) {
			resolve(vxpay);
		} else {
			// otherwise - wait for it
			vxpay.hooks.onIframeReady(() => resolve(vxpay));
		}

		return vxpay;
	});
};

export default VXPayWhenFrameReady;
