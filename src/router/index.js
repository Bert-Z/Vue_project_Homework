import Vue from 'vue'
import Router from 'vue-router'
import root from '@/components/Root'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component:root
    },
  ]
})
