import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
	render() {
		return (
			
			<Fragment key={1}>
				{/**当你不需要在这些组件外面再套div的时候，使用react带的fragment就可以了，
				 * 渲染的时候react会直接把fragment去掉
				 * 且fragment标签只接收key这一个prop，其他的prop都没有意义，也会提示warning*/}
				 {/**同样的<>空标签也可以起到外面不再套div的作用，但是<>不允许定义key值 */}
				<input type="text"/>
				<input type="text"/>
			</Fragment>
		)
	}
}
