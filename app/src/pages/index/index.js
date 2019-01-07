import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'

import Head from '../../components/head/head'


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
      </View>
    )
  }
}

export default Index
