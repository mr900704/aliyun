import React, {Component} from 'react';
import './maincon.scss';
import Leftsidebar from "./leftsidebar/leftsidebar";
import Main from "./main/main";
class Maincon extends Component {
    render() {
        return (
            <div className="maincon">
                {/*2、左导航*/}
                <Leftsidebar/>
                {/*3、主体区*/}
                <Main/>
            </div>
        );
    }
}
export default Maincon;

