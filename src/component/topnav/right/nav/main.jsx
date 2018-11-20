import React, {Component} from 'react';
import './maincon.scss';
import Leftsidebar from "./maincon/leftsidebar/leftsidebar";
import Main from "./maincon/main/main";
class Maincon extends Component {
    render() {
        return (
            <div className="Maincon">
                {/*2、左导航*/}
                <Leftsidebar/>
                {/*3、主体区*/}
                <Main/>
            </div>
        );
    }
}

export default Maincon;