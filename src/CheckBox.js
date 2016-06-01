import React, {Component, PropTypes} from 'react'

export default class MokaLeftSide extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checked: props.checked
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checked
    })
  }
  render (){
    const icon = (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
    return (
      <div className="checkbox">
          <div className="checkbox-style">
            <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
          </div>
          <label className="label">{this.props.label}
            {this.props.labelIcon ? icon : null}
          </label>
          <div className="num">{this.props.num}</div>
      </div>
    );
  }
  handleChange(e) {
    this.setState({
      checked: e.target.checked
    })
    if (this.props.order || this.props.order === 0) {
      this.props.callback(e.target.checked,this.props.order)
    }else{
      this.props.callback(e.target.checked)
    }
  }
}