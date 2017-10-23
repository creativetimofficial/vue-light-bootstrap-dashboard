<template>
  <div class="checkbox" :class="inlineClass">
    <input :id="cbId"
           type="checkbox"
           :disabled="disabled"
           v-model="model" />
    <label :for="cbId">
      <slot></slot>
    </label>
  </div>
</template>
<script>
  export default{
    name: 'p-checkbox',
    model: {
      prop: 'checked'
    },
    props: {
      checked: [Array, Boolean],
      disabled: [Boolean, String],
      inline: Boolean
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
          this.$emit('input', check)
        }
      },
      inlineClass () {
        if (this.inline) {
          return `checkbox-inline`
        }
      }
    },
    created () {
      this.cbId = Math.random().toString(16).slice(2)
    }
  }
</script>
