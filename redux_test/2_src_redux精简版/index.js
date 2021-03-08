import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))

// 只要redux里面的状态发生变化，整个App都要重新调用render，且App下的所有子组件也都要掉render
store.subscribe(()=>{
	ReactDOM.render(<App/>,document.getElementById('root'))
})