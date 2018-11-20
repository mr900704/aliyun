import React, {Component} from 'react';
import './product-information.scss';
import {Link} from "react-router-dom";
class Pnformation extends Component {
    render() {
        console.log(this.props.list);
        return (

            <div className={this.props.list.cla}>
                {/*1、标题*/}
                <div className="i-title">{this.props.list.title}</div>
                {/*2、】内容*/}
                <div className="i-content">
                    {this.props.list.text.map((item,index)=>{
                        return(
                            <p key={index}><b>{item.bold}</b>{item.msg}</p>
                        )
                    })}

                    {/*更多*/}
                    <Link to={"/"}>{this.props.list.more}</Link>
                </div>


            </div>
        );
    }
}

export default Pnformation;