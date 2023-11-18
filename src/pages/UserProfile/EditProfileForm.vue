<template>
  <card>
    <h4 slot="header" class="card-title">Profile</h4>
    <form>
      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="User ID"
                    :disabled="true"
                    placeholder="Your user ID"
                    v-model="userData.user_id">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Username"
                    :disabled="true"
                    placeholder="Username"
                    v-model="userData.user_name">
          </base-input>
        </div>
        <!-- <div class="col-md-4">
          <base-input type="email"
                    label="Email"
                    :disabled="true"
                    placeholder="Email"
                    v-model="userData.email">
          </base-input>
        </div> -->
      </div>

      <!-- <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="First Name"
                    placeholder="First Name"
                    v-model="userData.firstName">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    v-model="userData.lastName">
          </base-input>
        </div>
      </div> -->

      <!-- <div class="row">
        <div class="col-md-12">
          <base-input type="text"
                    label="Address"
                    placeholder="Home Address"
                    v-model="userData.address">
          </base-input>
        </div>
      </div> -->

      <div class="row">
        <!-- <div class="col-md-4">
          <base-input type="text"
                    label="City"
                    placeholder="City"
                    v-model="userData.city">
          </base-input>
        </div> -->
        <div class="col-md-6">
          <base-input type="text"
                    label="Country"
                    :disabled="true"
                    placeholder="Country"
                    v-model="userData.country">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Sign up date"
                    :disabled="true"
                    placeholder="Sign up date"
                    v-model="userData.sign_up_date">
          </base-input>
        </div>
        <!-- <div class="col-md-4">
          <base-input type="number"
                    label="Postal Code"
                    placeholder="ZIP Code"
                    v-model="userData.postalCode">
          </base-input>
        </div> -->
      </div>

      <!-- <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>About Me</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Here can be your description"
                      v-model="user.aboutMe">
              </textarea>
          </div>
        </div>
      </div> -->
      <!-- <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Update Profile
        </button>
      </div> -->
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'
import { watch } from 'vue';

  export default {
    components: {
      Card
    },
    props: {
      userData: {
        type: Object,
        require: true,
      }
    },
    data () {
      return {
        // user: {
        //   company: 'Light dashboard',
        //   username: 'michael23',
        //   email: '',
        //   firstName: 'Mike',
        //   lastName: 'Andrew',
        //   address: 'Melbourne, Australia',
        //   city: 'melbourne',
        //   country: 'Australia',
        //   postalCode: '',
        //   aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
        // }
      }
    },
    methods: {
      // updateProfile () {
      //   alert('Your data: ' + JSON.stringify(this.user))
      // }
    },
  }

</script>
<style>

</style>
