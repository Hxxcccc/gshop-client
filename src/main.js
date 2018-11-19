/*入口js*/
import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader'

//注册全局组件
Vue.component('TopHeader', TopHeader)

/* eslint-disable no-new*/
new Vue ({
  el: '#app',
  render: h => h(App),
  router,
  store
})

