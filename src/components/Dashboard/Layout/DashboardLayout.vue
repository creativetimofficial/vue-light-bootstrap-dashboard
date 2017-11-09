<template>
  <div class="wrapper">
    <side-bar :background-color="sidebarBackground"
              :background-image="sidebarBackgroundImage"
              >
      <sidebar-link to="/admin/overview">
        <i class="pe-7s-graph"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="pe-7s-user"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/admin/table-list">
        <i class="pe-7s-note2"></i>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/admin/typography">
        <i class="pe-7s-news-paper"></i>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <i class="pe-7s-science"></i>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="pe-7s-map-marker"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="pe-7s-bell"></i>
        <p>Notifications</p>
      </sidebar-link>
    </side-bar>
    <sidebar-share :color.sync="sidebarBackground"
                   :image.sync="sidebarBackgroundImage">

    </sidebar-share>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import SidebarShare from './SidebarSharePlugin.vue'

  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      SidebarShare
    },
    data () {
      return {
        sidebarBackground: 'blue',
        sidebarBackgroundImage: 'static/img/sidebar-5.jpg'
      }
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
