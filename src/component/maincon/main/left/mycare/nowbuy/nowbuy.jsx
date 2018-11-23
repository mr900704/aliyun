import React, {Component} from 'react';
import './nowbuy.scss';
import {Link} from "react-router-dom";
class Nowbuy extends Component {
    render() {
        return (
            <div className="now-buy">
                <Link to={"/"}>立即购买
                </Link>
            </div>
        );
    }
}

export default Nowbuy ;