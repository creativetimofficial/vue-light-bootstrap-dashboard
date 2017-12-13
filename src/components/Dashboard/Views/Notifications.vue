<template>
  <div class="content">
    <div class="container-fluid">
      <card>
        <template slot="header">
          <h4 class="card-title">Notifications</h4>
          <p class="card-category">Handcrafted by our friend <a target="_blank" href="https://github.com/cristijora">Cristi Jora</a>. Please checkout the <a
            href="https://github.com/cristijora/vue-notifyjs" target="_blank">full documentation.</a></p>

        </template>
        <div class="row">
          <div class="col-md-6">
            <h5>Notifications Style</h5>
            <div class="alert alert-info">
              <span>This is a plain notification</span>
            </div>
            <div class="alert alert-info">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span>This is a notification with close button.</span>
            </div>
            <div class="alert alert-info alert-with-icon" data-notify="container">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span data-notify="icon" class="nc-icon nc-app"></span>
              <span data-notify="message">This is a notification with close button and icon.</span>
            </div>
            <div class="alert alert-info alert-with-icon" data-notify="container">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span data-notify="icon" class="nc-icon nc-app"></span>
              <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
            </div>
          </div>
          <div class="col-md-6">
            <h5>Notification states</h5>
            <div class="alert alert-info">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span><b> Info - </b> This is a regular notification made with ".alert-info"</span>
            </div>
            <div class="alert alert-success">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span><b> Success - </b> This is a regular notification made with ".alert-success"</span>
            </div>
            <div class="alert alert-warning">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span><b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
            </div>
            <div class="alert alert-danger">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span><b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
            </div>
          </div>
        </div>
        <br>
        <br>
        <div class="places-buttons">
          <div class="row justify-content-center">
            <div class="col-6 text-center">
              <h5>Notifications Places
                <p class="category">Click to view notifications</p>
              </h5>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3 col-md-offset-1">
              <button class="btn btn-default btn-block" @click="notifyVue('top', 'left')">Top Left</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('top', 'center')">Top Center</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('top', 'right')">Top Right</button>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3 col-md-offset-1">
              <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'left')">Bottom Left</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'center')">Bottom Center</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'right')">Bottom Right</button>
            </div>

          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      }
    },
    methods: {
      notifyVue (verticalAlign, horizontalAlign) {
        const notification = {
          template: `<span>Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.</span>`
        }

        const color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            component: notification,
            icon: 'nc-icon nc-app',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }

</script>
<style lang="scss">

</style>
