import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import Top from './top'
import Back from '../../assets/img/back.jpg'
import Store from '../../assets/img/store.jpg'
import './head.less'

class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      store: {
        title: '川相聚',
        notice: '欢迎光临，很高兴为您服务~~',

      }
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
      <View className='head'>
        <Top></Top>
        <Image src={Back} className="back"></Image>
        <View className="store">
          <Image src={Store} className="store_img"></Image>
          <View className="store_text">
            <Text></Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
