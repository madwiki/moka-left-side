import './MokaLeftSide.scss'
import React, {Component, PropTypes} from 'react'
import CheckTree from './CheckTree';


export default class MokaLeftSide extends Component {
  constructor(props){
    super(props);
    this.clear = this.clear.bind(this);
    this.checkCallback = this.checkCallback.bind(this);
    this.state = {
      signal: null,
      dataWithValue: Object.assign({}, this.props.data)
    };
    this._state = {
      dataWithValue: Object.assign({}, this.props.data)
    };
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
                  <CheckTree data={item} key={index} order={index} signal={this.state.signal} checkCallback={this.checkCallback}/>
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
  checkCallback(newData,order) {
    this._state.dataWithValue[order] = newData;
    this.props.afterChange(this._state.dataWithValue);
  }
}
