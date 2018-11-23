import React, {Component} from 'react';
import './content.scss';
class Contentcare extends Component {
    render() {
        console.log(this.props.contentcare);
        return (
            <div className="contentcare">
                <h4>{this.props.contentcare.h4}</h4>
                {
                    this.props.contentcare.text1.map((item,index)=>{
                        return(
                            <div className="text1" key={index}>
                                {item}
                            </div>
                        )
                    })
                }
                <div className="recomend">
                    <h6>{this.props.contentcare.recomend.h6}</h6>
                    {
                        this.props.contentcare.recomend.product.map((item,index)=>{
                            return(
                                <div key={index}>{item.text}
                                    <span className="speed">{item.speed}</span>
                                    <span className="price">{item.price}</span>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        );
    }
}

export default Contentcare;