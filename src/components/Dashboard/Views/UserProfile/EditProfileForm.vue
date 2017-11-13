<template>
  <card>
    <h4 slot="header" class="card-title">Edit Profile</h4>
    <form>
      <div class="row">
        <fg-input type="text"
                  class="col-md-5 pr-1"
                  label="Company"
                  :disabled="true"
                  placeholder="Paper dashboard"
                  v-model="user.company">
        </fg-input>
        <fg-input type="text"
                  class="col-md-3 px-1"
                  label="Username"
                  placeholder="Username"
                  v-model="user.username">
        </fg-input>
        <fg-input type="email"
                  class="col-md-4 pl-1"
                  label="Username"
                  placeholder="Email"
                  v-model="user.email">
        </fg-input>
      </div>

      <div class="row">
        <fg-input type="text"
                  class="col-md-6 pr-1"
                  label="First Name"
                  placeholder="First Name"
                  v-model="user.firstName">
        </fg-input>
        <fg-input type="text"
                  class="col-md-6 pl-1"
                  label="Last Name"
                  placeholder="Last Name"
                  v-model="user.lastName">
        </fg-input>
      </div>

      <div class="row">
        <fg-input type="text"
                  class="col-md-12"
                  label="Address"
                  placeholder="Home Address"
                  v-model="user.address">
        </fg-input>
      </div>

      <div class="row">
        <fg-input type="text"
                  class="col-md-4 pr-1"
                  label="City"
                  placeholder="City"
                  v-model="user.city">
        </fg-input>
        <fg-input type="text"
                  class="col-md-4 px-1"
                  label="Country"
                  placeholder="Country"
                  v-model="user.country">
        </fg-input>
        <fg-input type="number"
                  class="col-md-4 pl-1"
                  label="Postal Code"
                  placeholder="ZIP Code"
                  v-model="user.postalCode">
        </fg-input>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>About Me</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Here can be your description"
                      v-model="user.aboutMe">

              </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Update Profile
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          company: 'Paper Dashboard',
          username: 'michael23',
          email: '',
          firstName: 'Mike',
          lastName: 'Andrew',
          address: 'Melbourne, Australia',
          city: 'melbourne',
          country: 'Australia',
          postalCode: '',
          aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
        }
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>

</style>
