# Checkboxes

<hr>
To use the custom checkbox controls you need to import the custom made component:
```js
import PCheckbox from 'src/components/UIComponents/Inputs/Checkbox.vue'
```
Global usage
```js
Vue.component(PCheckbox.name, PCheckbox)
```

For local usage
```js
export default {
  components: {
    PCheckbox
  }
}
```

## Custom checkboxes

```html
/*vue*/
<desc>
</desc>
<template>
    <div>
       <p-checkbox v-model="unchecked">Unchecked</p-checkbox>
       <p-checkbox  v-model="checked">Checked</p-checkbox>
       
       <p-checkbox disabled :checked="false">Disabled unchecked</p-checkbox>
       <p-checkbox disabled :checked="true">Disabled checked</p-checkbox>
    </div>
</template>

<script>
  export default {
    data () {
        return {
          unchecked: false,
          checked: true
        }
      }
  }
</script>
```

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| checked     | checked value   | boolean  |       true/false        |     false     |
| disabled     | disables checkbox  | boolean  |       true/false        |     false     |
| inline     | allows inline of multiple checkboxes  | boolean  |       true/false        |     false     |

### Checkbox Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | the updated value |
