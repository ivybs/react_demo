import React,{Component} from 'react'
import Search from './Search'
import List from './List'

export default class App extends Component{ 

  state = {
    users:[],
    isFirst:true,//是否为第一次打开页面
    isLoading:false,//是否处于加载中
    err:[]//存储请求相关的错误信息
  }
  
  //更新app状态
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        {/*批量传递state中的所有数据*/}
        <List {...this.state}/>
      </div>
    )
  }

  
}
