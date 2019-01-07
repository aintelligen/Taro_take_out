import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import Child from './child'
import './index.less'


/* @connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
})) */
@connect(
  counter => counter,
  {
    add,
    minus,
    asyncAdd,
  }
)
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props, state) {
    super(props)
    this.state = {
      name: '李四'
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }
  change() {
    this.setState({
      name: '张三'
    }, () => {
      console.log(this.state.name)
    })
    console.log(this.state.name)
  }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.minus}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World, WeApp</Text></View>
        <Child name={this.state.name} onchange={this.change.bind(this)}></Child>
      </View>
    )
  }
}

export default Index
