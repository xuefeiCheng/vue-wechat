import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Agree from '@/pages/agree'
import Black from '@/pages/black/black'
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
      path: '/black',
      name: 'Black',
      component: Black
    }
  ]
})
