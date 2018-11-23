import React, {Component} from 'react';
import './bc.scss';
import {Link} from "react-router-dom";
class Bc extends Component {
    render() {
        return (
            <div className="bc">
                {/*2.1.1.1图片盒子方具体的内容*/}
                <div className="pic">
                    <img src={require("../../../../../../static/img/maincom/TB1SY_RPXXXXXbkaXXXXXXXXXXX-48-49.png")} alt="logo"/>
                    <div className="line"></div>
                    <div className="text">高性能云服务器</div>
                    <Link to={"/"}>
                        <button>限时2折起</button>
                    </Link>

                </div>

            </div>
        );
    }
}

export default Bc;