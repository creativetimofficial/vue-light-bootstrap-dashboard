<template>
  <div class="l-checkbox checkbox" :class="checkboxType">
    <input :id="cbId" type="checkbox"
           :checked="model===true"
           :disabled="disabled"
           v-model="model">
    <label :for="cbId">
      <slot></slot>
    </label>
  </div>
</template>
<script>
  export default{
    name: 'l-checkbox',
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: [Array, Boolean],
      disabled: [Boolean, String],
      type: {
        type: String,
        default: 'neutral'
      }
    },
    data () {
      return {
        cbId: ''
      }
    },
    computed: {
      model: {
        get () {
          return this.checked
        },
        set (check) {
          this.$emit('change', check)
        }
      },
      checkboxType () {
        if (this.type) {
          return `checkbox-${this.type}`
        }
      }
    },
    created () {
      this.cbId = Math.random().toString(16).slice(2)
    }
  }
</script>
<style>
</style>
