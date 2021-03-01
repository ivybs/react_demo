import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import {Route,Switch,Redirect} from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
	render() {
		return (
				<div>
					<h3>我是Home的内容</h3>
					<div>
						<ul className="nav nav-tabs">
							<li>
								<MyNavLink to="/home/news">News</MyNavLink>
							</li>
							<li>
								<MyNavLink to="/home/message">Message</MyNavLink>
							</li>
						</ul>
						{/* 注册路由 */}
						<Switch>							
							{/** 在app.js中已经先注册过第一部分的路由了 
							 * 所以在执行/home/news路径时：
							 * 		首先会去app.js中匹配/home,就会渲染Home组件
							 * 		然后才会再来这里匹配/home/new路径，接着选在News组件
							 * 	只有这样，才能保证不会丢失Home组件，并且在Home组件中加载News组件
							 * 
							 * 这个时候就会存在一个问题，当app.js中的route开启了严格模式之后，
							 * 就加载不到Home组件，就会直接去加载兜底的界面（redirect）
							 * 
							 * 如果在这里只写/news 不写/home，同样的到底，首先他会去先注册的第一部分路由
							 * 在路由匹配时发现没有/news，匹配不到。此时还是会直接去加载兜底的界面（redirect）
							 * 
							*/}
							<Route path="/home/news" component={News}/>
							<Route path="/home/message" component={Message}/>
							{/**除了起到兜底的作用 还可以是首次渲染home组件中，默认选中的标签*/}
							<Redirect to="/home/news"/>
						</Switch>
					</div>
				</div>
			)
	}
}
