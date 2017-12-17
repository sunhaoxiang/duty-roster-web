import Vue from 'vue'
import Router from 'vue-router'
import Duty from '@/components/Duty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Duty',
      component: Duty
    }
  ]
})
