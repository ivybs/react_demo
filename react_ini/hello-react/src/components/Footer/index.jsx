import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

	handleCheckAll = (event) => {
		this.props.checkAll(event.target.checked)
	}

	//清除所有已经完成的
	handleClearAllDone = () => {
		this.props.clearAllDone()
	}


	render() {
		const {todos} = this.props
		// 已完成的个数
		// const doneCount = todos.filter((todoObj) => {
		// 	if(todoObj.done === true){
		// 		return todoObj
		// 	}
		// }).length

		// 第一次调用的时候，由于没有返回值，所以使用自己给出的初始值0
		const doneCount = todos.reduce((pre,todoObj)=>{
			return pre + (todoObj.done ? 1 : 0)
		},0)
		console.log(doneCount)
		//总数
		const total = todos.length
		return (
			<div className="todo-footer">
				<label>
					{/*defaultChecked 只在初始化的时候起一次作用 checked只读不写
						若要解决checked只读不写的问题，那么就需要通过写onChange来解决
					*/}
					<input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total ? true:false}/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
		)
	}
}
