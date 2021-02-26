// react脚手架在初始化的时候，已经下载好这个库了
const proxy = require('http-proxy-middleware')
// 这个文件不是用于前端的，
// 是react脚手架找到这个文件，并将这个文件加入到webpack的配置中
// 而webpack是使用的node.js的语法
// 所以这个文件只能使用common.js而不能使用es6的语法
module.exports = function(app){
	app.use(
		proxy('/api1',{ //遇见/api1前缀的请求，就会触发该代理配置
			target:'http://localhost:5000', //请求转发给谁
			changeOrigin:true,//控制服务器收到的请求头中Host的值 Host字段表示这这次请求是从哪里发出来的
			pathRewrite:{'^/api1':''} //重写请求路径(必须)
			// 例如 axios中请求的是 http://localhost:3000/api1/student
			// 实际通过代理后，访问的地址是 http://localhost:5000/student
			// 如果axios中请求的是http://lcoalhost:3000/student 那么将会访问当前项目下public目录下的student
			// 由于当前项目下public目录下的student不存在，则会返回404
			// 所以要走代理，一定要访问配置好的前缀请求
		}),
		proxy('/api2',{
			target:'http://localhost:5001',
			changeOrigin:true,
			pathRewrite:{'^/api2':''}
		}),
	)
}