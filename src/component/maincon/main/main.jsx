import React, {Component} from 'react';
import '../../../publicstyle/clearinitstyle.scss';
import './main.scss';
import Notice from "./notice/notice";
import Aassistant from "./administrative-assistant/administrative-assistant";
import Pnformation from "./product-information/product-information";
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

                </div>
                {/*右边*/}
                <div className="mright">
                    {/*1公告*/}
                    <Notice></Notice>

                    {/*2管理助手*/}
                    <Aassistant></Aassistant>
                    {/*3新品快报*/}
                    {/*4安全情报*/}

                    {this.state.data.map((item,index)=>{
                        console.log(index);
                        return(
                                <Pnformation
                                    key={index}
                                    list={item}
                                ></Pnformation>
                            )
                        })}



                    {/*<div className="safe-information"></div>*/}
                    {/*5定植咨询*/}
                    <div className="customized-product"></div>
                    {/*6二维码*/}
                    <div className="qrcode"></div>
                </div>

            </div>
        );
    }
}

export default Main;