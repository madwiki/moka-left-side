import React, {Component, PropTypes} from 'react'
import CheckBox from './CheckBox';

export default class CheckTree extends Component {
  constructor(props){
    super(props);
    this.rootCallback = this.rootCallback.bind(this);
    this.branchCallback = this.branchCallback.bind(this);
    this.state = {
      rootValue: false,
      branchValues: props.data.branch.map(() => false)
    };
  }
  componentWillReceiveProps(nextProps) {

  }
  render (){
    const {data} = this.props;
    const {rootValue, branchValues} = this.state;
    return (
      <div className="tree">
        <div className="root">
          <CheckBox checked={rootValue} label={data.root.text} callback={this.rootCallback} />
        </div>
        <div className="branch">
          {data.branch.map((item,index) => (
            <CheckBox checked={branchValues[index]} label={item.text} key={index} order={index} callback={this.branchCallback} />
          ))}
        </div>
      </div>
    );
  }

  rootCallback(value) {
    this.setState({
      rootValue: value
    },()=>{
      const { rootValue, branchValues} = this.state;
      let newBranchValues;
      if (rootValue) {
        newBranchValues = branchValues.map(() => true);
      }else{
        newBranchValues = branchValues.map(() => false);
      }
      this.setState({
        branchValues: newBranchValues
      });
    });
  }

  branchCallback(value,order) {
    this.setState({
      branchValues: this.state.branchValues.map((item,index) => {
        if (order == index) {
          return value;
        }else{
          return item
        }
      })
    },() => {
      const { branchValues } = this.state;
      let allChecked = true;
      for (var i = 0; i < branchValues.length; i++) {
        if(!branchValues[i]){
          allChecked = false;
          break;
        }
      }
      if (allChecked) {
        this.setState({
          rootValue: true
        })
      }else{
        this.setState({
          rootValue: false
        })
      }
    });
  }
}