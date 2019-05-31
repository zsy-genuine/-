// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()//初始化云函数

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event) //用来接受前端传参
  return event.number
}