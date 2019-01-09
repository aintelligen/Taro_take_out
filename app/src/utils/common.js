import Taro from '@tarojs/taro';
import Event from './event'

const foodKey = "taro_meituan";
let myEvent = new Event();
export function getFoodCount(food) {
  let store = Taro.getStorageSync(foodKey);
  if (store && store[food.id]) {
    return store[food.id].num;
  } else {
    return 0;
  }
}

export function setFoodCount(food, num, type, callBack) {
  if (food) {
    let store = Taro.getStorageSync(foodKey);
    if (!store) store = {};
    if (type == "cut") {
      //减菜逻辑
      if (num == 1) {
        //菜品数据被删除 
        if (store[food.id]) {
          delete store[food.id];//删除菜品数据结构
        }
      } else {
        if (store[food.id]) {
          store[food.id].num = num - 1;//数量减1  结构不变
        }
      }
      Taro.setStorageSync(foodKey, store);//进行缓存数据更新
      callBack && callBack();
    }
    if (type == "add") {
      //加菜逻辑
      if (store[food.id]) {
        //说明已经加过了
        store[food.id].num = num + 1;
      } else {
        //说明没有加过
        store[food.id] = { num: 1, ...food };
      }
      Taro.setStorageSync(foodKey, store);//进行缓存数据更新
      callBack && callBack();
    }
  }
}
export function getEvent() {
  return myEvent;
}

export function getAllFoodInfo() {
  let allPrice = 0;//总价格
  let allNum = 0;
  let store = Taro.getStorageSync(foodKey);//取菜品信息
  if (store) {
    //对store进行遍历
    Object.keys(store).map((key) => {
      if (store[key]) {
        if (store[key].price) {
          allPrice += store[key].price * store[key].num;
          allNum += store[key].num;
        }
      }
    })
  }
  if (isNaN(allPrice)) {
    allPrice = 0;
  }
  if (isNaN(allNum)) {
    allNum = 0;
  }
  return { allPrice, allNum }
}