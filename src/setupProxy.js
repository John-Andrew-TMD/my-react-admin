const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy("/devApi",{
        target:"http://test.api.webtax.com.cn/mp/",
        changeOrigin:true,
        pathRewrite:{
            "^/devApi":""
        }
    }))
}