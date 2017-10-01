<template>
  <div class="card">
    <div class="image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
  export default {}
</script>
<style>
</style>
