import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        //获取用户输入
        //const {keyWord} = this.keyWordElemen.value
        // 连续解构赋值后，给value重命名为keyWord
        const {keyWordElemen:{value:keyWord}} = this
        // 解构赋值连续写法的中间过程是没有定义的
        // keyWordElemen undefined
        //console.log(keyWordElemen)
        console.log(keyWord)
        // 发送请求前更新isFirst\isLoading的值
        this.props.updateAppState({isFirst:false,isLoading:true})
        //发送网络请求
        axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`).then(
            response => {
                this.props.updateAppState({users:response.data.items,isLoading:false})
            },
            err => {
                // Objects are not valid as a React child
                // 这里的err是一个对象，对象里面包含了很多属性
                this.props.updateAppState({isLoading:false,err:err.message})
            }
        )
        
    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        {/**这里的param指的是当前的这个节点 */}
                        <input ref = { (params) => {this.keyWordElemen = params}}type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                        <button onClick={this.search}>搜索</button>
                    </div>
                </section>
            </div>
        )
    }
}
