// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './pages/Home'
import User from './pages/User'
import Categoty from './pages/Category'
import Cart from './pages/Cart'
import Search from './pages/Search'
import Login from './pages/Login'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: { name: 'home' }
},
{
  path:'/home',
  name:'home',
  component:Home
},
{
  path:'/user',
  name:'user',
  component:User
},
{
  path:'/category',
  name:'category',
  component:Categoty
},
{
  path:'/cart',
  name:'cart',
  component:Cart
},
{
  path:'/search',
  name:'search',
  component:Search
},
{
  path:'/login',
  name:'login',
  component:Login
}
]

const router = new VueRouter({
  routes
})

//自动回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

FastClick.attach(document.body)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
