import './App.scss';

import React, {Component, PropTypes, cloneElement, createClass} from 'react';
import MokaLeftSide from '../../src/index';

export default class App extends Component {
  constructor(){
    super();
    this.doSomeThing = this.doSomeThing.bind(this);
  }
  render() {
    const data = [
      {
        root: {text: '工程研发部门', num: 120},
        branch: [
          {text: 'Mac开发工程师', num: 9},
          {text: 'IOS App测试工程师', num: 17},
          {text: 'Android远程控制工程师', num: 61},
          {text: 'Web前端工程师', num: 31},
          {text: 'Android多媒体软件开发工程师', num: 2}
        ],
      },
      {
        root: {text: '产品设计部门', num: 136},
        branch: [
          {text: '网页设计师', num: 47},
          {text: 'ID/工业设计师', num: 39},
          {text: '视觉设计师/GUI界面设计师', num: 42},
          {text: '平面设计师', num: 8}
        ],
      }
    ]
    return (
      <MokaLeftSide data={data} title="招聘职位" afterChange={this.doSomeThing}/>
    )
  }
  doSomeThing(newData) {
    console.log(JSON.stringify(newData));
  }
}