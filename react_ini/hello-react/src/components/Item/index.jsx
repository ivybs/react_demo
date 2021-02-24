import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	state={mouse:false}

	// 鼠标移入移出的回调
	handleMouse = (flag)=>{
		return () =>{
			this.setState({mouse:flag})
		}
	}

	// 勾选、取消勾选某一个todo的回调
	handleCheck = (id) => {
		return (event) => {
			console.log(id,event.target.checked)
			this.props.updateTodo(id,event.target.checked)
		}
	}

	//删除一个todo的回调
	handleDelete = (id) =>{
		// 弹窗弹出问用户是否确定删除
		if(window.confirm('确定删除吗？')){
			this.props.deleteTodo(id)
		}
		
	}

	render() {
		const {id,name,done} = this.props
		const mouse = this.state.mouse
		return (
			
			<li onMouseLeave={
				/** 注意了，如果这里的handleMouseLeave需要进行函数参数的传递时 这里的handleMouseLeave函数返回的应该是个函数
				 * 为了解决this指向存在的问题
				 */
				this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}
				style={{backgroundColor:mouse? '#ddd':'white'}}>
				<label>
					{/*checked属性是一个只读属性，修改不起做用
						而defaultChecked相当于是指定一个初始化的时候的默认值
					*/}
					<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
					<span>{name}</span>
				</label>
				<button  onClick={() => {this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse? 'block':'none'}}>删除</button>
			</li>
		)
	}
}