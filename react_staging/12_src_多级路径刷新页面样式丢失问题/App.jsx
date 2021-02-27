import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接
							路由是多级的结构，而且要刷新，刷新后就会导致样式的丢失

							脚手架中的dev-server帮我们起了一个localhost:3000这样的服务，
							其中localhost:3000 就相当于当前项目的public目录
							并且当用户请求了一个没有的资源的时候，会将public目录下的index.html资源返回给用户

							没加/atguigui：
								http://localhost: 3000/css/bootstrap.css
								

							加了/atguigui
								http://localhost: 3000/atguigu/css/bootstrap.css
								由于public下根本没有这个路径下的资源，所以会返回用户index.html文件

							*/}
							<MyNavLink to="/atguigu/about">About</MyNavLink>
							<MyNavLink to="/atguigu/home">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									<Route path="/atguigu/about" component={About}/>
									<Route path="/atguigu/home" component={Home}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
