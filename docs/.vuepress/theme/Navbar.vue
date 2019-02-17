<template>
    <base-nav class="main-nav flex-row align-items-md-center" type="" effect="light" expand>
        <a slot="brand" class="navbar-brand mr-0 mr-md-2" href="/"
           aria-label="Bootstrap">
            Vue Black Dashboard
        </a>

        <div class="row" slot="content-header" slot-scope="{closeMenu}">
            <div class="col-6 collapse-brand">
                <a href="/">

                </a>
            </div>
            <div class="col-6 collapse-close">
                <close-button @click="closeMenu"></close-button>
            </div>
        </div>


        <div class="d-none d-sm-block ml-auto">
            <ul class="navbar-nav ct-navbar-nav flex-row align-items-center">

            </ul>
        </div>
      <div class="navbar-nav-scroll ml-md-auto ">
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
               target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
               target="_blank">
              <i class="fab fa-dribbble"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://www.github.com/creativetimofficial"
               target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/vue-black-dashboard"><i class="tim-icons icon-tv-2"></i> Live Preview</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/creativetimofficial/vue-black-dashboard" target="_blank" rel="noopener"><i class="tim-icons icon-shape-star"></i> Help with a star</a>
          </li>
        </ul>
      </div>
      <SearchBox v-if="$site.themeConfig.search !== false"/>
    </base-nav>
</template>
<script>
  import SearchBox from '../../node_modules/vuepress/lib/default-theme/SearchBox.vue';

  export default {
    components: {
      SearchBox
    }
  }
</script>
<style lang="scss">
    nav.main-nav {
      z-index: 50;
        &.navbar {
            background-color: #42b883;
            box-shadow: rgba(116, 129, 141, .1) 0 1px 1px 0;
            position: fixed;
            .container {
                max-width: 100%;
                width: 100%;
            }
            .navbar-brand,
            .navbar-brand:hover{
                color: white;
            }
        }

        &.navbar .nav-link {
            color: white !important;
            &:hover {
                border: 0 !important;
                margin: 0 !important;
            }
            &.router-link-active {
                color: white !important;
                border-bottom: 2px solid white !important;
            }
        }

        &.navbar .search-box .suggestion a {
            color: inherit;
        }
    }
</style>
