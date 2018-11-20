import React, {Component} from 'react';
import './dropmenv.scss';
import {NavLink} from "react-router-dom";
class Dropmenv extends Component {
    state={
        data2:[
            ["帮助与文档",
                "支持计划" ,
                "专家服务",
                "提交建议",
                "论坛",
                "博客"
            ],
            ["资源管理",
                "财务管理(原企业云)",
                "人员管理",
                "权限管理",
                "分销平台"],
            ["备案服务号申请",
                "备案服务号管理",
                "备案专区",
                "ICP备案系统"],
            ["我的工单",
                "提交工单"],
            ["充值",
                "订单",
                "发票",
                "消费记录",
                "缴费管理",
            "进入费用中心"],
            ["站内消息通知"]

        ]
    }
    render() {
        // console.log(this.props.index);
        return (
            <div className="dropmenvn">
                {
                    this.state.data2[this.props.index].map((item,index)=>{
                        return(
                            <div key={index}>
                                {/*费用和消息没有完成*/}
                                <p to="/" className="menv" key={index}>
                                    {item}
                                </p>
                            </div>


                        )
                    })
                }

            </div>
        );
    }
}

export default Dropmenv;