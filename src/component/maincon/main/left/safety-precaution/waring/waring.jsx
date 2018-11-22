import React, {Component} from 'react';
import './waring.scss';
class Waring extends Component {
    state={
        data:[
            {
                num:0,
                text:"紧急事件"
            },
            {
                num:0,
                text:"漏洞"
            },
            {
                num:0,
                text:"攻击"
            },
        ]
    }
    render() {
        return (
            <div className="warning">
                <h3>安全预警</h3>
                <div className="thing">
                    {
                        this.state.data.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <span className="num">{item.num}</span>
                                    <span>{item.text}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Waring;