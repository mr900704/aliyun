import React, {Component} from 'react';
import './lastuser.scss';
import {Link} from "react-router-dom";
import Title from "./title/title";
class Lastuser extends Component {
    state={
        data:["访问控制","云服务器ESC","云数据库RDS版","对象存储OSS"],
        title:{
            h3:"最近使用的产品",
            text:"操作日志",
            icon:"icon-iconfont74"
        }
    }
    render() {
        return (
            <div className="lastuser">
                {/*1、标题部分*/}
                <Title
                    title={this.state.title}
                />
                    <div className="thing">
                        {
                            this.state.data.map((item,index)=>{
                                return(
                                    <Link key={index} to="/">{item}</Link>
                                )
                            })
                        }


                    </div>

                
            </div>

        );
    }
}

export default Lastuser;