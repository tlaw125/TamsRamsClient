const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env, argv) => {

    return {
        entry: "./src/index.jsx",
        devtool: argv.mode === 'production' ? "inline-source-map" : false,
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                },
                {
                    test: /.(css|less)$/,
                    use: [ argv.mode === 'production' ? MiniCssExtractPlugin.loader : 
                        { 
                            loader: 'style-loader',
                        },  
                        { 
                            loader: 'css-loader',
                        },
                        { 
                            loader: 'less-loader', 
                            options: { 
                                lessOptions: {
                                    javascriptEnabled: true 
                                },
                            }, 
                        },
                    ],
                },
                {
                    test: /\.html$/,
                    use: "html-loader"
                },
                {
                    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                    use: ['file-loader?name=[name].[ext]&publicPath=/&outputPath=images/',
                    'image-webpack-loader']}
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        devServer: {
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./public/index.html",
                filename: "./index.html",
                favicon: "./public/favicon.ico"
            }),
            new MiniCssExtractPlugin({
                filename: "bundle.css"
            })
        ]
    };
};