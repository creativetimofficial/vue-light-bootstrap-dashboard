# Dropdown

<hr>
To use the custom dropdown you need to import the custom made component:
```js
import DropDown from 'src/components/UIComponents/Dropdown.vue'
```
Global usage
```js
Vue.component(DropDown.name, DropDown)
```

For local usage
```js
export default {
  components: {
    DropDown
  }
}
```
!> **Note** Drop-down uses a click outside directive internally. You will get a warning if the directive is not imported.
You can find the declaration of this directive in `src/globalDirectives.js`

### Simple
```html
/*vue*/
<desc>
You can specify the tag you the drop-down to be rendered as through the `tag` prop
</desc>
<template>
<drop-down tag="div" title="Simple">
  <li><a>Notification 1</a></li>
  <li><a>Notification 2</a></li>
  <li><a>Notification 3</a></li>
  <li><a>Notification 4</a></li>
  <li><a>Another notification</a></li>
</drop-down>
</template>

<script>
  export default {}
</script>
```

### As icon
```html
/*vue*/
<desc>
</desc>
<template>
<drop-down tag="div">
  <template slot="title">
    <i class="fa fa-globe"></i>
    <span class="text-danger">5</span>
    <b class="caret"></b>
  </template>
  <li><a href="#">Notification 1</a></li>
  <li><a href="#">Notification 2</a></li>
  <li><a href="#">Notification 3</a></li>
  <li><a href="#">Notification 4</a></li>
  <li><a href="#">Another notification</a></li>
</drop-down>
</template>

<script>
  export default {}
</script>
```


### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | Dropdown title   | string  |       —        |     —     |
| icon     | Dropdown icon as a css class  | string  |       —        |     —     |
| tag     | html tag that you want the dropdown to be rendered as  | string  |       —        |     li     |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the dropdown is opened/closed | the updated value |

### Slots
| Name | Description |
|---------- |-------- |
|  default  | content for dropdown menu |
|  title  | content for dropdown title|
