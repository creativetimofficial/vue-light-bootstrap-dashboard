<template>
  <li class="dropdown nav-item"
      :is="tag"
      :class="{show: isOpen}"
      aria-haspopup="true"
      :aria-expanded="isOpen"
      @click="toggleDropDown"
      v-click-outside="closeDropDown">

    <a class="nav-link dropdown-toggle"
       data-toggle="dropdown">
      <slot name="title">
        <i :class="icon"></i>
        <span class="no-icon">{{title}}</span>
        <b class="caret"></b>
      </slot>
    </a>
    <div class="dropdown-menu" v-show="isOpen">
      <slot></slot>
    </div>
  </li>
</template>
<script>
  export default {
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
<style scoped>
  .dropdown .dropdown-toggle{
    cursor: pointer;
  }
</style>
