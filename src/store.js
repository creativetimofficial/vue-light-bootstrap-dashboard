// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: null,
  },
  mutations: {
    saveUserData(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    saveUserData({ commit }, userData) {
      commit('saveUserData', userData);
    },
  },
  getters: {
    getUserData: (state) => state.userData,
  },
});
