import React from 'react'
import ReactDOM from 'react-dom'

//类式组件
/* class Demo extends React.Component {

	state = {count:0}

	myRef = React.createRef()

	add = ()=>{
		this.setState(state => ({count:state.count+1}))
	}

	unmount = ()=>{
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	show = ()=>{
		alert(this.myRef.current.value)
	}

	componentDidMount(){
		this.timer = setInterval(()=>{
			this.setState( state => ({count:state.count+1}))
		},1000)
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.myRef}/>
				<h2>当前求和为{this.state.count}</h2>
				<button onClick={this.add}>点我+1</button>
				<button onClick={this.unmount}>卸载组件</button>
				<button onClick={this.show}>点击提示数据</button>
			</div>
		)
	}
} */

function Demo(){
	//console.log('Demo');
	// 这里的0表示的是count的初始值为0
	const [count,setCount] = React.useState(0)
	const myRef = React.useRef()

	// 所以可以看出来useEffect这个函数包含了react中常用的三个生命周期函数
	React.useEffect(
		// 这个大函数相当于didmount和didupdate
		()=>{

		let timer = setInterval(()=>{
			setCount(count => count+1 )
		},1000)
		// 这个函数的返回的函数，相当于willunmount
		return ()=>{
			clearInterval(timer)
		}
	},[])// 如果不加后面的这个数组，这个函数的意思是，只要state发生了变化就会调用一次本函数
	// 也就是说，不加第二个参数，监测的就是所有人
	// 但是如果后面加了一个空数组，那么就是谁也不监测
	// 如果第二个参数是[count],那么他的意思就是需要监测count

	//加的回调
	function add(){
		//setCount(count+1) //第一种写法
		setCount(count => count+1 )
	}

	//提示输入的回调
	function show(){
		alert(myRef.current.value)
	}

	//卸载组件的回调
	function unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	return (
		<div>
			<input type="text" ref={myRef}/>
			<h2>当前求和为：{count}</h2>
			<button onClick={add}>点我+1</button>
			<button onClick={unmount}>卸载组件</button>
			<button onClick={show}>点我提示数据</button>
		</div>
	)
}

export default Demo
