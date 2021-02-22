export const { createProxyMiddleware } = require('http-proxy-middleware');
console.log(321312)
module.exports = function(app:any) {
    app.use(createProxyMiddleware("/devApi",{
        target:"http://test.api.webtax.com.cn/mp/",
        changeOrigin:true,
        pathRewrite:{
            "^/devApi":""
        }
    }))
}