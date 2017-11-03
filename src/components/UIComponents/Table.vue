<template>
  <table class="table">
    <thead>
    <slot name="columns">
      <th v-for="column in columns">{{column}}</th>
    </slot>
    </thead>
    <tbody>
    <tr v-for="item in data">
      <slot :item="item">
        <td v-for="column in columns" v-if="hasValue(item, column)">{{itemValue(item, column)}}</td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'l-table',
    props: {
      columns: Array,
      data: Array,
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      }
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      }
    }
  }
</script>
<style>
</style>
