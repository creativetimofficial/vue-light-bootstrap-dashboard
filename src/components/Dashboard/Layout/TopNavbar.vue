<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Dashboard</a>
      <div class="navbar-toggler navbar-toggler-right">
        <button type="button"
                class="navbar-toggle"
                :class="{toggled: $sidebar.showSidebar}"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="toggleSidebar">
          <span class="navbar-toggler-bar burger-lines"></span>
          <span class="navbar-toggler-bar burger-lines"></span>
          <span class="navbar-toggler-bar burger-lines"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" data-toggle="dropdown">
              <i class="fa fa-dashboard"></i>
            </a>
          </li>
          <drop-down>
            <template slot="title">
              <i class="fa fa-globe"></i>
              <b class="caret"></b>
              <span class="notification">5</span>
            </template>
            <a class="dropdown-item" href="#">Notification 1</a>
            <a class="dropdown-item" href="#">Notification 2</a>
            <a class="dropdown-item" href="#">Notification 3</a>
            <a class="dropdown-item" href="#">Notification 4</a>
            <a class="dropdown-item" href="#">Another notification</a>
          </drop-down>
          <li class="nav-item">
            <a href="" class="nav-link">
              <i class="fa fa-search"></i>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">
              Account
            </a>
          </li>
          <drop-down title="">
            <a href="#">Action</a>
            <a href="#">Another action</a>
            <a href="#">Something</a>
            <a href="#">Another action</a>
            <a href="#">Something</a>
            lass="divider">
            <a href="#">Separated link</a>
          </drop-down>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
