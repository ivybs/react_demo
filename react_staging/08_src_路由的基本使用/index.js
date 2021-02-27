//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//
import {BrowserRouter} from 'react-router-dom'
//引入App
import App from './App'

//使用BrowserRouter包住app组件下的所有东西，确保再同一个路由器下
ReactDOM.render(
	
	<BrowserRouter> 
		<App/>
	</BrowserRouter>,
	document.getElementById('root')
)