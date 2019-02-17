<template>
  <div class="form-check" :class="{disabled: disabled}">
    <label :for="cbId" class="form-check-label">
      <input :id="cbId"
             class="form-check-input"
             type="checkbox"
             :disabled="disabled"
             v-model="model" />
      <span class="form-check-sign"></span>
    </label>
    <span>
      <slot></slot>
    </span>

  </div>
</template>
<script>
  export default{
    name: 'base-checkbox',
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
