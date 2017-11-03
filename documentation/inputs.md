# Inputs

<hr>
To use the custom form group inputs you need to import the custom made component:
```js
import fgInput from 'src/components/UIComponents/Inputs/formGroupInput.vue'
```
Global usage
```js
Vue.component(fgInput.name, fgInput)
```

For local usage
```js
export default {
  components: {
    fgInput
  }
}
```

## Custom form gorup inputs
The form group input component makes use of Vue's [InheritAttrs feature](https://vuejs.org/v2/api/#inheritAttrs) which basically let's
you extend a component very easily. In this case, form group input will accept any [Input attributes](https://www.w3schools.com/tags/tag_input.asp)
as well as [Bootstrap input groups](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs2.asp) through slots. 

### Simple with v-model
```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <fg-input placeholder="Simple input with v-model binding" v-model="inputVal"></fg-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputVal: ''
      }
    }
  }
</script>
```

### Disabled
```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <fg-input placeholder="Disabled input" disabled></fg-input>
  </div>
</template>

<script>
  export default {
    
  }
</script>
```

### With icons
```html
/*vue*/
<desc>
</desc>
<template>
  <div class="row">
      <fg-input class="col-xs-6"
                placeholder="Right icon" 
                addon-right-icon="fa fa-search">
      </fg-input>
      <fg-input  class="col-xs-6"
                 placeholder="Left icon" 
                 addon-left-icon="fa fa-search">
      </fg-input>
      <fg-input  class="col-xs-6"
                 placeholder="Icon as a button">
           <div class="input-group-btn" slot="addonRight">
               <button class="btn btn-primary">
                 <i class="fa fa-search"></i>
               </button>
           </div>
      </fg-input>
  </div>
</template>
<script>
  export default {
    
  }
</script>

```

### Different native type
```html
/*vue*/
<desc>
</desc>
<template>
  <div class="row">
      <fg-input class="col-xs-6"
                label="Password"
                placeholder="Password"
                value="mypassword"
                type="password">
       </fg-input>
       <fg-input  class="col-xs-6"
                  label="Number"
                  placeholder="Number"
                  value="23"
                  type="search">
        </fg-input>
  </div>
</template>
<script>
  export default {
    
  }
</script>

```


### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | input value   | string  |       —        |     —     |
| label     | input label  | string  |       —        |     —     |
| addonRightIcon     | right icon for input (is overriden by addonRight slot)   | string  |       —        |     —     |
| addonLeftIcon     | left icon for input (is overriden by addonLeft slot)   | string  |       —        |     —     |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| input  | triggers when the binding value changes (default for v-model) | the updated value |
