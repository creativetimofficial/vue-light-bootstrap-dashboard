<template>
  <div class="d-flex vh-100 bg-light flex-column align-items-center justify-content-center">
    <b-card class="w-100" style="max-width: 500px;">
      <h2 class="text-primary text-center">Personal Blog</h2>
      <p class="text-center font-weight-bold text-secondary">Login</p>

      <b-alert variant="danger" v-if="validationErrors" dismissible>
        {{ validationErrors }}
      </b-alert>

      <b-form @submit.prevent="login">
        <b-form-group label="Username" label-for="username">
          <b-form-input id="username" v-model="data.username" type="text" placeholder="Enter username"
            required></b-form-input>
        </b-form-group>

        <b-form-group label="Password" label-for="password" class="mt-2">
          <b-form-input id="password" v-model="data.password" type="password" placeholder="Enter password"
            required></b-form-input>
        </b-form-group>

        <b-button variant="primary" class="w-100 mt-3" :disabled="isLogging" @click="login">
          {{ isLogging ? "Logging..." : "Login" }}
        </b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
      isLogging: false,
      validationErrors: ''
    };
  },

  methods: {
    ...mapActions(['loginUser']),
    login() {
      this.isLogging = true;
      const loginData = { ...this.data };
      try {
        this.loginUser(loginData);
        this.$router.push({ path: '/admin/overview' });
        console.log('router push')
      } catch (error) {
        this.validationErrors = error.response.data.message;
      } finally {
        this.isLogging = false;
      }
    },
  },
};
</script>
