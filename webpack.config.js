var path = require("path");
module.exports = {
    mode: "development",
    entry: ['./src/index.ts'],
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/"
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                loader: 'ts-loader'
            }],
            exclude: /node_modules/
        }]
    },
    optimization: {
        concatenateModules: false
    }
};