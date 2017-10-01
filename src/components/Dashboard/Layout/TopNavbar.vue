<template>
  <nav class="navbar navbar-default navbar-fixed">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Dashboard</a>
      </div>
      <ul class="nav navbar-nav navbar-left">
        <li>
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-dashboard"></i>
          </a>
        </li>
        <drop-down>
          <template slot="title">
            <i class="fa fa-globe"></i>
            <b class="caret"></b>
            <span class="notification">5</span>
          </template>
          <li><a href="#">Notification 1</a></li>
          <li><a href="#">Notification 2</a></li>
          <li><a href="#">Notification 3</a></li>
          <li><a href="#">Notification 4</a></li>
          <li><a href="#">Another notification</a></li>
        </drop-down>
        <li>
          <a href="">
            <i class="fa fa-search"></i>
          </a>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="">
            Account
          </a>
        </li>
        <drop-down title="Dropdown">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something</a></li>
          <li class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </drop-down>
        <li>
          <a href="#">
            Log out
          </a>
        </li>
      </ul>
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
