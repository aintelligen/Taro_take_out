import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'

import Head from '../../components/head/head.js'
import Food from '../../components/food/food.js'
import Bottom from '../../components/bottom/bottom.js'


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

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Head></Head>
        <Food></Food>
        <Bottom></Bottom>
      </View>
    )
  }
}

export default Index
