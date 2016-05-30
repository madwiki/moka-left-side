import './MokaLeftSide.scss'
import React, {Component, PropTypes} from 'react'
import CheckTree from './CheckTree';


export default class MokaLeftSide extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render (){
    const { data, title } = this.props;
    return (
        <div className="moka-left-side">
          <header className="header">
            <h2 className="title">{title}</h2>
            <button className="clear">清空</button>
          </header>
          <div className="tree-container">
            {data.map((item,index) => {
              return (
                  <CheckTree data={item} key={index}/>
                );
            })}
          </div>
        </div>
      )
  }
}


// function getStyle(ele) {
//   return window.getComputedStyle(ele,null)
// }