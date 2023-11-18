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
                <p class="mess">{{ message }}</p>
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
// import routes from '../routes/routes';
import ApiServices from 'src/services/ApiServices.js';
import store from 'src/store'; 

export default {
  data() {
    return {
      username: '',
      password: '',
      message: '',
    };
  },
  methods: {
    async login() {
      try {
        let params = {
          user_name: this.username,
          user_password: this.password,
        };

        console.log(params);

        const response = await ApiServices.post("login", params);
        this.message = response.message;  
        // Assuming the API returns a property named 'isAuthenticated'
        if (response.isAuthenticated) {
          store.dispatch('saveUserData', response.data);
          console.log("user Data", JSON.parse(store.getters.getUserData)["0"]["user_id"])
          // let userDataArray = store.getters.getUserData
          // if (Array.isArray(userDataArray) && userDataArray.length > 0) {
          //   console.log(userDataArray[0].user_id);
          // }
          // if (!Array.isArray(userDataArray)) {
          //   console.error('userDataArray is not an array.');}
          this.$router.push("/admin/overview");
        } else {
          // Handle authentication failure
          console.error('Login failed:', response.message);
        }
      } catch (error) {
        // Handle network errors or other issues
        console.error('Login failed:', error.message);
      }
    },

        // Call your API endpoint for login
        // const response = await axios.post('your-login-api-endpoint', {
        //   username: this.username,
        //   password: this.password
        // });

        // Assuming your API returns user information
        // const userData = response.data;

        // Save user information to use later
        // this.$store.dispatch('saveUserData', userData);

        // Redirect to another page (for example, a dashboard)
      //   this.$router.push("/admin/overview");
      // } catch (error) {
      //   console.error('Login failed:', error.message);
        // Handle login failure, show an error message, etc.
      // }
      
    // }
  },
  created() {
    // console.log('Component Store:', this.$store);
    // console.log(store)
  },

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
.mess {
  color: rgb(118, 156, 40);
}
</style>
