import React, {Component} from 'react';
import './safety-precaution.scss';
import Waring from "./waring/waring";
import Fence from "./fence/fence";
import Todolist from "./todolist/todilist";
class SafetyPrecaution extends Component {
    state={
        todolist:[
            {
            num:0,
            title:"工单"
             },
            {
                num:0,
                title:"缴费"
            },
            {
                num:0,
                title:"未支付订单"
            },
        ]
    }
    render() {
        return (
            <div className="safety-precaution">
                {/*1、安全预警*/}
                <div className="safe-left">
                    {/*1.1预警*/}
                    <Waring/>
                    {/*1.2防护*/}
                    <Fence/>
                </div>
                {/*2、待办事项*/}
                <Todolist
                    todolist={this.state.todolist}
                />

            </div>

        );
    }
}

export default SafetyPrecaution;