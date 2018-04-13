import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/view/home'
import Classify from '@/components/view/classify'
import Shopcar from '@/components/view/shopcar'
import Search from "@/components/view/search";
import Login from "@/components/view/login";
import Order from "@/components/view/order";
import Store from "@/components/view/store";
import ForgetPass from "@/components/view/forgetPass";
import Register from "@/components/view/register";
import My from "@/components/view/my";
import Provice from "@/components/view/provice";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/classify',
      component: Classify,
    },
    {
      path:'/shopcar',
      component:Shopcar,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/order',
      component: Order,
    },
    {
      path: '/store',
      name:'store',
      component: Store,
    },
    {
      path:'/forgetPass',
      component:ForgetPass,
    },
    {
      path:'/register',
      name:'register',
      component:Register,
    },
    {
      path:'/my',
      component:My,
    },
    {
      path:'/provice',
      component:Provice,
    },
    // {
    //   path: '/store/:shopId',
    //   name:'store',
    //   component: Store,
    //   props:true,
    // },
  ]
})

