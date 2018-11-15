// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import fastClick from 'fastclick'
import 'lib-flexible/flexible.js'
import 'babel-polyfill'
import 'styles/iconfont.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
// 全局引用
Vue.use(Mint)
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
