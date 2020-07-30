import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import '@/assets/css/reset.css'
 

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

//测试
// import req from '@/utills/request'
// console.log('req:',req)
// console.log('req:',req.post())

// const getData=async()=>{
//   let res=await req.post("baidu.com",{
//     acc:"guest",
//     pwd:"666",
//   });
//   console.log("结果：",res)
// }
// getData()