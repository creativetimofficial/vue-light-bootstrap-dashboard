<template>
  <div class="dark-background">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h2 class="text-center">Login Page</h2>
            </div>
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="form-group">
                  <label for="username">Username:</label>
                  <input type="text" class="form-control" v-model="username" required>
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input type="password" class="form-control" v-model="password" required>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Implement your login logic here
      // For simplicity, let's just log the credentials for now
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
};
</script>

<style scoped>
.dark-background {
  background-color: #343a40; /* Set your desired dark background color */
  height: 100vh; /* Make it cover the full height of the viewport */
  display: flex;
  align-items: center;
  justify-content: center;
}
/* .btn-primary {
  background-color: ;
} */
/* Add your additional styling here if needed */
</style>
