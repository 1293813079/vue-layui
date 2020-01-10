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
      path:'/sigin',
      component:()=>import('../components/login/sigin.vue'),
    },
    {
      path:'/index',
      component:()=>import('../components/index.vue'),
      redirect:'/index/control',
      children:[
        {
          path:'control',
          name:'control',
          component:()=>import('../components/home/control.vue')
        },
        {
          path:'404',
          name:'404',
          component:()=>import('../components/common/404.vue')
        },
      ]
    },
    {
      path:'*',
      redirect:'/index/404'
    }
  ]
})
