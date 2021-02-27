import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'
import Test from './pages/Test'

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

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<MyNavLink to="/about">About</MyNavLink>
							<MyNavLink to="/home">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								{/** 在没有使用switch组件的时候：
								 * 		已经匹配到了/home并拿到home组件之后，他还会继续向下匹配
								 * 	 在使用了switch组件的时候：
								 * 		已经匹配到/home并拿到home组件之后，他就不会再继续向下匹配了
								 * 	注意：继续向下匹配存在效率问题，如两个相同的path的路由中间隔了无数个其他路由
								 * 			此时的继续向下匹配会很花时间
								 *  */}
								<Switch>
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
									<Route path="/home" component={Test}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
