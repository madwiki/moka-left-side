import React, {Component, PropTypes} from 'react'
import CheckBox from './CheckBox';

export default class CheckTree extends Component {
  constructor(props){
    super(props);
    this.rootCallback = this.rootCallback.bind(this);
    this.branchCallback = this.branchCallback.bind(this);
    this.useCheckCallback = this.useCheckCallback.bind(this);
    this.state = {
      rootValue: false,
      branchValues: props.data.branch.map(() => false)
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.signal == 'clear') {
      this.setState({
        rootValue: false,
        branchValues: nextProps.data.branch.map(() => false)
      });
    }
  }
  render (){
    const {data} = this.props;
    const {rootValue, branchValues} = this.state;
    return (
      <div className="tree">
        <div className="root">
          <CheckBox checked={rootValue} label={data.root.text} labelIcon={true} num={data.root.num} callback={this.rootCallback} />
        </div>
        <div className="branch">
          {data.branch.map((item,index) => (
            <CheckBox checked={branchValues[index]} label={item.text} num={item.num} key={index} order={index} callback={this.branchCallback} />
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
    //在执行完所有同步代码后执行，
    //写在这里而不是生命周期里，是为了防止无意义的重复调用，
    //下同
    setTimeout(this.useCheckCallback,0);
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
    setTimeout(this.useCheckCallback,0);
  }

  useCheckCallback(){
    //通过调外部函数传出数据
    const data = this.props.data;
    let newData = {};
    newData.root = {
      text: data.root.text,
      num: data.root.num,
      value: this.state.rootValue
    }
    newData.branch = data.branch.map((item,index) => {
      const {text, num} = item;
      return {
        text,
        num,
        value: this.state.branchValues[index]
      }
    });
    this.props.checkCallback(newData,this.props.order);
  }
}