import Vue from 'vue'
import VueRouter from 'vue-router'

// Plugins
import VTooltip from 'v-tooltip'
import Notifications from 'vue-notifyjs'
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App.vue'

// router setup
import routes from './routes/routes'

// library imports
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-notifyjs/themes/default.scss'
import './assets/sass/light-bootstrap-dashboard.scss'
import './assets/css/demo.css'
import 'es6-promise/auto'

// plugin setup
Vue.use(VueRouter)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(SideBar)
Vue.use(Notifications)
Vue.use(VTooltip)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
