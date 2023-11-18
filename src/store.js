// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: null,
    cachedChartData: {},
  },
  mutations: {
    saveUserData(state, userData) {
      state.userData = userData;
    },
    saveCachedChartData(state, { chartType, data }) {
        state.cachedChartData[chartType] = data;
      },
  },
  actions: {
    saveUserData({ commit }, userData) {
      commit('saveUserData', userData);
    },
  },
  getters: {
    getUserData: (state) => state.userData,
    getCachedChartData: (state) => (chartType) => {
        return state.cachedChartData[chartType] || null;
    },
  },
});
