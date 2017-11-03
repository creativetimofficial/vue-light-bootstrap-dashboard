# Notifications

<hr>
We restyled the classic Bootstrap Alert and gave it a more attractive look.
We used [Vue-notifyjs](https://github.com/cristijora/vue-notifyjs) to easily add notifications from anywhere within the app.

## Usage
To use Vue-notifyjs, you have to import it and declareit as a plugin.
```js
import VueNotify from 'vue-notifyjs'
import 'vue-notifyjs/themes/default.css'
Vue.use(VueNotify)
```
This is done inside `src/main.js` file.

### Trigger notificaitons with custom transition
```html
/*vue*/
<desc>
Vue-notifyjs has a default `list` transition which you can change through css in order to achieve your desired notification transition
</desc>
<template>
<div class="places-buttons">
  <notifications></notifications>
  <div class="row">
    <div class="col-md-6 col-md-offset-3 text-center">
        <p class="category">Click to view notifications</p>
     </h5>
    </div>
  </div>
  <div class="row">
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
  <div class="row">
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
</template>

<script>
  export default {
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
        this.$notify(
          {
            component: notification,
            icon: 'fa fa-gift',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }
</script>
<style lang="scss">
.vue-notifyjs.notifications{
  .alert{
   z-index: 100;
  }
  .list-move {
    transition: transform 0.3s, opacity 0.4s;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;

  }
  .list-enter-active {
    transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  }
  .list-leave-active {
    transition: transform 1s ease-out, opacity 0.4s ease-out;
  }

  .list-enter {
    opacity: 0;
    transform: scale(1.1);

  }
  .list-leave-to {
    opacity: 0;
    transform: scale(1.2, 0.7);
  }
}

</style>
```

For detailed usage please check out [Vue-notifyjs repo](https://github.com/cristijora/vue-notifyjs)
