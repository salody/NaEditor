const config = require('./webpack.base');
const glob = require('glob');
const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const isAnalyze = process.env.npm_config_argv.includes('analyze');

const HtmlWebpackPlugins = glob.sync('src/page/*/index.html').map(v => {
    const name = v.replace(/src\/page\/(.*)\/index.html/ig, '$1');
    return new HtmlWebpackPlugin({
        filename: `/page/${name}.html`,
        template: v,
        chunks: [`page/${name}`],
        favicon: path.join(__dirname, '/src/assets/images/bitbug_favicon.ico'),
    })
});


let result = merge(config, {
    mode: "production",
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'thread-loader',
            ]
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
                'postcss-loader',
                'thread-loader',
            ]
        }, ]
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        // new CleanWebpackPlugin(['dist/**.js', 'dist/**.json', 'dist/**.map', 'dist/**.css']),
    ].concat(HtmlWebpackPlugins),
})

if (isAnalyze) {
    result = smp.wrap(result);
}

module.exports = result;