import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
	
	render() {
		const {todos,updateTodo,deleteTodo} = this.props
		return (
			<ul className="todo-main">
				{
					
					// 同理，这里的todos前面也不能加this
					todos.map( todo => {
						// return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
						// 等效于
						// 这里就不能写this.updateTodo;因为updateTodo并不是this的，是从其他地方拿来的
						return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
					})
				}
				
			</ul>
		)
	}
}