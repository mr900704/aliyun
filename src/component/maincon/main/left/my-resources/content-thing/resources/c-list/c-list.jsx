import React, {Component} from 'react';
import './c-list.scss';
import {Link} from "react-router-dom";
class CList extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div className="r-content">
                {this.props.data.map((item,index)=>{
                    return(
                        <div className="c-list" key={index}>
                            <h4>{item.h4}</h4>
                            {item.text.map((item,index)=>{
                                return(
                                    <Link to="/"
                                          key={index}
                                    >
                                        {item}
                                    </Link>

                                )
                            })}
                        </div>
                    )
                })}

            </div>
        );
    }
}

export default CList;