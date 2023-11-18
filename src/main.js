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
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// router setup
import routes from "./routes/routes";

import store from './store';

import "./registerServiceWorker";
// plugin setup
Vue.use(VueRouter);
Vue.use(LightBootstrap);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// configure router
const router = new VueRouter({
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

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is authenticated (you should implement your own authentication logic)
    const userData = JSON.parse(store.getters.getUserData)
    let isAuthenticated = false;
    if (userData){
      isAuthenticated = true;
    }

    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page
      store.dispatch('saveUserData', null);
      console.log(JSON.parse(store.getters.getUserData));
      next({ name: 'login' });
    } else {
      // If authenticated, proceed to the requested route
      next();
    }
  } else {
    // For routes that don't require authentication, proceed
    store.dispatch('saveUserData', null);
    console.log(JSON.parse(store.getters.getUserData));
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
  router,
});
