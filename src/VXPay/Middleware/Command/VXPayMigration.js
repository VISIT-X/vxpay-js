import VXPayFlow   from './../../Config/VXPayFlow'
import VXPayRoutes from '../../Config/VXPayRoutes'

export default class VXPayMigration {
	/**
	 * @param {VXPay} vxpay
	 * @param {Object} flowOptions
	 * @return {VXPay}
	 */
	static open(vxpay, flowOptions = {}) {
		vxpay.logger.log('VXPayMigration::open()');

		vxpay.paymentFrame
			.then(frame => frame
				.sendUpdateParams(Object.assign({}, {'flow': VXPayFlow.MIGRATION}, flowOptions))
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayRoutes.MIGRATION)
				.initSession()
			);
		vxpay.config.route = VXPayRoutes.MIGRATION;

		return vxpay;
	}
}
