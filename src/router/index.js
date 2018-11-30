import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/pages/black/list'
import Agree from '@/pages/info/agree'
import Bind from '@/pages/info/bind'
import Center from '@/pages/info/center'
import FeedBack from '@/pages/info/feedback'

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
    path: '/test',
    name: 'test',
    meta: {
      requireAuth: false
    },
    component: Test
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
    path: '/feedback',
    name: 'FeedBack',
    meta: {
      requireAuth: false
    },
    component: FeedBack
  },
  {
    path: '/black/list',
    name: 'ListBlack',
    meta: {
      requireAuth: true
    },
    component: () => import('@/pages/black/black')
  },
  {
    path: '/black/add',
    meta: {
      requireAuth: true
    },
    name: 'AddBlack',
    component: () => import('@/pages/black/add')
  },
  {
    path: '/white/list',
    meta: {
      requireAuth: true
    },
    name: 'ListWhite',
    component: () => import('@/pages/white/list')
  },
  {
    path: '/white/add',
    meta: {
      requireAuth: true
    },
    name: 'AddWhite',
    component: () => import('@/pages/white/add')
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
