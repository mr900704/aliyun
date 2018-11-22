import React, {Component} from 'react';
import Topnav from "../topnav/topnav";
import Maincon from "../maincon/maincon";
import './homepage.scss';
import InformationAdvice from "../Information and advice/InformationAdvice";
class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                {/*1、顶部导航*/}
                <Topnav/>
                {/*2主体部分*/}
                <Maincon/>
                {/*3固定定位的*/}
                <InformationAdvice/>





            </div>
        );
    }
}

export default Homepage;