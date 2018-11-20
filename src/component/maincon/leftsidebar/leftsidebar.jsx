import React, {Component} from 'react';
import '../../../publicstyle/clearinitstyle.scss';
import './leftsidebar.scss';
import {Link} from "react-router-dom";
class Leftsidebar extends Component {
    state={
        data:[
            "云数据库","专有网络","对象粗存","CDN","域名","云市场","数据家控太概览","云顿控制台概览"
        ]
    }
    //点击删除时间
    handleclick=(e)=>{
        let elseele=document.getElementsByClassName("elsesever")[0]
        elseele.removeChild(e.target.parentNode)
    }
    render() {
        return (
            <div className="leftsidebar" >
                <div className="leftnav">
                    {/*1产品与服务i*/}
                    <div className="product-service">
                        <span className="iconfont icon-chanpin"></span>
                        <p>产品与服务</p>
                        <span className="iconfont icon-ic_chevron_right_px"></span>

                    </div>
                    {/*2、其他服务*/}
                    <div className="elsesever">
                        {this.state.data.map((item,index)=>{
                            return(
                                <Link to={"/"} key={index}>
                                    <span className="iconfont icon-data_all"></span>
                                    <p>{item}</p>
                                    <span className="iconfont icon-del2" onClick={this.handleclick}></span>
                                    {/*上下调整位置没有完成*/}
                                    <span className="iconfont icon-gengduo1"></span>
                                </Link>
                            )
                        })}

                    </div>


                </div>

            </div>
        );
    }
}

export default Leftsidebar;