import React, {Component} from 'react';
import './consultant.scss';
class Consultant extends Component {
    render() {
        // console.log(this.props.list);
        return (
            this.props.list.map((item,index)=>{
                return(
                    <div className="intelligent-consultant" key={index}>
                        <div className={`i-left iconfont ${item.icon}`}></div>
                        <div className="i-right">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>


                    </div>
                )
            })

        );
    }
}

export default Consultant;