import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Agree from '@/pages/agree'
import Bind from '@/pages/bind'

Vue.use(Router)

export default new Router({
  routes: [
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
})
