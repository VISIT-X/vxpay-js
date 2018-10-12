const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
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
					loader: "babel-loader"
				}
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, './docs'),
		hot: true
	},
	stats: {
		colors: true
	},
	optimization: {
		minimize: false,
	},
	plugins: [
		new UglifyJsPlugin({
			include: /\.min\.js$/
		}),
		new HtmlWebpackPlugin({
			filename: './docs/demo.html',
			template: './docs/demo.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};
