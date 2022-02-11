const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      TerserPlugin = require('terser-webpack-plugin'),
      sources = ['./src/main.js'];

module.exports = {
	entry: {
		'vxpay': sources,
		'vxpay.min': sources,
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		library: 'VX',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	devServer: {
		static: {
			directory: path.join(__dirname, './docs'),
		},
		hot: true
	},
	stats: {
		colors: true
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
		moduleIds: 'named'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: './docs/demo.html',
			template: './docs/demo.html'
		})
	]
};
