const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
      sources = ['babel-polyfill', 'url-polyfill', './src/main.js'];

module.exports = {
	entry: {
		'vxpay': sources,
		'vxpay.min': sources
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		library: 'VX'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
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
	devtool: 'source-map',
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
