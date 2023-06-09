const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		app: "./src/index.ts",
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	devServer: {
		host: "localhost",
		port: 8088,
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new CleanWebpackPlugin(),
	],
};
