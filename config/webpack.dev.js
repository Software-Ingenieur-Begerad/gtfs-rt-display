//path is used to resolve properly across the OS
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
//merge() calls in the environment-specific configuration to include commons
module.exports = merge(common, {
    //set development mode
    mode: 'development',
    //enable strong source mapping
    devtool: 'inline-source-map',
    devServer: {
	static: path.resolve(__dirname, '../build'),
    },
});
