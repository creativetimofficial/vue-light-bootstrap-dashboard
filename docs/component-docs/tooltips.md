# Tooltips

<hr>
We used, [V-tooltip directive](https://github.com/Akryum/v-tooltip).
It's a really handy directive and it's mainted by one of the core Vue contributors [Guillaume Chau (a.k.a Akryum)](https://github.com/Akryum)
The directive initialization can be found inside `src/main.js`
```js
import VTooltip from 'v-tooltip'
```
Global usage
```js
Vue.use(VTooltip)
```

### Simple tooltip
```html
/*vue*/
<desc>
</desc>
<template>
<div>
  <button class="btn btn-primary" v-tooltip="'Top tooltip'">Hover me</button>
  <button class="btn btn-primary" v-tooltip.bottom="'Bottom tooltip'">Bottom</button>
  <button class="btn btn-primary" v-tooltip.left="'Left tooltip'">Left</button>
  <button class="btn btn-primary" v-tooltip.right="'Right tooltip'">Left</button>
</div>
  
</template>

<script>
  export default {}
</script>
```
