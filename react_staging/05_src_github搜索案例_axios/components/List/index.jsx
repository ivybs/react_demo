import React, { Component } from 'react'
import './index.css'

export default class List extends Component {

    render() {
        const {users,isFirst,isLoading,err} = this.props
        return (
            <div>
                {
                    /*jsx里面不能写除了赋值语句之外的 包括if while for switch
                        用不了if怎么办：使用三元表达式
                    */
                    isFirst ? <h2>输入关键字，随后点击搜索</h2>:
                    isLoading ? <h2> Loading </h2>:
                    err ? <h2>{err}</h2> :
                    users.map( (userObj) => {
                        return (
                            <div className="row" key={userObj.id}>
                                <div className="card">
                                    <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                        <img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            </div>
                        ) 
                    })
                }
            </div>
        
        )
    }
}
