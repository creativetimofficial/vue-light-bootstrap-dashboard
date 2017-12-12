<template>
  <card class="card-stats">
    <div class="row">
      <div class="col-5" v-if="$slots.header">
        <div class="icon-big text-center">
          <slot name="header"></slot>
        </div>
      </div>
      <div class="col-7" v-if="$slots.content">
        <div class="numbers">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <div slot="footer" class="stats" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </card>
</template>
<script>
  import Card from './Card.vue'
  export default {
    name: 'stats-card',
    components: {
      Card
    }
  }

</script>
<style>

</style>
