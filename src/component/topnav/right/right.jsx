import React, {Component} from 'react';
import {NavLink,Link} from "react-router-dom";
import './right.scss';
import Usermsg from "./usermsg/usermsg";
import Nav from "./nav/nav";
import Search from "./search/search";
class Right extends Component {
    constructor(){
        super()
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
                break;
            case 3:
                this.setState({onoff3:true});
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
                break;
            case 3:
                this.setState({onoff3:false});
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
            <div className="right">
                {/*1、用户信息*/}
                <Usermsg></Usermsg>
                {/*2、导航*/}
                <Nav></Nav>
                {/*3、搜索*/}
                <Search></Search>

            </div>
        );
    }
}

export default Right;