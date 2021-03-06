import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/components/layout/layOut'
import Menu from '@/components/menu/menu'
import ListViewTest from '@/pages/test/listViewTest'
import Agree from '@/pages/info/agree'
import Bind from '@/pages/info/bind'
import Center from '@/pages/info/center'
import FeedBack from '@/pages/info/feedback'
import Problem from '@/pages/info/problem'
import Introduce from '@/pages/info/introduce'
import store from '@/store/index'

Vue.use(Router)
console.log(store)
let hasUser = localStorage.getItem('hasUser')
if (hasUser === null) {
  hasUser = null
}
const initialRouteMap = [
  {
    path: '/',
    redirect: '/menu',
    name: 'Menu',
    component: LayOut,
    children: [
      {
        path: 'menu',
        name: '首页',
        meta: {
          requireAuth: false
        },
        component: Menu
      }
    ]
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
    path: '/classify',
    redirect: '/classify/list',
    name: '拦截分类设置',
    component: LayOut,
    children: [
      {
        path: 'list',
        name: '拦截分类展示',
        meta: {
          requireAuth: true
        },
        component: () => import('@/pages/classify/list')
      },
      {
        path: 'set',
        name: '拦截阈值设置',
        meta: {
          requireAuth: true
        },
        component: () => import('@/pages/classify/set')
      },
      {
        path: 'search',
        name: '拦截记录查询',
        meta: {
          requireAuth: true
        },
        component: () => import('@/pages/classify/search')
      }
    ]
  },
  {
    path: '/info',
    redirect: '/info/introduce',
    name: '我的绿盾',
    component: LayOut,
    children: [
      {
        path: 'introduce',
        name: '绿盾介绍',
        meta: {
          requireAuth: false
        },
        component: Introduce
      },
      {
        path: 'problem',
        name: '常见问题',
        meta: {
          requireAuth: false
        },
        component: Problem
      },
      {
        path: 'feedback/:flag',
        name: '意见反馈',
        meta: {
          requireAuth: false
        },
        component: FeedBack
      },
      {
        path: 'center',
        name: '个人中心',
        meta: {
          requireAuth: true
        },
        component: Center
      },
      {
        path: 'agree',
        name: '免责声明',
        meta: {
          requireAuth: false
        },
        component: Agree
      },
      {
        path: 'bind',
        name: '号码绑定',
        meta: {
          requireAuth: false
        },
        component: Bind
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
  }
]
const router = new Router({
  routes: initialRouteMap
})

// 全局路由开始守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    hasUser = localStorage.getItem('hasUser')
    if (hasUser === null || hasUser === 'null') {
      console.log('没有注册')
      sessionStorage.setItem('targetPath', to.fullPath)
      next('/info/agree')
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
