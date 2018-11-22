import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './title.scss';
class Title extends Component {
    render() {
        // console.log(this.props.title);
        return (
            <div className="title">
                <h3>{this.props.title.h3}</h3>
                <div>
                    <Link to={"/"}>{this.props.title.text}
                    </Link>
                    <span className={`iconfont ${this.props.title.icon}`}></span>
                </div>
            </div>
        );
    }
}

export default Title;