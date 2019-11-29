import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path:'/index',
      component:()=>import('../components/index.vue'),
      children:[
        {
          path:'404',
          name:'404',
          component:()=>import('../components/common/404.vue')
        }
      ]
    },
    {
      path:'*',
      redirect:'/index/404'
    }
  ]
})
