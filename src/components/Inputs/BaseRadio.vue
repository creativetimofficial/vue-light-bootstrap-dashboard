<template>
  <div class="form-check-radio">
    <label :for="cbId" class="form-check-label">
      <input :id="cbId"
             type="radio"
             :disabled="disabled"
             :value="label"
             v-model="model" />
      <span class="form-check-sign">
        <slot></slot>
      </span>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'base-radio',
    props: {
      label: [String, Number],
      disabled: [Boolean, String],
      value: [String, Boolean],
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
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      },
      inlineClass () {
        if (this.inline) {
          return `radio-inline`
        }
        return ''
      }
    },
    created () {
      this.cbId = Math.random().toString(16).slice(2)
    }
  }
</script>
