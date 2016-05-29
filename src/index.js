import './MokaLeftSide.scss'
import React, {Component, PropTypes} from 'react'



export default class MockLeftSide extends Component {
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(nextProps) {

  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render (){
    return (
        <div className="moka-left-side">
          <header className="title">
            <h2 className="description"></h2>
            <button className="clear">清空</button>
          </header>
        </div>
      )
  }
}


function getStyle(ele) {
  return window.getComputedStyle(ele,null)
}