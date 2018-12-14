import axios from 'axios'
import Vue from 'vue'

// 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     if (store.getters.token) { // 已登录
//       config.headers.token = store.getters.token
//     }
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   }
// )

// 响应拦截器
axios.interceptors.response.use(
  response => {
    console.log(response)
    let data = response.data
    let code = response.status
    if (code === 200) { // 拦截未登陆请求到登录界面
      setTimeout(function () {
        localStorage.setItem('hasUser', null)
        location.reload()
      }, 2000)
      Vue.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: '没有注册'
      })
      // store.commit('LOGOUT')
    }
    return data
  },
  error => {
    // Message.error('请求异常：' + error.message)
    return Promise.reject(error)
  }
)

export default axios
