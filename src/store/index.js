import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    errors: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setErrors(state, errors) {
      state.errors = errors;
    },
    clearUser(state) {
      state.user = null;
    },
    clearErrors(state) {
      state.errors = {};
    },
  },
  getters: {
    isAuthenticated: (state) => state.user,
  },
  actions: {
    async getUser({ commit }) {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("/api/user", {
            headers: { Authorization: `Bearer ${token}` },
          });
          commit("setUser", res.data);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    },

    async loginUser({ commit }, formData ) {
      try {
        const res = await axios.post(`http://127.0.0.1:8000/api/login`, formData);
        if (res.status == 200) {
          localStorage.setItem("token", res.data.token);
          commit("setUser", res.data.user);
        }
      } catch (error) {
        console.log("Error during authentication:", error);
      }
    },

    async logout({ commit }) {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          await axios.post("http://127.0.0.1:8000/api/logout", null, {
            headers: { Authorization: `Bearer ${token}` },
          });
          commit("clearUser");
          localStorage.removeItem("token");
          this.$router.push({ name: "Login" });
        } catch (error) {
          console.error("Error during logout:", error);
        }
      }
    },
  },
});
