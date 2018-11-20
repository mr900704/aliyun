import React, {Component} from 'react';
import {NavLink,Link} from "react-router-dom";
import './dropmenv1.scss';
class Dropmenv extends Component {
    render() {
        return (
            <div className="dropmenv1">
                {/*1.1.1.1头像用户名*/}
                <div className="username">
                    <img src={require("../../../../static/img/topnav/default_handsome.jpg")} alt="用户头像"/>
                    18302844642
                </div>
                {/*1.1.1.2设置资料*/}
                <div className="set-data">
                    <NavLink className="basics" to="/">基本资料</NavLink>
                    <NavLink className="authentication" to="/">实名认证</NavLink>
                    <NavLink className="safeset" to="/">安全设置</NavLink>
                </div>
                {/*1.1.1.3安全管控*/}
                <div className="security-control">
                    <NavLink to="/">
                        <span className="iconfont icon-safety"></span>
                        安全管控
                    </NavLink>
                    <NavLink to="/">
                        <span className="iconfont icon-yonghufangkeshu"></span>
                        访问控制
                    </NavLink>
                    <NavLink to="/">
                        <span className="iconfont icon-safety"></span>
                        accesskeys
                    </NavLink>
                    <NavLink to="/">
                        <span className="iconfont icon-huiyuan1"></span>
                        会员权益
                    </NavLink>
                    <NavLink to="/">
                        <span className="iconfont icon-icon"></span>
                        会员积分
                    </NavLink>
                    <NavLink to="/">
                        <span className="iconfont icon-tuijian1"></span>
                        推荐返利后台
                    </NavLink>
                </div>
                {/*1.1.1.4退出*/}
                <div className="esc">
                    退出管理控制台
                </div>


            </div>
        );
    }
}

export default Dropmenv;