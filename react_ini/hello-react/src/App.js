import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	//状态在哪里，操作状态的方法就在哪里

	//初始化状态
	state = {todos:[
		{id:'001',name:'吃饭',done:true},
		{id:'002',name:'睡觉',done:true},
		{id:'003',name:'打代码',done:false},
		{id:'004',name:'逛街',done:false}
	]}

	//父组件App和子组件Header之间进行数据的交换
	// 当子组件想要给父组件传递数据的时候 只需要给props传递一个函数 而这个函数又是定义在父组件中的
	// 子组件就可以通过props调用方法，并且将想要传递的数据通过函数的参数的形式传递
	// addTodo用于添加一个todo，接收的参数是todo对象
	addTodo = (todoObj) =>{
		//获取原来todos
		const {todos} = this.state
		//追加一个todo
		const newTodos = [todoObj,...todos]
		this.setState({todos:newTodos})
	}
	/**
	 * 
	 * <script type="text/javascript" 》
			let obj = {a:1,b:2}
			1et obj2 = {...obj,b:3}
			console.1og(obj2);
		</script>
		这里的{...obj} 是指将obj复制给obj2. 
		然后在复制完成后的obj2，再将b修改为3
	 */

	 // 用户更新todo对象
	updateTodo = (id,done) => {
		const {todos} = this.state
		const newTodos = todos.map((todoObj) =>{
			if(todoObj.id === id){
				return {...todoObj,done}
			}else return todoObj

		})
		this.setState({todos:newTodos})

	}

	// 用户删除一个todo
	deleteTodo = (id) => {
		const {todos} = this.state
		const newTodos = todos.filter((todoObj) =>{
			// todos里面的每个对象的id不等于我给出的id，才会返回，否则就被过滤了
			return todoObj.id !== id
		})
		// 更新状态
		this.setState({todos:newTodos})
	}

	checkAll = (done) =>{
		const {todos} = this.state
		//将状态都变成true
		const newTodos = todos.map((todoObj) => {
			return {...todoObj,done:done}
		})
		// 更新状态
		this.setState({todos:newTodos})
	}

	//用于清除所有已经完成的
	clearAllDone = () => {
		const {todos} = this.state
		const newTodo = todos.filter((todoObj) => {
			if(todoObj.done !== true){
				return todoObj
			}
		})
		this.setState({todos:newTodo})
	}

	render() {
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
					<Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
				</div>
			</div>
		)
	}
}
