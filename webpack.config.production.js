import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';
import WebpackMd5Hash from 'webpack-md5-hash';

export default {
    devtool: 'source-map',
    entry: {
        main: path.resolve(__dirname, 'src/index'),
        vendor: path.resolve(__dirname, 'src/vendor')
    },
    target: 'web',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        // Use CommonsChunkPlugin to create a separate bundle
        // of vendor libraries so that they're cached separately.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        // Generate an external CSS file with a hash in the filename.
        new ExtractTextPlugin('[name].[contenthash].css'),

        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            inject: true,
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            template: 'src/index.html',
            // Properties defined here are available in index.html
            // using htmlWebpackPlugin.options.varName
            trackJSToken: '8d916dc6be9045bc8065d3646ab34cec'

        }),

        // Minify JS
        new UglifyJsPlugin(),

        // hash the files using MD5 so that their names change when the content changes.
        new WebpackMd5Hash()
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
        ]
    }
};
