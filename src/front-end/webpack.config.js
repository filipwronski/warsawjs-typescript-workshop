const path = require('path');

const entry = path.join(__dirname, 'main.ts');
console.log({ entry });
const dist = path.join(__dirname, '..', '..', 'dist');
console.log({ dist });

module.exports = {
    entry: entry,

    output: {
        path: dist,
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: (/\.ts$/),
                use: 'ts-loader'
            }
        ]
    }
};