import {ADD_PERSON} from '../constant'

//初始化人的列表
const initState = [{id:'001',name:'tom',age:18}]

// 纯函数 一类特别的函数，只要同样的输入（实参），必定得到同样的输出（返回）
// s(1)=1 s(2)=2 s(1)=3这样就不是纯函数了
/**
 * 纯函数必须遵守以下一些约束4
		1)不得改写参数数据~ 比如preState=1
		2)不会产生任何副作用,例如网络请求，输入和输出设备
		3)不能调用Date.now()或者Math.random()等不纯的方法
		redux的reducer函数必须是一个纯函数~
*/
export default function personReducer(preState=initState,action){
	// console.log('personReducer@#@#@#');
	const {type,data} = action
	switch (type) {
		case ADD_PERSON: //若是添加一个人
			// 这里的preState需要注意的是这种写法不起作用
			// 原因是在界面渲染的时候，这里进行的是preState的浅比较
			// 浅比较就是比较两个数组的地址值，如果地址值不变那么就判断为preState没有改变
			// 这个时候页面上就不会去重新渲染，就不能在界面中看到被更新了的preState中的值
			// preState.push(data) 往数组后面添加
			// preState.shift(data) 往数组前面添加
			// return preState
			return [data,...preState]
		default:
			return preState
	}
}