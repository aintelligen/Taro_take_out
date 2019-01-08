import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cata from './cata'
import FoodList from './foodlist'
import './food.less';
class Food extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      selectCata: null,
      current: 0,
      foodlist: [],
      currentList: [],
      tabList: [{ title: '点餐' }, { title: '评价' }, { title: '商家' }]
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  changeCata(selectCata) {
    this.setState({ selectCata: selectCata });
    if (this.state.foodlist.some(item => item.pid == selectCata.id)) {
      //不用加载数据
      this.setState({ currentList: this.state.foodlist.filter(item => item.pid == selectCata.id) })
    } else {
      //需要加载数据
      this.setState({ foodlist: this.state.foodlist.concat(this.getData(selectCata)) }, () => {
        this.setState({ currentList: this.state.foodlist.filter(item => item.pid == selectCata.id) })
      });
    }
  }
  getData(selectCata) {
    let count = Math.round(Math.random() * 2);
    return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({ price: Math.round(Math.random() * 20), sole: Math.round(Math.random() * 50), img: count, pid: selectCata.id, id: selectCata.id + "_" + k, title: "分类" + selectCata.id + "菜品" + (k + 1) }))
  }
  render() {
    let { current, tabList, currentList, selectCata } = this.state;
    return (
      <View className="">
        <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane>
            <View className="food_body">
              <Cata onChangeCata={this.changeCata.bind(this)}></Cata>
              <FoodList selectCata={selectCata} currentList={currentList}></FoodList>
            </View>
          </AtTabsPane>
          <AtTabsPane>评价</AtTabsPane>
          <AtTabsPane>商家</AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
export default Food;