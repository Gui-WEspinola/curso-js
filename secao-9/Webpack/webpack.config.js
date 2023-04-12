const path = require('path'); // Node usa o CommonJS como o sistema de módulos, diferente do ES6

module.exports = { // configuração do webpack
    mode: 'development', //
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
};