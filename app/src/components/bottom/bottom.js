import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './bottom.less'
import { getAllFoodInfo, getEvent } from '../../utils/common'
const Empty = require('../../assets/img/emptystore.png')
const Flut = require('../../assets/img/foodstore.png')
let event = getEvent();


class Bottom extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      allNum: 0,
      sendPrice: 3, //配送费
      supportTakeBySelf: true,
      sendMustPrice: 20,  //满多少钱起送
      allPrice: 0  //总价
    }
  }
  componentDidMount() {
    this.init()
    event.on('addcut', () => {
      this.init()
    })
  }
  init() {
    let { allPrice, allNum } = getAllFoodInfo();
    console.log(allPrice, allNum);
    this.setState({ allNum: allNum, allPrice: allPrice });
  }
  render() {
    let { allNum, sendPrice, supportTakeBySelf, sendMustPrice, allPrice } = this.state;
    return (
      <View className="bottom">
        <View className="bottom_body">
          <View>
            <Image src={allNum ? Flut : Empty} className="store_img"></Image>
          </View>
          {allNum ? <Text className='num'>{allNum}</Text> : null}
          <View className="info">
            <Text className="price">另需配送费￥{sendPrice}</Text>
            <Text>{supportTakeBySelf ? " 支持自取" : " 不支持自取"}</Text>
          </View>
          <View className="submit">
            {
              allPrice > sendMustPrice ?
                <Text className="goPay">去结算</Text> :
                <Text>差￥{sendMustPrice - allPrice}起送</Text>
            }
          </View>
        </View>
      </View>
    )
  }
}
export default Bottom;