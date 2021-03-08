import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
	// Provider是用于将store传给容器组件的
	// 不用再去App.js中，调用容器组件的时候，将store以prop的形式传给容器组件了 
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)