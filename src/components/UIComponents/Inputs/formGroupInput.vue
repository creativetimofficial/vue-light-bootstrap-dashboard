<template>
  <div class="form-group">
    <label v-if="label">
      {{label}}
    </label>
    <input class="form-control border-input"
           v-bind="$attrs"
           v-on="$listeners"
           :value="value"
           @input="$emit('input',$event.target.value)">
  </div>
</template>
<script>
  export default {
    name: 'fg-input',
    inheritAttrs: false,
    props: {
      label: String,
      value: [String, Number]
    }
  }

</script>
<style>

</style>
