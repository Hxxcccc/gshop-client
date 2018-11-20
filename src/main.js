/*入口js*/
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'

import store from './store'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader'

//注册全局组件
Vue.component('TopHeader', TopHeader)
Vue.component(Button.name, Button)

import './mock/mockServer'

/* eslint-disable no-new*/
new Vue ({
  el: '#app',
  render: h => h(App),
  router,
  store
})

