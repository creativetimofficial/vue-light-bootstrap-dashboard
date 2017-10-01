<template>
  <Card class="card-stats">
    <div class="row">
      <div class="col-xs-5" v-if="$slots.header">
        <slot name="header"></slot>
      </div>
      <div class="col-xs-7" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="footer" v-if="$slots.footer">
      <hr/>
      <slot name="footer"></slot>
    </div>
  </Card>
</template>
<script>
  import Card from './Card.vue'
  export default {
    components: {
      Card
    },
    name: 'stats-card'
  }

</script>
<style>

</style>
