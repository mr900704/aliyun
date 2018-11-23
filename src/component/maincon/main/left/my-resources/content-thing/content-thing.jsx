import React, {Component} from 'react';
import './content-thing.scss';
class ContentThing extends Component {
    render() {
        return (
            <div className="content-thing">
                {this.props.children}
            </div>
        );
    }
}

export default ContentThing;