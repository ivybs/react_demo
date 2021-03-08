import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

	state = {
		hasError:'' //用于标识子组件是否产生错误
	}

	//当Parent的子组件出现报错时候，会触发getDerivedStateFromError调用，并携带错误信息
	// 只能处理生命周期里面产生的错误，具体的每个生命周期 就是按照官方给的 render didmount didupdate等
	// 只能捕获后代组件生命周期产生的错误，只能捕获自己组件产生的错误种 其他组件在合成事件 定时器中产生的错误

	static getDerivedStateFromError(error){
		console.log('@@@',error);
		return {hasError:error}
	}

	// 在组件的渲染过程中，由于子组件出现问题引发了一些错误
	// componentDidCatch(){
	// 	console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决');
	// }

	render() {
		return (
			<div>
				<h2>我是Parent组件</h2>
				{this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child/>}
			</div>
		)
	}
}
