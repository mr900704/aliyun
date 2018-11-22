import React, {Component} from 'react';
import './fence.scss';
class Fence extends Component {
    render() {
        return (
            <div className="fence">
                <h3>安全防护</h3>
                <div className="thing">
                    <div>
                        <span>主机安全</span>
                        <span className="num">0</span>
                        <span>件</span>
                    </div>
                    <div>
                        <span>WEB攻击</span>
                        <span className="buy">购买网络安全WAF</span>
                    </div>

                </div>
            </div>
        );
    }
}

export default Fence;