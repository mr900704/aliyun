import React, {Component} from 'react';
import './resources.scss';
import {Link} from "react-router-dom";
import CList from "./c-list/c-list";
class Resources extends Component {
    state={
        list:[
            {
                h4:"弹性计算",
                text:["云服务器 ECS 1"]
            },
            {
                h4:"网络",
                text:["专有网络VPC","CDN"]
            },
            {
                h4:"应用服务",
                text:["云效"]
            },
            {
                h4:"数据库",
                text:[
                    "云数据库 HybridDB for MySQL",
                    "云数据库 HBase版",
                    "云数据库 HybridDB for PostgreSQL",
                    "数据传输服务 DTS"
                ]
            },
            {
                h4:"分析",
                text:[
                    "云数据库 HybridDB for PostgreSQL",
                ]
            },
            {
                h4:"存储与CDN",
                text:[
                    "CDN",
                ]
            },
            {
                h4:"监控与管理",
                text:[
                    "云监控",
                ]
            },
            {
                h4:"域名与网站(万网)",
                text:[
                    "域名",
                    "云解析 DNS"
                ]
            },
        ]
    }
    render() {
        return (
            <div className="resources">
                {/*1、内容区域*/}
                <CList
                    data={this.state.list}
                />

                {/*2展开更多*/}
                <div className="more">
                    展开更多产品
                    <span className="iconfont icon-xiala"></span>
                </div>
                
            </div>
        );
    }
}

export default  Resources;