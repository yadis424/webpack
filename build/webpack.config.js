const { merge } = require('webpack-merge')

const config = process.NODE_ENV === 'productoin' ? require('./webpack.pro') : require('./webpack.dev')
const base = require('./webpack.base')

module.exports = merge(base, config)