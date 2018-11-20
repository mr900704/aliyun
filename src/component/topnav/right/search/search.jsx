import React, {Component} from 'react';
import './search.scss';
class Search extends Component {
    //获取到光标
    handlemouseenter=(e)=>{
            this.refs.search.getElementsByTagName("input")[0].setAttribute("style","width:300px;outline:1px green solid")
    }
    handlemouseleave=(e)=>{
        this.refs.search.getElementsByTagName("input")[0].setAttribute("style","width:200px;outline:0")
    }
    render() {
        return (
            <div className="search"
                 onMouseEnter={this.handlemouseenter}
                 onMouseLeave={this.handlemouseleave}
                 ref={"search"}
            >
                <input type="text" placeholder="搜索" />
                <span className="iconfont icon-sousuo3"></span>
                <span className="line"></span>
            </div>
        );
    }
}

export default Search;