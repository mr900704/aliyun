import React, {Component} from 'react';
import Topnav from "../topnav/topnav";
import Maincon from "../maincon/maincon";
import './homepage.scss';
class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                {/*1、顶部导航*/}
                <Topnav/>
                {/*2主体部分*/}
                <Maincon/>




            </div>
        );
    }
}

export default Homepage;