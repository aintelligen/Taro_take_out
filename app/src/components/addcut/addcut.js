import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { getFoodCount, setFoodCount, getEvent } from '../../utils/common';
import './addcut.less'
const myEvent = getEvent();
class AddCut extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      num: 0
    }
  }
  componentDidMount() {
    this.setState({
      num: getFoodCount(this.props.food)
    })
    myEvent.on("changeCata", () => {
      //监听到分类改变 进行菜品数量刷新
      this.setState({ Num: getFoodCount(this.props.food) });
    })
  }
  CutFood() {
    if (this.props.food) {
      if (this.state.num > 0) {
        setFoodCount(this.props.food, this.state.num, 'cut', () => {
          this.setState({
            num: getFoodCount(this.props.food)
          })
          myEvent.emit("addcut")
        })
      }
    } else {
      console.error("当前加减菜品出现异常")
    }
  }
  AddFood() {
    if (this.props.food) {
      setFoodCount(this.props.food, this.state.num, 'add', () => {
        this.setState({
          num: getFoodCount(this.props.food)
        })
        myEvent.emit("addcut")
      })
    }
  }
  render() {
    let num = this.state.num;
    let hideClass = num < 1 ? 'hide' : '';
    console.log(num)
    return (
      <View className="addcut">
        <Image onClick={this.CutFood.bind(this)} className={"opeate_img " + hideClass} src={require('../../assets/img/cut.png')}></Image>
        <Text className={"food_num " + hideClass}>{num}</Text>
        <Image onClick={this.AddFood.bind(this)} className="opeate_img" src={require('../../assets/img/add.png')}></Image>
      </View>
    )
  }
}
AddCut.defaultProps = {
  food: {}
}
export default AddCut;