import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListViewTest from '@/pages/test/listViewTest'
import LayOut from '@/pages/test/LayOut'
import Agree from '@/pages/info/agree'
import Bind from '@/pages/info/bind'
import Center from '@/pages/info/center'
import FeedBack from '@/pages/info/feedback'
import Problem from '@/pages/info/problem'
import Introduce from '@/pages/info/introduce'

Vue.use(Router)

const initialRouteMap = [
  {
    path: '/',
    name: 'HelloWorld',
    meta: {
      requireAuth: false
    },
    component: HelloWorld
  },
  {
    path: '/black',
    redirect: '/black/list',
    name: '黑名单设置',
    component: LayOut,
    children: [
      {
        path: 'list',
        name: '黑名单列表',
        meta: {
          requireAuth: true
        },
        component: () => import('@/pages/black/black')
      },
      {
        path: 'add',
        name: '新增黑名单',
        meta: {
          requireAuth: true
        },
        component: () => import('@/pages/black/add')
      }
    ]
  },
  {
    path: '/white',
    redirect: '/white/list',
    name: '白名单设置',
    component: LayOut,
    children: [
      {
        path: 'list',
        name: '白名单列表',
        meta: {
          requireAuth: true
        },
        component: () => import('@/pages/white/list')
      },
      {
        path: 'add',
        name: '新增白名单',
        meta: {
          requireAuth: true
        },
        component: () => import('@/pages/white/add')
      }
    ]
  },
  {
    path: '/test01',
    name: 'ListViewTest',
    meta: {
      requireAuth: false
    },
    component: ListViewTest
  },
  {
    path: '/agree',
    name: 'Agree',
    meta: {
      requireAuth: false // 添加该字段，表示进入这个路由是需要验证
    },
    component: Agree
  },
  {
    path: '/center',
    name: 'Center',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要验证
    },
    component: Center
  },
  {
    path: '/bind',
    name: 'Bind',
    meta: {
      requireAuth: false
    },
    component: Bind
  },
  {
    path: '/feedback/:flag',
    name: 'FeedBack',
    meta: {
      requireAuth: false
    },
    component: FeedBack
  },
  {
    path: '/introduce',
    name: 'Introduce',
    meta: {
      requireAuth: false
    },
    component: Introduce
  },
  {
    path: '/problem',
    name: 'Problem',
    meta: {
      requireAuth: false
    },
    component: Problem
  },
  {
    path: '/classify/list',
    meta: {
      requireAuth: true
    },
    name: 'ListClassify',
    component: () => import('@/pages/classify/list')
  },
  {
    path: '/classify/set',
    meta: {
      requireAuth: true
    },
    name: 'setClassify',
    component: () => import('@/pages/classify/set')
  },
  {
    path: '/classify/search',
    meta: {
      requireAuth: true
    },
    name: 'searchClassify',
    component: () => import('@/pages/classify/search')
  }
]
const router = new Router({
  routes: initialRouteMap
})

// 全局路由开始守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    let hasUser = sessionStorage.getItem('hasUser')
    if (hasUser === null || hasUser === 'null') {
      console.log('没有注册')
      sessionStorage.setItem('targetPath', to.fullPath)
      next('/agree')
    } else {
      next()
    }
  } else {
    next()
  }
})

// 全局路由结束守卫
router.afterEach(() => {
})
export default router
