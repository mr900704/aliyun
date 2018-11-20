import React, {Component} from 'react';
import './notice.scss';
import {NavLink,Link} from "react-router-dom";
import Content from "./content/content";
class Notice extends Component {
    state={
        navdata:["安全公告","升级","安全","备案","其他"],
        data:[
            ["【其他】11月22日视频点播加速服务海外分区域计费调",
                "【升级】11月22日交易和账单管理API升级通知",
                "【升级】11月21日交易和账单管理API升级通知"],
            ["【升级】11月22日交易和账单管理API升级通知",
                "【升级】11月21日交易和账单管理API升级通知",
                "【升级】11月17日商标局服务器维护通知"],
            ["【漏洞预警】最新Apache Struts远程代码执行漏洞(CVE-2",
            "【漏洞预警】Git服务系统 Gogs 和 Gitea 远程命令执行高",
            "【漏洞预警】Gitlab Wiki API 远程代码执行漏洞CVE-201"],
            ["【备案】云虚拟主机产品备案策略调整通知",
            "【备案】关于上海市网站公安备案公告",
            "【备案】轻量应用服务器产品备案策略调整通知"],
            ["【其他】11月22日视频点播加速服务海外分区域计费调整",
            "【其他】高防大连联通和苏州电信机房停服通知",
            "【其他】云盾内容安全商业化通知"]
        ],
        index:0
    }

    componentDidMount(){
        //默认的让第一个显示
        let nav=document.getElementById("nav");
        nav.getElementsByTagName("a")[0].style.borderBottom="2px solid #00c1de";

    }
    //点击时间
    handleclick=(e)=>{
        let index=e.target.getAttribute("data-index");
        this.setState({
            index:e.target.getAttribute("data-index")
        });
        //设置点击的时候的样式
        let aA=e.target.parentNode.getElementsByTagName("a");
        [...aA].map((item,index)=>{
            item.style.borderBottom="0"
        })
        e.target.style.borderBottom="2px solid #00c1de";


    }
    render() {
        return (
            <div className="notice">
                {/*1、导航部分*/}
                <div className="nav" id="nav">
                    {
                        this.state.navdata.map((item,index)=>{
                            return(
                                <a
                                    key={index}
                                    data-index={index}
                                    onClick={this.handleclick}
                                >
                                    {item}
                                </a>
                            )
                        })
                    }

                </div>
                {/*2、加载具体内容的组件*/}
                <Content
                    list={this.state.data}
                    index={this.state.index}
                ></Content>




            </div>
        );
    }
}

export default Notice;