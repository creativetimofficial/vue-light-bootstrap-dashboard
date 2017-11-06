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
    <div class="footer" v-if="$slots.footer">
      <hr>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'card'
  }
</script>
<style>
</style>
