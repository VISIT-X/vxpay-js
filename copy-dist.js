const fs = require('fs'),
      path = require('path'),
      src = path.resolve(__dirname, './build/'),
      dest = path.resolve(__dirname, './docs/'),
      files = ['vxpay.min.js', 'vxpay.js'];

files.forEach((file) => {
	const from = path.resolve(src, file),
	      to = path.resolve(dest, file);

	fs.createReadStream(from).pipe(fs.createWriteStream(to));
	console.log('> Copied ' + file + ' from ' + src + ' to ' + dest + '.');
});

fs.createReadStream(path.resolve(__dirname, './build/vxpay.js')).pipe(fs.createWriteStream(path.resolve(__dirname, './vxpay.js')));
console.log('> Copied `vxpay.js` from ./build/ to ./');

fs.createReadStream(path.resolve(__dirname, './docs/README.md')).pipe(fs.createWriteStream(path.resolve(__dirname, './README.md')));
console.log('> Copied `vxpay.js` from ./docs/README.md to ./README.md');

console.log('> Done.');

