// 引入vue.js
import Vue from 'vue'
import App from './App'
// 引入vue-router.js
import VueRouter from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'

// 单独引用时不必写下面的语句。
Vue.use(VueRouter)

/* 用vue创建一个根组件，路由器需要一个根组件。
 var APP = Vue.extend({})*/

// 调用构造函数VueRouter,创建一个路由实例router.
var router = new VueRouter()

// 调用router的map方法映射路由，每条路由以key-value的形式存在，key是路径，value是组件。
// 若路径为"/"，则初始时就会加载
// 只需传入构建组件名；-------组件不需要注册（全局/局部）
router.map({
  '/': {
    component: Login },
  '/home': {
    component: Home },
  '/register': {
    component: Register }
})
/* var App = Vue.extend({});*/
// 路由会创建一个App实例，并且挂载到#app元素。
router.start(App, 'app')
