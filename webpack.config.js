var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

	entry: './src/index.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')				//This is just breaking the path name down into to sepearate elements of the object. 
	},

	module: {
		rules: [
			{
				test: /\.js$/,								///\.(js|jsx)$/
				exclude: /(node_modules|bower_components)/,
				use: {										//can use 'use' or can use 'loaders'. Proper webpack 2 syntax is to use use and not loaders but you still can use loaders, you just have to use ! separating the loaders instead of an array.   
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react', 'stage-2']
					}
				}
			}, 

			{
				test: /\.css$/,
				use : ['style-loader', 'css-loader', 'less-loader']
			},

			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				loaders: [
				  'file-loader', {
					loader: 'image-webpack-loader',
					options: {
					  gifsicle: {
						interlaced: false,
					  },
					  optipng: {
						optimizationLevel: 7,
					  }
					}
				}]
			}
		]
	},

	devServer: {
  		contentBase: path.join(__dirname, "build"),
  		compress: true,
  		stats: 'errors-only',
  		open: true,
  		openPage: '' 								//openPage is a workaround because the open property was opening to localhost:8080/undefined
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'WebpackAndReactConfig',
			template: './build/index.html',
		}),

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],

	devtool: 'cheap-module-source-map'
	
}