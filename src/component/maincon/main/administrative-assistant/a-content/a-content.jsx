import React, {Component} from 'react';
import './a-content.scss';

class Activity extends Component {

    render() {
        return (
            <div className="activity" >
                {/*2.1.1、左边*/}
                <div className={`a-left iconfont ${this.props.list.icon}` } ></div>
                {/*2.1.2、右边*/}
                <div className="a-right">
                    <h5>{this.props.list.title}</h5>
                    <p>{this.props.list.text}</p>
                    <button>{this.props.list.apply}</button>
                </div>

            </div>
        );
    }
}

export default Activity;