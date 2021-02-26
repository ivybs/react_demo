import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

	search = async()=>{
		//获取用户的输入(连续解构赋值+重命名)
		const {keyWordElement:{value:keyWord}} = this
		//发送请求前通知List更新状态
		PubSub.publish('atguigu',{isFirst:false,isLoading:true})
		//#region 发送网络请求---使用axios发送
		/* axios.get(`/api1/search/users2?q=${keyWord}`).then(
			response => {
				//请求成功后通知List更新状态
				PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
			},
			error => {
				//请求失败后通知App更新状态
				PubSub.publish('atguigu',{isLoading:false,err:error.message})
			}
		) */
		//#endregion
			
		/*关于Promise的知识
		 当位置1 返回的是一个非promise值，那么位置0得到的就是一个成功的Promise，且promise对象中的值就是位置1返回的值，状态是成功的
		 当位置1 返回的是一个promise值，那么位置0得到的promise就是位置0返回的promise对象 状态是成功的
		 当位置1 返回的是一个pending状态的promise，那么位置0得到的promise实例也是一个pending状态的 状态是成功的
		 当位置1 中抛出了异常 那么位置0得到的promise实例状态为失败的 失败的原因就是你抛出的异常

		 位置2 失败的返回值为undefined 他是一个非promise值，所以在位置0会得到成功的promise对象，且值为undefined
				所以此时还会去调用下一个then方法中的成功的方法

		解决方法：在位置4 加一句 return new Promise(()=>{}) 也就是返回了一个初始化状态的promise实例，
				这样他就不会再去执行第二个then了

		
		*/
		//发送网络请求---使用fetch发送（未优化）
		/* fetch(`/api1/search/users2?q=${keyWord}`).位置0 then(
			  response => {
				console.log('联系服务器成功了');
				位置1 return response.json()
			},
			 error => {
				位置2 console.log('联系服务器失败了',error);
				位置4 // return new Promise(()=>{})
			}
		).then(位置3
			response => {console.log('获取数据成功了',response);},
			error => {console.log('获取数据失败了',error);}
		) */

		//发送网络请求---使用fetch发送（优化）
		try {
			const response= await fetch(`/api1/search/users2?q=${keyWord}`)
			const data = await response.json()
			console.log(data);
			PubSub.publish('atguigu',{isLoading:false,users:data.items})
		} catch (error) {
			console.log('请求出错',error);
			PubSub.publish('atguigu',{isLoading:false,err:error.message})
		}
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}

