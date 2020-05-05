import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Practice from '../views/Practice.vue'
import Privacy from '../views/Privacy.vue'
import Router from '../views/Router.vue'
import User from '../views/User.vue'
import FirstChild from '../views/user/FirstChild.vue'
import SecondChild from '../views/user/SecondChild.vue'
import LastChild from '../views/user/LastChild.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/practice',
    name: 'practice',
    component: Practice
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy
  },
  {
    path: '/router',
    name: 'router',
    component: Router
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    children: [
      {
        path: 'first',    //スラッシュはいらない！！！
        name: 'first',
        component: FirstChild
      },
      {
        path: 'second',
        name: 'second',
        component: SecondChild
      },
      {
        path: 'last',
        name: 'last',
        component: LastChild
      },
    ],
  },
  {
    path: '*',      // ワイルドカードは最後に入れること！
    redirect: '/',  // top pageにリダイレクト
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
