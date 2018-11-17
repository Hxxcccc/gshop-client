/*路由器对象模块*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'

// 声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  // 应用中所有的路由
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})