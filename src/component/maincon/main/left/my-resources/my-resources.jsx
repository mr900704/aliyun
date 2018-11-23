import React, {Component} from 'react';
import './my-resources.scss';
import {NavLink} from "react-router-dom";
import ContentThing from "./content-thing/content-thing";
import Resources from "./content-thing/resources/resources";
import Consume from "./content-thing/consume/consume";
import Rebate from "./content-thing/rebate/rebate";
class MyResources extends Component {
    state={
        style:{
            display:"none"
        },
        index:0
    }
    //组件加载完成
    componentDidMount(){

        let aNav=document.getElementsByClassName("s-nav");
        aNav[this.state.index].getElementsByClassName("line")[0].style.display="block";
    }
    //每一个导航的点击
    handleClick=(e)=>{
        let index=e.target.getAttribute("data-index");
        let aNav=document.getElementsByClassName("s-nav");
        [...aNav].map((item,index)=>{
            item.getElementsByClassName("line")[0].style.display="none"
        })
        aNav[index].getElementsByClassName("line")[0].style.display="block";


        //获取目标元素下面的元素
        this.setState({
            style:{
                display:"none"
            },
            index
        })
    }
    render() {
        // console.log(this.props.myresources);
        return (
            <div className="my-resources">
                {/*1、导航标题部分*/}
                <div className="title">
                    {this.props.myresources.nav.map((item,index)=>{
                        return(
                            <div
                                className="s-nav"
                                 key={index}
                                 data-index={index}
                                to={"/"}
                                onClick={this.handleClick}
                            >{item}
                                 <div className="line"
                                      style={{display:this.state.style.display}}
                                 ></div>
                            </div>
                        )
                    })}

                </div>
                {/*2、内容部分*/}
                <ContentThing>
                    {/*//根据不同的下标加载不同的组件*/}
                    {
                        (()=>{
                            // console.log(this.state.index);

                            switch (Number(this.state.index)) {
                                case 0:
                                    return  <Resources/>
                                    break;
                                case 1:
                                    return <Consume/>
                                    break;
                                case 2:
                                    return <Rebate/>
                                    break;
                                default:

                            }

                        })()

                    }



                </ContentThing>

            </div>
        );
    }
}

export default MyResources;