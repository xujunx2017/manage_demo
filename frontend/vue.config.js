const {
	defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false, //关闭eslint校验
	devServer: {
		// host:'0.0.0.0', //域名
		port:8080, //端口
		open: false, // 在服务器启动时自动在浏览器中打开应用程序
		proxy: {
			'/api': { ///api 表示拦截以/api开头的请求路径
				target: 'http://10.94.24.16:8080', // 目标服务器地址
				changeOrigin: true, // 是否改变源地址
				secure: false,
				pathRewrite: {
					'/api': '' //重写地址
				}
			}
		}
	}
})