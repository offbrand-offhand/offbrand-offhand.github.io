const path = require('path');

module.exports = {
    entry: './source/app.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
    },
};