class VXPayFlow {
	/**
	 * @return {String[]}
	 */
	static getAllowed() {
		return [
			VXPayFlow.AVS,
			VXPayFlow.LIMIT,
			VXPayFlow.LOGIN,
			VXPayFlow.CHARGE,
			VXPayFlow.OP_COMPENSATION,
			VXPayFlow.PASSWORD_RESET,
			VXPayFlow.PASSWORD_LOST,
			VXPayFlow.PROMOCODE,
			VXPayFlow.SCRATCH_CARD,
			VXPayFlow.TRIAL_VIP_ABO,
			VXPayFlow.VIP_ABO,
			VXPayFlow.VXTV_ABO,
			VXPayFlow.SETTINGS,
			VXPayFlow.CHANGE_CARD,
			VXPayFlow.CHANGE_LS,
			VXPayFlow.ONE_CLICK,
			VXPayFlow.AUTO_RECHARGE,
			VXPayFlow.SIGNUP,
			VXPayFlow.MIGRATION,
		];
	}

	/**
	 * @return {string}
	 */
	static getDefault() {
		return VXPayFlow.CHARGE;
	}
}

VXPayFlow.AVS             = 'avs';
VXPayFlow.LIMIT           = 'limit';
VXPayFlow.LOGIN           = 'login';
VXPayFlow.SIGNUP          = 'login';
VXPayFlow.CHARGE          = 'moneycharge';
VXPayFlow.OP_COMPENSATION = 'opcompensation';
VXPayFlow.AUTO_RECHARGE   = 'autorecharge';
VXPayFlow.PASSWORD_RESET  = 'pwdreset';
VXPayFlow.PASSWORD_LOST   = 'pwdlost';
VXPayFlow.PROMOCODE       = 'promocode';
VXPayFlow.SCRATCH_CARD    = 'scratchcard';
VXPayFlow.TRIAL_VIP_ABO   = 'trialvipabo';
VXPayFlow.VIP_ABO         = 'vipabo';
VXPayFlow.VXTV_ABO        = 'vxtvabo';
VXPayFlow.SETTINGS        = 'vxsettings';
VXPayFlow.CHANGE_CARD     = 'changecc';
VXPayFlow.CHANGE_LS       = 'changels';
VXPayFlow.ONE_CLICK       = 'oneclick';
VXPayFlow.MIGRATION       = 'migration';

export default VXPayFlow;