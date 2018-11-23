import React, {Component} from 'react';
import './double-eleven.scss';
import {Link} from "react-router-dom";
class DoublEleven extends Component {
    render() {
        return (
            <div className="double-eleven">
                <h2>双十一技术清单</h2>
                <div className="record">阿里云护航双11战场，创造“脉冲”新纪录</div>
                <Link to="/">了解详情</Link>
            </div>
        );
    }
}

export default DoublEleven;