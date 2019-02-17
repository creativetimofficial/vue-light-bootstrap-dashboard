# Contents

Discover what’s included in Bootstrap, including our precompiled and source code flavors.

<hr>

#### Vue Black Dashboard Structure

Once downloaded, unzip the compressed folder and you’ll see something like this:

```markdown
|-- Vue Black Dashboard
    |-- .babelrc  
    |-- .env
    |-- .eslintrc
    |-- .gitattributes
    |-- .gitignore
    |-- CHANGELOG.md
    |-- CONTRIBUTING.md
    |-- LICENSE.md
    |-- README.md
    |-- package.json
    |-- vue.config.js
    |-- src
        |-- App.vue
        |-- i18n.js
        |-- main.js
        |-- assets
        |   |-- css
        |   |   |-- nucleo-icons.css
        |   |-- demo
        |   |   |-- demo.css
        |   |-- fonts
        |   |   |-- nucleo.eot
        |   |   |-- nucleo.ttf
        |   |   |-- nucleo.woff
        |   |   |-- nucleo.woff2
        |   |-- sass
        |       |-- black-dashboard.scss
        |       |-- black-dashboard
        |           |-- bootstrap
        |           |-- custom
        |           |-- plugins
        |-- components
        |   |-- BaseAlert.vue
        |   |-- BaseButton.vue
        |   |-- BaseCheckbox.vue
        |   |-- BaseDropdown.vue
        |   |-- BaseNav.vue
        |   |-- BaseTable.vue
        |   |-- CloseButton.vue
        |   |-- Modal.vue
        |   |-- NavbarToggleButton.vue
        |   |-- index.js
        |   |-- Cards
        |   |   |-- Card.vue
        |   |   |-- StatsCard.vue
        |   |-- Charts
        |   |   |-- BarChart.js
        |   |   |-- LineChart.js
        |   |   |-- config.js
        |   |   |-- utils.js
        |   |-- Inputs
        |   |   |-- BaseInput.vue
        |   |-- NotificationPlugin
        |   |   |-- Notification.vue
        |   |   |-- Notifications.vue
        |   |   |-- index.js
        |   |-- SidebarPlugin
        |       |-- SideBar.vue
        |       |-- SidebarLink.vue
        |       |-- index.js
        |-- directives
        |   |-- click-ouside.js
        |-- layout
        |   |-- dashboard
        |       |-- Content.vue
        |       |-- ContentFooter.vue
        |       |-- DashboardLayout.vue
        |       |-- MobileMenu.vue
        |       |-- SidebarSharePlugin.vue
        |       |-- TopNavbar.vue
        |-- locales
        |   |-- ar.json
        |   |-- en.json
        |-- pages
        |   |-- Dashboard.vue
        |   |-- Icons.vue
        |   |-- Maps.vue
        |   |-- NotFoundPage.vue
        |   |-- Notifications.vue
        |   |-- Profile.vue
        |   |-- TableList.vue
        |   |-- Typography.vue
        |   |-- Dashboard
        |   |   |-- TaskList.vue
        |   |   |-- UserTable.vue
        |   |-- Notifications
        |   |   |-- NotificationTemplate.vue
        |   |-- Profile
        |       |-- EditProfileForm.vue
        |       |-- UserCard.vue
        |-- plugins
        |   |-- RTLPlugin.js
        |   |-- blackDashboard.js
        |   |-- globalComponents.js
        |   |-- globalDirectives.js
        |   |-- liveDemo.js
        |-- router
            |-- index.js
            |-- routes.js

```

#### Bootstrap components

Here is the list of Bootstrap 4 components that were restyled in Argon:

<div class="row row-grid mt-5">
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Alerts</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Badge</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Buttons</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Carousel</h6>
      </div>
    </div>
  </div>
</div>

<div class="row row-grid">
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Dropdowns</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Forms</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Modal</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Navs</h6>
      </div>
    </div>
  </div>
</div>

#### Vue Black Dashboard components

Besides giving the existing Bootstrap elements a new look, we added new ones, so that the interface and consistent and homogenous. Going through them, we added:

<div class="row row-grid mt-5">
    <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Sidebar</h6>
      </div>
    </div>
    </div>
    <div class="col-md-3">
        <div class="card shadow-sm">
          <div class="p-4 text-center">
            <h6 class="mb-0 text-white">Custom Inputs</h6>
          </div>
        </div>
      </div>
    <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Checkboxes</h6>
      </div>
    </div>
    </div>
    <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Notifications</h6>
      </div>
    </div>
    </div>
 </div>

<div class="row row-grid">
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Charts</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Font Awesome</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Nucleo icons</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0 text-white">Cards</h6>
      </div>
    </div>
  </div>
</div>
