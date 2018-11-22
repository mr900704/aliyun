import React, {Component} from 'react';
import './InformationAdvice.scss';
import Consultant from "./consultant";
class InformationAdvice extends Component {
    state={
        data:[{
            icon:"icon-custom-service",
            title:"智能顾问",
            text:"智能诊断，秒级解答"
        },
            {
                icon:"icon-jianyi1",
                title:"聆听·建议反馈",
                text:"阿里云不是完美的，我们渴望您的建议"
            },
        ],
        display:"none"
    }
    //鼠标移入和移除
    handlemouseenter=(e)=>{
        this.setState({
            display:"block"
        })
    }
    handlemouseleave=(e)=>{
        this.setState({
            display:"none"
        })
    }

    //close的点击事件
    handleclick=(e)=>{
        this.setState({
            display:"none"
        })
        e.target.parentNode.parentNode.style.display= this.state.display;
    }
    render() {
        return (
            <div className="information-advice"
                 onMouseEnter={this.handlemouseenter}
                 onMouseLeave={this.handlemouseleave}>
                <div className="msg"
                     style={{display:this.state.display}}
                >
                    {/*1、关闭*/}
                    <div className="close">
                        <span className="iconfont icon-x span"
                              onClick={this.handleclick}
                        ></span>
                    </div>
                    {/*2、只能顾问*/}
                    <Consultant
                        list={this.state.data}
                    />

                    {/*3建议 */}
                    <div className="suggest"></div>
                </div>

            </div>
        );
    }
}

export default InformationAdvice;