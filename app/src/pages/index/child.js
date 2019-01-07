import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

class Child extends Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }
  changeName() {
    this.props.onchange()
  }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='Child'>
        <Button onClick={this.changeName.bind(this)}>调用上层函数</Button>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}
Child.defaultProps = {
  name: '',
  onchange: function () {

  }
}
export default Child
