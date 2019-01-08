import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import Top from './top'
import Back from '../../assets/img/back.jpg'
import './head.less'
import Activity from './activity'

class Head extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      store: {
        title: '川相聚',
        notice: '欢迎光临，很高兴为您服务~~',
        tags: ['味道好', '主食甚好', '分量足']
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
    const store = this.state.store;
    return (
      <View className='head'>
        <Top></Top>
        <Image src={Back} className="back"></Image>
        <View className="store">
          <Image className="store_img" src={require('../../assets/img/store.jpg')}>
          </Image>
          <View className="store_text">
            <Text className="title">{store.title}</Text>
            <Text>{store.notice}</Text>
            <View>
              {store.tags.map((item, index) => <Text className="tags_text" key={index}>{item}</Text>)}
            </View>
          </View>
        </View>
        <Activity></Activity>
      </View>
    )
  }
}

export default Head
