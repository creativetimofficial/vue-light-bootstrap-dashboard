/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.1.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2023 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import axios from "axios";
window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
window.axios.defaults.withCredentials = true;

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import store from './store';

// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";

// router setup
import routes from "./routes/routes";

import "./registerServiceWorker";
// plugin setup
Vue.use(VueRouter);
Vue.use(LightBootstrap);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: "nav-item active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

// router.beforeEach(async (to, from, next) => {
//   console.log(to, '123123')
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!store.getters.isAuthenticated) {
//       try {
//         if (store.getters.isAuthenticated) {
//           next();
//         } else {
//           next({ name: 'Login' });
//         }
//       } catch (error) {
//         console.error("Error fetching user:", error);
//         next({ name: 'Login' });
//       }
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

new Vue({
  el: "#app",
  store,
  render: (h) => h(App),
  router,
});
