import React, {Component} from 'react';

class Container extends Component {
    render() {
        return (
            <div className="container">
                {/*我是一个大容器*/}
                {this.props.children}
            </div>
        );
    }
}

export default Container;