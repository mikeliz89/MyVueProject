import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/Home'
import OtherComponent from '@/components/Other'
import ListPractices from '@/components/ListPractices'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent
    }
    , {
      path: '/other',
      name: 'Other',
      component: OtherComponent
    }, {
      path: '/listpractices',
      name: 'ListPractices',
      component: ListPractices
    }
  ]
})
