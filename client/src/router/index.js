import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import session from '../models/session'
import Schedule from '../views/Schedule.vue'
import Report from '../views/Report.vue'
import SignUp from '../views/SignUp.vue'
import Workouts from '../views/Workouts.vue'
import Users from '../views/Users.vue'




Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/login', name: 'Login', component: Login},
  {path: '/schedule', name: 'Schedule', component: Schedule},
  {path: '/report', name: 'Report', component: Report},
  {path: '/signUp', name: 'SignUp', component: SignUp},
  {path: '/users', name: 'Users', component: Users},

  {
    path: '/workouts',
    name: 'Workouts',
    component: ()=> import(/* webpackChunkName: "workouts" */ '../views/Workouts.vue'),
    beforeEnter: checkSessionUser },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


function checkSessionUser (to, from, next){
  if(session.user){
    next();
  }else{
    next('Login');
  }
}