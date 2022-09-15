const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'production',
    //source maps encouraged in production
    //choose mapping with fairly quick build speed like source-map
    devtool: 'source-map',
});
