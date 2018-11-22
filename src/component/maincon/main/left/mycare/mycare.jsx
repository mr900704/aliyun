import React, {Component} from 'react';
import './mycare.scss';
import Title from "../lastuser/title/title";
import {Link} from "react-router-dom";
class Mycare extends Component {
    state={
        title:{
            h3:"您可能关注的场景",
            text:"查看更多",
            icon:"icon-iconfont74"
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
                    <div className="product-msg"></div>
                    {/*2.2立即购买*/}
                    <div className="now-buy">
                        <Link to={"/"}>
                            <button>立即购买</button>
                        </Link>



                    </div>

                </div>
            </div>

        );
    }
}

export default Mycare;