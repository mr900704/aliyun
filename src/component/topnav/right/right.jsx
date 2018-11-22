import React, {Component} from 'react';
// import {NavLink,Link} from "react-router-dom";
import './right.scss';
import Usermsg from "./usermsg/usermsg";
import Nav from "./nav/nav";
import Search from "./search/search";
class Right extends Component {

    render() {
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