# Plugin Notify

We created a custom notification plugin so you can easily display pretty notifications
in your dashboard.


The plugin is globally registered inside `blackDashboard.js` file and you can use it everywhere 
in the dashboard.

In order for the plugin to work, we need to declare this piece of code in the top most component 
of our app. This is done inside `App.vue` file.

You can trigger notifications both from template and javascript via `$notify` or `this.$notify` method.
```html
<notifications></notifications>
```

##### Example

:::demo
```html
<div>
  <base-button @click="$notify('Simple notification')">Simple</base-button>
  <base-button @click="$notify({type: 'primary', message: 'Primary Notification'})">Primary</base-button>
  <base-button @click="$notify({type: 'info', message: 'Info Notification'})">Info</base-button>
  <base-button @click="$notify({type: 'success', message: 'Success Notification'})">Success</base-button>
  <base-button @click="$notify({type: 'warning', message: 'Warning Notification'})">Warning</base-button>
  <base-button @click="$notify({type: 'danger', message: 'Danger Notification'})">Danger</base-button>
</div>
```
:::

#### Notification position 

:::demo
```html
<div>
  <base-button @click="notifyTopLeft">Top left</base-button>
  <base-button @click="notifyTopCenter">Top center</base-button>
  <base-button @click="notifyTopRight">Top right</base-button>
  
  <base-button @click="notifyBottomLeft">Bottom left</base-button>
  <base-button @click="notifyBottomCenter">Bottom center</base-button>
  <base-button @click="notifyBottomRight">Bottom right</base-button>
</div>

<script>
export default {
  methods: {
    notifyTopRight() {
      this.$notify({verticalAlign: 'top', horizontalAlign: 'right', message: 'Top right'});
    },
    notifyTopLeft() {
      this.$notify({verticalAlign: 'top', horizontalAlign: 'left', message: 'Top left'});
    },
    notifyTopCenter() {
      this.$notify({verticalAlign: 'top', horizontalAlign: 'center', message: 'Top center'});
    },
    notifyBottomLeft() {
      this.$notify({verticalAlign: 'bottom', horizontalAlign: 'left', message: 'Bottom left'});
    },
    notifyBottomCenter() {
      this.$notify({verticalAlign: 'bottom', horizontalAlign: 'center', message: 'Bottom center'});
    },
    notifyBottomRight() {
      this.$notify({verticalAlign: 'bottom', horizontalAlign: 'right', message: 'Bottom center'});
    }
  }
}
</script>

```
:::

<script>
export default {
  methods: {
    notifyTopRight() {
      this.$notify({verticalAlign: 'top', horizontalAlign: 'right', message: 'Top right'});
    },
    notifyTopLeft() {
      this.$notify({verticalAlign: 'top', horizontalAlign: 'left', message: 'Top left'});
    },
    notifyTopCenter() {
      this.$notify({verticalAlign: 'top', horizontalAlign: 'center', message: 'Top center'});
    },
    notifyBottomLeft() {
      this.$notify({verticalAlign: 'bottom', horizontalAlign: 'left', message: 'Bottom left'});
    },
    notifyBottomCenter() {
      this.$notify({verticalAlign: 'bottom', horizontalAlign: 'center', message: 'Bottom center'});
    },
    notifyBottomRight() {
      this.$notify({verticalAlign: 'bottom', horizontalAlign: 'right', message: 'Bottom center'});
    }
  }
}
</script>


#### Notification props

<props-table component-name="notification"></props-table>
