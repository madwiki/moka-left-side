## moka-left-side

Source code in the `src` directory.

example code in the `example` directory.

#### For dev

run  `npm start`   

#### Build for production

run `npm run dist`

Then you can find it in `dist` dir.

#### Usage

Three props needed,  `data` , `title` and `afterChange`.

You would receive the new data with value in afterChange.

See example here: [http://madwiki.github.io/moka-left-side/](http://madwiki.github.io/moka-left-side/)

```javascript
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
```





## 总结

完成时间：没有计时，粗略应该在5个小时吧。开发的时候受到打扰所以慢了。

搭建估计在0.5个小时左右。

前期组织在0.5个小时左右。

写基本功能在2个小时。

写样式在0.5个小时左右。

组织功能在0.5个小时左右。

查资料应该用了1个小时。

（补充：发现居然没有写数据出口，于是写了 `afterChange` 用于传入回调函数，用于处理返回的新对象。用时40多分钟。所以总用时估计在6小时左右）



其实我还有其他实现方法，一开始准备写成一个组件的，后面想想还是拆吧。牺牲效率换取项目清晰度。