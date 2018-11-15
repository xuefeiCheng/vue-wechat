// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'lib-flexible/flexible.js'
import 'babel-polyfill'
import 'styles/iconfont.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'muse-ui/lib/styles/base.less'
import { Button, Select } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(Button)
Vue.use(Select)
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
