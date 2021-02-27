import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件

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
							{/*
							// navlink主要是起到了一个点击高亮 即在className中添加了active字段
								正好bootstrap又实现了对类名中又active字段的dom高亮的样式

								如果不是使用bootstrap，那么就可以通过使用activeClassName字段，来定义
								点击后className中添加的字段 如activeClassName=“atguigu"
								这个时候点击后 className="list-group-item atguigu"
							*/}
							<NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
							<NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
