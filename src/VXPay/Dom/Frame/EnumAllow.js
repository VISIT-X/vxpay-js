const EnumAllow = {
	MICROPHONE: 'microphone',
	CAMERA:     'camera',

	/**
	 * @return {[string, string]}
	 */
	getDefaults: () => [
		EnumAllow.CAMERA,
		EnumAllow.MICROPHONE,
	]
};

export default EnumAllow;
