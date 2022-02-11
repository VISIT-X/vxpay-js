import VXPayMessage                   from './../VXPayMessage'
import VXPayHasSessionCookieMessage   from './VXPayHasSessionCookieMessage'
import VXPayContentLoadedMessage      from './VXPayContentLoadedMessage'
import VXPayHookMessageFactory        from './Hooks/VXPayHookMessageFactory'
import VXPayIframeReadyMessage        from './VXPayIframeReadyMessage'
import VXPayViewReadyMessage          from './VXPayViewReadyMessage'
import VXPayTransferTokenMessage      from './VXPayTransferTokenMessage'
import VXPayIframeCloseMessage        from './VXPayIframeCloseMessage'
import VXPayIsVisibleMessage          from './VXPayIsVisibleMessage'
import VXPaySuccessMessage            from './VXPaySuccessMessage'
import VXPayIsLoggedInResponseMessage from './Actions/VXPayIsLoggedInResponseMessage'
import VXPayAVSStatusMessage          from './Actions/VXPayAVSStatusMessage'
import VXPayAVSStatus                 from './../Model/VXPayAVSStatus'
import VXPayBalanceMessage            from './Actions/VXPayBalanceMessage'
import VXPayActiveAbosMessage         from './Actions/VXPayActiveAbosMessage'
import VXPayLoggedOutMessage          from './Actions/VXPayLoggedOutMessage'

export default class VXPayMessageFactory {

	/**
	 * @param {string} json
	 * @return {VXPayMessage}
	 * @throws {TypeError|SyntaxError}
	 */
	static fromJson(json = '{}') {
		let message = JSON.parse(json);

		if (!message.type) {
			throw new TypeError('Invalid message format - no type field');
		}

		switch (message.type) {
			case VXPayMessage.T_COOKIE:
				return new VXPayHasSessionCookieMessage(!!message.data);

			case VXPayMessage.T_AVS:
				return new VXPayAVSStatusMessage(VXPayAVSStatus.fromData(message.data));

			case VXPayMessage.T_BALANCE:
				return VXPayBalanceMessage.fromData(message.data);

			case VXPayMessage.T_LOGGED_OUT:
				return new VXPayLoggedOutMessage;

			case VXPayMessage.T_ABOS:
				return VXPayActiveAbosMessage.fromData(message.data);

			case VXPayMessage.T_CONTENT:
				return new VXPayContentLoadedMessage();

			case VXPayMessage.T_IFR_RDY:
				return new VXPayIframeReadyMessage();

			case VXPayMessage.T_HOOK:
				return VXPayHookMessageFactory.fromData(message.data);

			case VXPayMessage.T_VIEW_RDY:
				return new VXPayViewReadyMessage();

			case VXPayMessage.T_IFR_CLOSE:
				return new VXPayIframeCloseMessage(message.data);

			case VXPayMessage.T_VISIBLE:
				return new VXPayIsVisibleMessage();

			case VXPayMessage.T_SUCCESS:
				return new VXPaySuccessMessage(message.data);

			case VXPayMessage.T_IS_LOGGED:
				return new VXPayIsLoggedInResponseMessage(message.data);
		}

		// default
		// transfer token?
		if (message.type.indexOf(VXPayMessage.TT_PREFIX) === 0) {
			const token = message.type.substr(VXPayMessage.TT_PREFIX.length);
			return new VXPayTransferTokenMessage(token);
		}

		// return an unknown message, but still a message
		const unknown = new VXPayMessage(message.type);
		unknown.raw   = json;

		return unknown;
	}
}
