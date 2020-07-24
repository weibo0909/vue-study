module.exports = {
    devServer: {
        port: '8080',
        open: true,
        proxy: {
            '/api': {
                target: 'https://api.uukit.com',
                secure:false,
                pathRewrite: {'^/api': ''}
            }
        }
    },
    publicPath: './'
};//解决打包白屏问题，可配合routers的mode
