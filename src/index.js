import './MokaLeftSide.scss'
import React, {Component, PropTypes} from 'react'
import CheckTree from './CheckTree';


export default class MokaLeftSide extends Component {
  constructor(props){
    super(props);
    this.clear = this.clear.bind(this);
    this.state = {
      signal: null
    }
  }
  render (){
    const { data, title } = this.props;
    return (
        <div className="moka-left-side">
          <header className="header">
            <h2 className="title">{title}</h2>
            <div className="clear" onClick={this.clear}>清空</div>
          </header>
          <div className="tree-container">
            {data.map((item,index) => {
              return (
                  <CheckTree data={item} key={index} signal={this.state.signal}/>
                );
            })}
          </div>
        </div>
      )
  }
  //clear函数用于往CheckTree里面传'clear'信号
  //因为所有tree都同步响应点击事件，遂可以这么做
  clear() {
    this.setState({
      signal: 'clear'
    },()=>{
      this.setState({
        signal: null
      })
    })
  }
}
