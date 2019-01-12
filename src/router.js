import Vue from 'vue'
import Router from 'vue-router'
import InvoiceItemized from './components/InvoiceItemized'
import History from './components/History'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: InvoiceItemized
    },
    {
      path: '/history',
      name: 'history',
      component: History
    }
  ]
})
