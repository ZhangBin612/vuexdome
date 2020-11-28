import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import State from '../components/State.vue'
import Actions from '../components/Actions.vue'
import Getters from '../components/Getters.vue'
import Mutations from '../components/Mutations.vue'



export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/',
      redirect:'/State'
    },
    {
      path: '/State',
      component: State
    },
    {
      path: '/Actions',
      component: Actions
    },
    {
      path: '/Getters',
      component: Getters
    },
    {
      path: '/Mutations',
      component: Mutations
    },
  ]
})