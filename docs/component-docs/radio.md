# Radio buttons

<hr>
To use the custom radio buttons you need to import the custom made component:
```js
import PRadio from 'src/components/UIComponents/Inputs/Radio.vue'
```
Global usage
```js
Vue.component(PRadio.name, PRadio)
```

For local usage
```js
export default {
  components: {
    PRadio
  }
}
```

## Custom radio buttons

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
     <p-radio v-model="enabledRadio" label="1">Radio is off</p-radio>
     <p-radio v-model="enabledRadio" label="2">Radio is on</p-radio>
   
     <p-radio disabled v-model="disabledRadio" label="1">Disabled radio is off</p-radio>
     <p-radio disabled v-model="disabledRadio" label="2">Disabled radio is on</p-radio>
  </div>
</template>

<script>
  export default {
    data () {
        return {
           enabledRadio: '2',
           disabledRadio: '2',
        }
      }
  }
</script>
```

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | radio value   | string/number  |       —        |     —     |
| label     | radio label to be identified   | string/number  |       —        |     —     |
| disabled     | disables radio button  | boolean  |       true/false        |     false     |
| inline     | allows inline of multiple radios  | boolean  |       true/false        |     false     |

### Radio Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| input  | triggers when the binding value changes | the updated value |
