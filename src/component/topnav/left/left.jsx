import React, {Component} from 'react';
import './left.scss';
import {NavLink,Link} from "react-router-dom";
class Left extends Component {
    constructor(){
        super()
        this.state={
            onoff0:false,
            onoff1:false,
        }
    }
    //1、管理控制台的鼠标经过时间
    handleMouseEnter=(num,e)=>{
        switch (num){
            case 0:
                this.setState({onoff0:true});
                break;
            case 1:
                this.setState({onoff1:true});
                break;

        }

    }
    //1、管理控制台的鼠标离开事件
    handleMouseLeave=(num,e)=> {
        switch (num) {
            case 0:
                this.setState({onoff0:false});
                break;
            case 1:
                this.setState({onoff1:false});
                break;

        }
    }
    render() {
        let {onoff0,onoff1}=this.state

        return (
                // 左边
                <div className="left">
                    {/*1、管理控制台 鼠标经过样式没有做*/}
                    <div className="supervisor-console">
                        <NavLink
                            exact
                            data-onoff={onoff0}
                            className={onoff0?"iconfont icon-console hoverbc":"iconfont icon-console"}
                            to="/"
                            onMouseEnter={this.handleMouseEnter.bind(this,0)}
                            onMouseLeave={this.handleMouseLeave.bind(this,0)}

                        >
                        </NavLink>
                        <NavLink
                            exact
                            className={"control"}
                            className={onoff1?"control hoverbc":"control"}
                            to="/"
                            onMouseEnter={this.handleMouseEnter.bind(this,1)}
                            onMouseLeave={this.handleMouseLeave.bind(this,1)}
                            data-onoff={onoff1}
                        >
                            管理控制台
                        </NavLink>
                    </div>

                    {/*2、全球*/}
                    <div className="global">
                        <span className="iconfont icon-55"></span>
                        <span>全球</span>

                    </div>
                </div>

        );
    }
}

export default Left;