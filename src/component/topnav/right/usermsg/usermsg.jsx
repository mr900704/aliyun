import React, {Component} from 'react';
import './usermsg.scss';
import {NavLink,Link} from "react-router-dom";
import Dropmenv from "./dropmenv";
class Usermsg extends Component {
    constructor(){
        super(...arguments)
        this.state={
            onoff2:false,
            onoff3:false,
            onoff4:false,
            onoff5:false,
            onoff6:false,
            onoff7:false,
            onoff8:false,
            onoff9:false,
        }
    }
    //1、管理控制台的鼠标经过时间
    handleMouseEnter=(num,e)=>{
        switch (num){
            case 2:
                this.setState({onoff2:true});
                this.refs.dropmenv.style.display="block"
                console.log(this.refs.dropmenv);
                break;
            case 3:
                this.setState({onoff3:true});
                this.refs.english.style.display="block"

                break;
            case 4:
                this.setState({onoff4:true});
                break;
            case 5:
                this.setState({onoff5:true});
                break;
            case 6:
                this.setState({onoff6:true});
                break;
            case 7:
                this.setState({onoff7:true});
                break;
            case 8:
                this.setState({onoff8:true});
                break;
            case 9:
                this.setState({onoff9:true});
                break;


        }

    }
    //1、管理控制台的鼠标离开事件
    handleMouseLeave=(num,e)=> {
        switch (num) {
            case 2:
                this.setState({onoff2:false});
                this.refs.dropmenv.style.display="none"
                break;
            case 3:
                this.setState({onoff3:false});
                this.refs.english.style.display="none"

                break;
            case 4:
                this.setState({onoff4:false});
                break;
            case 5:
                this.setState({onoff5:false});
                break;
            case 6:
                this.setState({onoff6:false});
                break;
            case 7:
                this.setState({onoff7:false});
                break;
            case 8:
                this.setState({onoff8:false});
                break;
            case 9:
                this.setState({onoff9:false});
                break;
            default: return;


        }
    }
    render() {
        let {onoff2,onoff3,onoff4,onoff5,onoff6,onoff7,onoff8,onoff9}=this.state

        return (
            <div className="usermsg">
                {/*1.1、用户头像*/}
                <div
                    className={onoff2?"user hoverbc":"user"}
                    onMouseEnter={this.handleMouseEnter.bind(this,2)}
                    onMouseLeave={this.handleMouseLeave.bind(this,2)}
                    data-onoff={onoff2}
                >
                    <img src={require("../../../../static/img/topnav/default_handsome.jpg")} alt="用户头像"/>
                    18302844642
                    {/*1.1.1下拉菜单*/}
                    <div ref="dropmenv" className="box">
                        <Dropmenv></Dropmenv>
                    </div>

                    {/*<div className="dropmenv">*/}
                        {/*/!*1.1.1.1头像用户名*!/*/}
                        {/*<div className="username">*/}
                            {/*<img src={require("../../../../static/img/topnav/default_handsome.jpg")} alt="用户头像"/>*/}
                            {/*18302844642*/}
                        {/*</div>*/}
                        {/*/!*1.1.1.2设置资料*!/*/}
                        {/*<div className="set-data">*/}
                            {/*<NavLink className="basics" to="/">基本资料</NavLink>*/}
                            {/*<NavLink className="authentication" to="/">实名认证</NavLink>*/}
                            {/*<NavLink className="safeset" to="/">安全设置</NavLink>*/}
                        {/*</div>*/}
                        {/*/!*1.1.1.3安全管控*!/*/}
                        {/*<div className="security-control">*/}
                            {/*<NavLink to="/">*/}
                                {/*<span className="iconfont icon-safety"></span>*/}
                                {/*安全管控*/}
                            {/*</NavLink>*/}
                            {/*<NavLink to="/">*/}
                                {/*<span className="iconfont icon-yonghufangkeshu"></span>*/}
                                {/*访问控制*/}
                            {/*</NavLink>*/}
                            {/*<NavLink to="/">*/}
                                {/*<span className="iconfont icon-safety"></span>*/}
                                {/*accesskeys*/}
                            {/*</NavLink>*/}
                            {/*<NavLink to="/">*/}
                                {/*<span className="iconfont icon-huiyuan1"></span>*/}
                                {/*会员权益*/}
                            {/*</NavLink>*/}
                            {/*<NavLink to="/">*/}
                                {/*<span className="iconfont icon-icon"></span>*/}
                                {/*会员积分*/}
                            {/*</NavLink>*/}
                            {/*<NavLink to="/">*/}
                                {/*<span className="iconfont icon-tuijian1"></span>*/}
                                {/*推荐返利后台*/}
                            {/*</NavLink>*/}
                        {/*</div>*/}
                        {/*/!*1.1.1.4退出*!/*/}
                        {/*<div className="esc">*/}
                            {/*退出管理控制台*/}
                        {/*</div>*/}


                    {/*</div>*/}

                </div>
                {/*1.2、语言*/}
                <div
                    className={onoff3?"language hoverbc":"language"}
                    onMouseEnter={this.handleMouseEnter.bind(this,3)}
                    onMouseLeave={this.handleMouseLeave.bind(this,3)}
                >
                    简体中文
                    <div className="english" ref="english">
                        English
                    </div>
                </div>

                {/*1.3购物车*/}
                <div
                    className={onoff4?"shopping-cart iconfont icon-gouwucheman hoverbc":"shopping-cart iconfont icon-gouwucheman"}
                    onMouseEnter={this.handleMouseEnter.bind(this,4)}
                    onMouseLeave={this.handleMouseLeave.bind(this,4)}
                >
                    <span>0</span>
                </div>

            </div>
        );
    }
}

export default Usermsg;