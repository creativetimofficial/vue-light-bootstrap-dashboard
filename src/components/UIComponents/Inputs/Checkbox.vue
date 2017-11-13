<template>
  <div class="form-check" :class="inlineClass">
    <label :for="cbId" class="form-check-label">
      <input :id="cbId"
             class="form-check-input"
             type="checkbox"
             :disabled="disabled"
             v-model="model" />
      <span class="form-check-sign">
        <slot></slot>
      </span>
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
