const path = require('path')

module.exports= {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        react: 'react'
    }
}