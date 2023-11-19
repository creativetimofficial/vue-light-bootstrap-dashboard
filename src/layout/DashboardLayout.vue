<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/admin/ride">
        <i class="fa fa-bicycle"></i>
        <p>Bike Rental</p>
      </sidebar-link>
      <sidebar-link to="/admin/station_list">
        <i class="nc-icon nc-notes"></i>
        <p>Station List</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/user_history">
        <i class="nc-icon nc-paper-2"></i>
        <p>User History</p>
      </sidebar-link> -->
      <sidebar-link to="/admin/user_history_admin">
        <i class="nc-icon nc-paper-2"></i>
        <p>User History</p>
      </sidebar-link>
      <sidebar-link to="/admin/bike_history">
        <i class="nc-icon nc-paper-2"></i>
        <p>Bike History</p>
      </sidebar-link>
      
      <!-- <template slot="bottom-links">
        <sidebar-link class="active"
                      to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>Upgrade to PRO</p>
        </sidebar-link>
      </template> -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <!-- <content-footer></content-footer> -->
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
