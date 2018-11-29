class VXPayRoutes {
	/**
	 * @return {String[]}
	 */
	static getAllowed() {
		return [
			VXPayRoutes.LOGIN,
			VXPayRoutes.SIGN_UP,
			VXPayRoutes.PAYMENT,
			VXPayRoutes.ABO,
			VXPayRoutes.AVS,
			VXPayRoutes.PROMOCODE,
			VXPayRoutes.OP_COMP,
			VXPayRoutes.PASS,
			VXPayRoutes.PASS_RESET,
			VXPayRoutes.RECHARGE,
			VXPayRoutes.ONE_CLICK,
			VXPayRoutes.SETTINGS,
			VXPayRoutes.VOICE_CALL,
			VXPayRoutes.LIMIT,
		];
	}
}

VXPayRoutes.LOGIN      = '/login';
VXPayRoutes.SIGN_UP    = '/signup';
VXPayRoutes.PAYMENT    = '/payment';
VXPayRoutes.ABO        = '/abo';
VXPayRoutes.AVS        = '/avs';
VXPayRoutes.PROMOCODE  = '/promocode';
VXPayRoutes.OP_COMP    = '/opcompensation';
VXPayRoutes.PASS       = '/password';
VXPayRoutes.PASS_RESET = '/passwordreset';
VXPayRoutes.RECHARGE   = '/autorecharge';
VXPayRoutes.ONE_CLICK  = '/comfort';
VXPayRoutes.SETTINGS   = '/user/settings';
VXPayRoutes.VOICE_CALL = '/voicecall';
VXPayRoutes.LIMIT      = '/limit';

export default VXPayRoutes;
