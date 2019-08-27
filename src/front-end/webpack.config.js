const path = require('path');

const entry = path.join(__dirname, 'scripts' ,'main.ts');
console.log({ entry });
const dist = path.join(__dirname, '..', '..', 'dist');
console.log({ dist });

module.exports = {
    entry: entry,
    mode: 'development',

    output: {
        path: dist,
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: (/\.ts$/),
                use: 'ts-loader'
            },
            {
                test: (/\.html$/),
                use: 'file-loader?name=[name].html',
            },
            {
                test: (/\.css$/),
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};