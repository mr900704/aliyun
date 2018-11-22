import React, {Component} from 'react';
import '../../../publicstyle/clearinitstyle.scss';
import './main.scss';
import Notice from "./right/notice/notice";
import Aassistant from "./right/administrative-assistant/administrative-assistant";
import Pnformation from "./right/product-information/product-information";
import Cproduct from "./right/customized-product/customized-product";
import Code from "./right/code/code";
import SafetyPrecaution from "./left/safety-precaution/safety-precaution";
import Lastuser from "./left/lastuser/lastuser";
import Mycare from "./left/mycare/mycare";
class Main extends Component {
    state={
        data:[
            {
                cla:"product-information",
                title:"新产品快报",
                text:[
                    {
                        bold:"[新功能]" ,
                        msg:"OSS发布新特性：用户在上传、复制文件时，可"
                    },
                    {
                        bold:"[体验优化]" ,
                        msg:"POLARDB数据库的复杂SQL查询加速功能现"
                    },
                    {
                        bold:"[新产品]" ,
                        msg:"阿里云管控工具-云命令行（公测）发布"
                    },

                ],
                more:"更多"
            },
            {
                cla:"safe-information",
                title:"安全情报",
                text:[
                    {
                        bold:"[公告]" ,
                        msg:"OSS发布新特性：用户在上传、复制文件时，可"
                    },
                    {
                        bold:"[专题]" ,
                        msg:"POLARDB数据库的复杂SQL查询加速功能现"
                    }


                ],
                more:"更多"
            },
        ]
    }
    render() {
        return (
            <div className="main">
                {/*左边*/}
                <div className="mleft">
                    {/*1、安全预警*/}
                    <SafetyPrecaution/>
                    {/*2、最近使用*/}
                    <Lastuser/>
                    {/*3、我的资源*/}
                    <div className="my-resources"></div>
                    {/*4、我的关注*/}
                    <Mycare/>
                </div>
                {/*右边*/}
                <div className="mright">
                    {/*1公告*/}
                    <Notice/>
                    {/*2管理助手*/}
                    <Aassistant/>
                    {/*3新品快报*/}
                    {/*4安全情报*/}
                    {this.state.data.map((item,index)=>{
                        // console.log(index);
                        return(
                                <Pnformation
                                    key={index}
                                    list={item}
                                ></Pnformation>
                            )
                        })}
                    {/*5定植咨询*/}
                    <Cproduct/>
                    {/*6二维码*/}
                    <Code/>
                </div>

            </div>
        );
    }
}

export default Main;