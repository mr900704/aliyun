import React, {Component} from 'react';
import '../../publicstyle/clearinitstyle.scss';
import './topnav.scss';
import Left from "./left/left";
import Right from "./right/right";
import {NavLink,Link} from "react-router-dom";
class Topnav extends Component {

    render() {
        return (
            <div className="topnav">
                {/*左边*/}
                <Left></Left>
                {/*右边*/}
                <Right></Right>

            </div>
        );
    }
}

export default Topnav;