module.exports = {
    devServer: {
        https: true,
        proxy: {
            '/V1': {
                target: 'https://api.twitter.com/2/',
                changeOrigin: true,
                // pathRewrite: {
                //     '^/V1': ''
                // }
            },
            
        
        }
    }
}