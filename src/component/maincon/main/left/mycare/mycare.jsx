import React, {Component} from 'react';
import './mycare.scss';
import Title from "../lastuser/title/title";
import {Link} from "react-router-dom";
import Bc from "./bc/bc";
import Contentcare from "./content/content";
import Nowbuy from "./nowbuy/nowbuy";
class Mycare extends Component {
    state={
        title:{
            h3:"您可能关注的场景",
            text:"查看更多",
            icon:"icon-iconfont74"
        },
        contentcare:{
            h4:"低门槛上云捷径，高性能云服务器 0.73元/日起",
            text1:["适合客户：流量适中的建站用户；APP、WEB应用开发用户；",
                "全民云计算采用全新云服务器实例，计算性能较上一代提升20%；默认I/O网络优化，独享IP，业务更快部署！"
            ],
            recomend:{
                h6:"推荐产品：全面降低搭建网站/应用成本",
                product:[
                    {
                        text: "系列III云服务器入门",
                        speed:"1核1G1M带宽",
                        price:"0.73元/日"
                    },
                    {
                        text: "系列III云服务器基础",
                        speed:"1核2G1M带宽",
                        price:"1.2元/日"
                    },
                    {
                        text: "系列III云服务器通用",
                        speed:"2核4G1M带宽",
                        price:"1.5元/日"
                    }

                ]
            }
        }
    }
    render() {
        return (
            <div className="my-care">
                {/*1、标题部分*/}
                <Title
                    title={this.state.title}
                />
                {/*2内容quyu */}
                <div className="thing">
                    {/*2.1产品信息*/}
                    <div className="product-msg">
                        {/*2.1.1背景图片*/}
                        <Bc/>
                        {/*2.1.2内容区域*/}
                        <Contentcare
                            contentcare={this.state.contentcare}
                        />
                    </div>
                    {/*2.2立即购买*/}
                    <Nowbuy/>

                </div>
            </div>

        );
    }
}

export default Mycare;