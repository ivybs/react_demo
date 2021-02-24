import React,{Component} from 'react'
// 为了避免不同组件之间的样式冲突，可以用这样的方式来避免
import hello from './index.module.css'

export default class Hello extends Component{
	render(){
		return <h2 className={hello.title}>Hello,React!</h2>
	}
}