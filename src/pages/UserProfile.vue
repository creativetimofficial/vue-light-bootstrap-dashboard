<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <edit-profile-form :userData="userData">
          </edit-profile-form>
        </div>
        <!-- <div class="col-md-4">
          <user-card>
          </user-card>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import store from 'src/store'; 

  export default {
    components: {
      EditProfileForm,
      UserCard
    },
    data(){
      return {
        userData: null,
      };
    },
    created(){
      this.userData = JSON.parse(store.getters.getUserData)["0"];
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      let formatted_date = new Date(this.userData.sign_up_date).toLocaleDateString(undefined, options);
      this.userData.sign_up_date = formatted_date
    }
  }

</script>
<style>

</style>
