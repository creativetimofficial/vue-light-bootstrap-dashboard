<template>
  <li class="dropdown"
      :is="tag"
      :class="{open:isOpen}"
      @click="toggleDropDown"
      v-click-outside="closeDropDown">
    <a class="dropdown-toggle btn-rotate" data-toggle="dropdown" href="javascript:void(0)">
      <slot name="title">
        <i :class="icon"></i>
         {{title}}
        <b class="caret"></b>
      </slot>
    </a>
    <ul class="dropdown-menu">
      <slot></slot>
    </ul>
  </li>
</template>
<script>

  export default{
    name: 'drop-down',
    props: {
      title: String,
      icon: String,
      tag: {
        type: String,
        default: 'li'
      }
    },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleDropDown () {
        this.isOpen = !this.isOpen
        this.$emit('change', this.isOpen)
      },
      closeDropDown () {
        this.isOpen = false
        this.$emit('change', this.isOpen)
      }
    }
  }
</script>
