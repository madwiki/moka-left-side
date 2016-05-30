import React, {Component, PropTypes} from 'react'

export default class MokaLeftSide extends Component {
  constructor(props){
    console.log(props.key);
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
    return (
      <div>
        <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
        <label>{this.props.label}</label>
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