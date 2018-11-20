import React, {Component} from 'react';
import './administrative-assistant.scss';
import {Link} from "react-router-dom";
import Activity from "./a-content/a-content";
class Aassistant extends Component {
    state={
        data:[
            {
                icon:"icon-xinxi2",
                title:"2018广东云覀大会",
                text:"11月22日广州南丰朗豪酒店，报名进行中",
                apply:"立即报名"
            },{
                icon:"icon-icon-test",
                title:"推荐好友送云服务器",
                text:"邀请好友7.1折起购短信包，即可获赠云服务器",
                apply:"立即前往"
            },{
                icon:"icon-gengduo3",
                title:"网站建设",
                text:"提供高性价比的自营建站产品，不满意退款",
                apply:"立即前往"
            }
        ]
    }
    render() {
        return (
            <div className="Aassistant ">
                {/*1、标题部分*/}
                <div className="title">
                    <h4>管理助手</h4>
                    <Link to={"/"}>查看更多</Link>
                </div>
                {/*2内容*/}
                <div className="a-content">
                    {/*2.1、活动*/}
                    {
                        this.state.data.map((item,index)=>{
                            return(
                                <Activity
                                key={index}
                                list={item}
                                >
                                </Activity>
                            )
                        })
                    }

                    {/*<Activity></Activity>*/}
                    {/*<Activity></Activity>*/}

                </div>
                
            </div>
        );
    }
}

export default Aassistant ;