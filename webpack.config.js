const path=require('path')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')

module.exports={
	mode: 'development',
	entry: './src/js/main.js',
	output:{
		filename: 'bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	resolve:{
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.(jpg|jpeg|png|svg)$/,
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					limit: 2048
				}
			},
			{
				test: /\.styl(us)?$/,
    			use: ['style-loader', 'css-loader', 'stylus-loader']
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin()
	]
}
