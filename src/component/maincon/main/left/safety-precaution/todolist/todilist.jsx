import React, {Component} from 'react';
import './todolist.scss';
import {Link} from "react-router-dom";
class Todolist extends Component {
    render() {
        // console.log(this.props.todolist);
        return (
            <div className="todolist">
                <h3>待办事项</h3>
                <div className="thing">
                    {
                        this.props.todolist.map((item,index)=>{
                            return(
                                <Link key={index} to={"/"}>
                                    {item.title}
                                    <span>{item.num}</span>
                                </Link>
                            )
                        })
                    }



                </div>
                
            </div>
        );
    }
}

export default Todolist ;