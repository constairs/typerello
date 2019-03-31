'use strict'

process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

const PORT = process.env.PORT || 4004
const HOST = process.env.HOST || 'localhost'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const paths = require('./paths')

const publicPath = '/'

module.exports = mode => {
	return {
		mode: mode || 'none',
		devtool: mode === 'development' ? 'cheap-module-source-map' : false,
		entry: ['@babel/polyfill', paths.indexSrc],
		output: {
			filename: 'js/bundle.[hash:10].js',
			publicPath,
		},
		devServer: {
			host: HOST,
			port: PORT,
			contentBase: paths.distSrc,
			compress: true,
			hot: true,
			historyApiFallback: true,
		},
		module: {
			strictExportPresence: true,
			rules: [
				{
					test: [/\.jpe?g$/, /\.gif$/],
					loader: require.resolve('url-loader'),
					options: {
						limit: 10000,
						name: 'assets/[name].[hash:10].[ext]',
					},
				},
				{
					test: [/\.ico$/],
					loader: require.resolve('file-loader'),
					options: {
						name: 'assets/[name].[hash:10].[ext]',
					},
				},
				{
					test: [/\.js$/, /\.jsx$/, /\.ts$/, /\.tsx$/],
					include: paths.appSrc,
					loader: require.resolve('babel-loader'),
					options: {
						cacheDirectory: true,
					},
				},
				{
					test: /\.(png|woff|woff2|eot|ttf|svg)$/,
					loader: 'url-loader?limit=100000',
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'TS project',
				inject: true,
				filename: 'index.html',
				template: paths.htmlSrc,
			}),
		],
		resolve: {
			extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
		},
		performance: {
			hints: mode === 'development' ? false : 'warning',
		},
	}
}
