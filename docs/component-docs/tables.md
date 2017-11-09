# Tables

<hr>
To use the table component, import it
```js
import LTable from 'src/components/UIComponents/Table.vue'
```
Global usage
```js
Vue.component(LTable.name, LTable)
```

For local usage
```js
export default {
  components: {
    LTable
  }
}
```

!> **Note** This table component is a very simple table wrapper which uses scoped slots.

If you need more than this, here are a few recommendations
- [Table component based on server data](https://github.com/ratiw/vuetable-2)
- [Customizable Element UI tables](http://element.eleme.io/#/en-US/component/table)


!> **Note** This table styles from the documentation examples might be different from the original styles since the documentation site has slightly
different css.

### Simple
```html
/*vue*/
<desc>
</desc>
<template>
<l-table class="table table-hover table-striped"
         :columns="tableColumns"
         :data="tableData">
</l-table>
</template>

<script>
  export default {
    data() {
      return {
        tableColumns: ['Id', 'Name', 'Salary', 'Country', 'City'],
        tableData: [{
            id: 1,
            name: 'Dakota Rice',
            salary: '$36.738',
            country: 'Niger',
            city: 'Oud-Turnhout'
          },
          {
            id: 2,
            name: 'Minerva Hooper',
            salary: '$23,789',
            country: 'Curaçao',
            city: 'Sinaai-Waas'
          },
          {
            id: 3,
            name: 'Sage Rodriguez',
            salary: '$56,142',
            country: 'Netherlands',
            city: 'Baileux'
          },
          {
            id: 4,
            name: 'Philip Chaney',
            salary: '$38,735',
            country: 'Korea, South',
            city: 'Overland Park'
          },
          {
            id: 5,
            name: 'Doris Greene',
            salary: '$63,542',
            country: 'Malawi',
            city: 'Feldkirchen in Kärnten'
          }]
      }
    }
  }
</script>
```

### Customizable rows and columns through slots
```html
/*vue*/
<desc>
</desc>
<template>
<l-table class="table table-hover table-striped"
         :columns="tableColumns"
         :data="tableData">
    <template slot="columns">
        <th>Id</th>
        <th>Name</th>
        <th><i class="fa fa-money"></i> Salary</th>
        <th>Operations</th>
    </template>
    <template slot-scope="{row}">
      <td>{{row.id}}</td>
      <td><b>{{row.name}}</b></td>
      <td>{{row.salary}}</td>
      <td>
        <button class="btn btn-icon btn-info" @click="handleEdit(row)"><i class="fa fa-edit"></i></button>
        <button class="btn btn-icon btn-danger" @click="handleDelete(row)"><i class="fa fa-trash"></i></button>
      </td>
    </template>
</l-table>
</template>

<script>
  export default {
    data() {
      return {
        tableColumns: ['Id', 'Name', 'Salary', 'Operations'],
        tableData: [{
            id: 1,
            name: 'Dakota Rice',
            salary: '$36.738',
            country: 'Niger',
            city: 'Oud-Turnhout'
          },
          {
            id: 2,
            name: 'Minerva Hooper',
            salary: '$23,789',
            country: 'Curaçao',
            city: 'Sinaai-Waas'
          },
          {
            id: 3,
            name: 'Sage Rodriguez',
            salary: '$56,142',
            country: 'Netherlands',
            city: 'Baileux'
          },
          {
            id: 4,
            name: 'Philip Chaney',
            salary: '$38,735',
            country: 'Korea, South',
            city: 'Overland Park'
          },
          {
            id: 5,
            name: 'Doris Greene',
            salary: '$63,542',
            country: 'Malawi',
            city: 'Feldkirchen in Kärnten'
          }]
      }
    },
    methods: {
      handleEdit(row){
        console.log(`You want to edit row with id: ${row.id}`)
      },
      handleDelete(row){
        console.log(`You want to delete row with id: ${row.id}`)
      }
    }
  }
</script>
```


### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| columns     | Array of column values   | Array  |       Lower case and uppper case key values        |     —     |
| data     | Array of data objects  | Array  |       Any data object        |     —     |


### Slots
| Name | Description |
|---------- |-------- |
|  default  | Content for table data. Can be used as a scoped slot and sends {row} as slot data |
|  columns  | Content for columns |
