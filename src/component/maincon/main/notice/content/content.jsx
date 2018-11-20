import React, {Component} from 'react';
import {Link,NavLink} from "react-router-dom";
import './content.scss';
class Content extends Component {
    render() {
        return (
            <div className="content">
                {/*2.1、加载具体内容的组件*/}
                <div className="text">
                    {
                        this.props.list[this.props.index].map((item,index)=>{
                            return(
                                <Link to="/" key={index}>{item}</Link>
                            )
                        })
                    }
                </div>
                {/*2.2更多*/}
                <div className="more">更多</div>
            </div>
        );
    }
}

export default Content;