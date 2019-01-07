import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import Left from '../../assets/img/left.png'
import Search from '../../assets/img/search.png'
import Collect from '../../assets/img/collect.png'
import Tuan from '../../assets/img/tuan.png'
import Lue from '../../assets/img/lue.png'

import './top.less'


class Top extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='top'>
        <View className='left'>
          <Image src={Left} className="img"></Image>
        </View>
        <View className='right'>
          <Image src={Search} className="img"></Image>
          <Image src={Collect} className="img"></Image>
          <Image src={Tuan} className="img"></Image>
          <Image src={Lue} className="img"></Image>
        </View>
      </View>
    )
  }
}

export default Top
