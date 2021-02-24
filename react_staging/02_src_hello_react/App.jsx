//创建“外壳”组件App
//{Component}在这里并不是解构赋值，而是react这个文件里面又多种暴露形式、
// 而不是只暴露了react。肯定也暴露了Component的。并不是说Component是React中的一个结构
import React,{Component} from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

//创建并暴露App组件
export default class App extends Component{
	render(){
		return (
			<div>
				<Hello/>
				<Welcome/>
			</div>
		)
	}
}
