import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Agree from '@/pages/agree'
import Bind from '@/pages/bind'
import { cookie } from 'vux'

Vue.use(Router)

const initialRouteMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/agree',
    name: 'Agree',
    component: Agree
  },
  {
    path: '/bind',
    name: 'Bind',
    component: Bind
  },
  {
    path: '/black/list',
    name: 'ListBlack',
    component: () => import('@/pages/black/black')
  },
  {
    path: '/black/add',
    name: 'AddBlack',
    component: () => import('@/pages/black/add')
  }
]
const router = new Router({
  routes: initialRouteMap
})

// 全局路由开始守卫
router.beforeEach((to, from, next) => {
  console.log(cookie.get('hasUser'))
  next()
})

// 全局路由结束守卫
router.afterEach(() => {
})
export default router
