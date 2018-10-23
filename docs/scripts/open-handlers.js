// a bunch of options example
let options = {
	'conversion': {
		'type':    'Contest',
		'signup':  {
			'headerHeadlineMobile':    'Deutschlands meistgesuchter Amateur:',
			'headerSubheadlineMobile': 'Lucy-Cat ist jetzt NEU auf VISIT-X!',
			'headerLogoLeft':          {
				'url':    'https://www.visit-x.net/VXPAY-V3/modal_v2/img/logo.svg',
				'width':  130,
				'height': 28
			},
			'headerLogoRight':         {
				'url':    'https://www.visit-x.net/assets/img/teaser/lucy-cat/lucycat_logo.png',
				'width':  120,
				'height': 59
			},
			'headerLogoWidth':         '500',
			'background':              'https://www.visit-x.net/assets/img/teaser/lucy-cat/signup_lucycat_image.jpg',
			'backgroundMobile':        'https://www.visit-x.net/assets/img/teaser/lucy-cat/mob_image_lucycat.jpg',
			'points':                  [
				'Deutschlands meistgesuchter Amateur',
				'NEU auf VISIT-X',
				'über 400 private Videos',
				'HD & Ton Webcam'
			]
		},
		'payment': {
			'logoRight':  {
				'url':    'https://www.visit-x.net/assets/img/teaser/lucy-cat/payment_lucycat_logos.png',
				'width':  98,
				'height': 91
			},
			'background': 'https://www.visit-x.net/assets/img/teaser/lucy-cat/payment_bgimage.jpg',
			'points':     [
				'Deutschlands meistgesuchter Amateur',
				'NEU auf VISIT-X',
				'über 400 private Videos',
				'HD & Ton Webcam'
			]
		}
	}
};

document.addEventListener('DOMContentLoaded', function() {
	/** Open login click handler */
	document.getElementById('open-login').onclick = function(e) {
		console.log('Open login ...');
		e.preventDefault();
		vxpay.openLogin(options).then(function() {
			console.log('Login opened');
		});
	};

	/** Open registration */
	document.getElementById('open-signup').onclick = function(e) {
		e.preventDefault();
		vxpay.openSignUp(options).then(function() {
			console.log('SignUp opened');
		});
	};

	/** Open registration or login */
	document.getElementById('open-login-or-signup').onclick = function(e) {
		e.preventDefault();
		vxpay.openSignUpOrLogin(options).then(function() {
			console.log('Opened');
		});
	};

	/** Password reset */
	document.getElementById('reset-password').onclick = function(e) {
		e.preventDefault();
		vxpay.resetPassword(options).then(function() {
			console.log('Opened password reset');
		});
	};

	/** Password lost */
	document.getElementById('lost-password').onclick = function(e) {
		e.preventDefault();
		vxpay.lostPassword(options).then(function() {
			console.log('Opened password lost');
		});
	};

	document.getElementById('open-voice-call').onclick = function(e) {
		e.preventDefault();
		vxpay.openVoiceCall(options).then(function() {
			console.log('Open voice call');
		});
	};

	document.getElementById('open-payment').onclick = function(e) {
		e.preventDefault();
		vxpay.openPayment(options).then(function() {
			console.log('Open payment');
		});
	};

	document.getElementById('open-limited').onclick = function(e) {
		e.preventDefault();
		vxpay.limitPayment().then(function() {
			console.log('Open payment (limited)');
		});
	};

	document.getElementById('open-limited').onclick = function(e) {
		e.preventDefault();
		vxpay.limitPayment().then(function() {
			console.log('Open payment (limited)');
		});
	};

	document.getElementById('open-abo').onclick = function(e) {
		e.preventDefault();
		vxpay.openAbo(options).then(function() {
			console.log('Open abo');
		});
	};

	document.getElementById('open-abo-trial').onclick = function(e) {
		e.preventDefault();
		vxpay.vipAboTrial(options).then(function() {
			console.log('Open abo (trial)');
		});
	};

	document.getElementById('open-abo-premium').onclick = function(e) {
		e.preventDefault();
		vxpay.premiumAbo(options).then(function() {
			console.log('Open abo (premium)');
		});
	};

	document.getElementById('open-settings').onclick = function(e) {
		e.preventDefault();
		vxpay.openSettings().then(function() {
			console.log('Open settings');
		});
	};

	document.getElementById('open-avs').onclick = function(e) {
		e.preventDefault();
		vxpay.openAVS(options).then(function() {
			console.log('Open age verification');
		});
	};

	document.getElementById('open-promo-code').onclick = function(e) {
		e.preventDefault();
		vxpay.openPromoCode(options).then(function() {
			console.log('Open promo code');
		});
	};

	document.getElementById('open-scratch-card').onclick = function(e) {
		e.preventDefault();
		vxpay.openScratchCard(options).then(function() {
			console.log('Open scratch card');
		});
	};

	document.getElementById('open-one-click').onclick = function(e) {
		e.preventDefault();
		vxpay.openOneClick(options).then(function() {
			console.log('Open one click');
		});
	};

	document.getElementById('open-auto-recharge').onclick = function(e) {
		e.preventDefault();
		vxpay.openAutoReCharge().then(function() {
			console.log('Open one auto re-charge');
		});
	};

	document.getElementById('open-balance').onclick = function(e) {
		e.preventDefault();
		vxpay.openBalance(options).then(function() {
			console.log('Open `open balance`');
		});
	};
});