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

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<MyNavLink to="/about">About</MyNavLink>
							{/* 模糊匹配 /home/a/b 同样也能匹配到/home的 route 
								原理是这样的：
								他会先从/home/a/b按顺序拿出来 home a b
								然后他会去route里面拿出来home
								然后就匹配上了。
								但是如果你是/a/home/b那么就按顺序拿出a home b
								由于a始终匹配不上，所以也就不会匹配上了
								简单总结：
									如果最开始匹配不上，那么就匹配不上
									如果最开始匹配上了，那么就匹配上了
									人家要的东西一个不能少，而且顺序也不能乱
							*/}
							<MyNavLink to="/home/a/b">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									{/**
									 * 当route标签中加入exact属性后，就开启了精准匹配
									 * 只能是精准的了，不能再模糊了
									*/}
									<Route exact path="/about" component={About}/>
									<Route exact path="/home" component={Home}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
