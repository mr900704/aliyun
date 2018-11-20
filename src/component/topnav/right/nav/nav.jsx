import React, {Component} from 'react';
import {NavLink ,Link} from "react-router-dom";
import './nav.scss';
import Dropmenv from "./dropmenv";
class Nav extends Component {
    state={
        data:["支持与服务","企业","备案","工单","费用","消息"],
        style:{
            display:"none"
        }

    }
    //鼠标经过
    handlemouseenter=(e)=>{
        if(e.target.tagName=="A"){
            let ele= e.target.getElementsByClassName("menvbox")[0]
            if(ele){
                ele.style.display="block"
            }
        }
        return
    }
    //鼠标移除
    handlemouseleave=(e)=>{
        if(e.target.tagName=="A"){
            let ele= e.target.getElementsByClassName("menvbox")[0]
            if(ele){
                ele.style.display="none"
            }
            return false
        }else {
            return false
        }
    }
    //鼠标经过
    handlemouseenter2=(e)=> {
        e.target.parentNode.style.display="block"
    }
        //鼠标移除
    handlemouseleave2=(e)=>{
        e.target.parentNode.style.display="none"
    }

    render() {
        return (
            <div className="nav">
                {this.state.data.map((item,index)=>{
                    return(
                        <NavLink
                            to="/"
                            key={index}
                            onMouseEnter={this.handlemouseenter}
                            onMouseLeave={this.handlemouseleave}
                        >
                            {item}

                        {/*这是存放数量的盒子*/}
                            <span>0</span>
                            {/*下拉隐藏列表*/}
                            <div className="menvbox"
                                 onMouseEnter={this.handlemouseenter2}
                                 onMouseLeave={this.handlemouseleave2}
                                 ref="mevn"
                            >
                                <Dropmenv

                                    index={index}
                                ></Dropmenv>
                            </div>


                        </NavLink>
                    )
                })}

            </div>
        );
    }
}

export default Nav;