// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import axios from '@/util/http'
import 'lib-flexible/flexible.js'
import 'babel-polyfill'
import '@/assets/styles/reset.css'
import '@/assets/styles/iconfont.css'
import '@/assets/styles/global.css'
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.prototype.axios = axios
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 获取dpr iphone6为2
// flexible 设置data-dpr为1
// console.log(window.devicePixelRatio)
