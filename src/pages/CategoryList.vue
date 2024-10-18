<template>
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
              <template slot="header">
                <h4 class="card-title">List Category</h4>
                <button type="button" @click="addCate()">Create Category</button>
              </template>
              <b-table :items="categories" :fields="fields" hover striped>
                <template #cell(action)="data">
                  <b-button size="sm" variant="primary" @click="editCate(data.item)">Edit</b-button>
                  <b-button size="sm" variant="danger" @click="deleteCate(data.item.id)">Delete</b-button>
                </template>
              </b-table>
            </card>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  export default {
    components: {
      LTable,
      Card
    },
    data() {
      return {
        categories: [],
        fields: [
          { key: 'id', label: 'ID' },
          { key: 'title', label: 'title' },
          { key: 'description', label: 'description' },
          { key: 'created', label: 'Created' },
          { key: 'action', label: 'Action' }
        ],
      }
    },
    created() {
      axios
        .get('http://127.0.0.1:8000/api/categories')
        .then((response) => {
          const categories = response.data.map(category => {
            return {
              id: category.id,
              title: category.title,
              description: category.description,
              created: category.created_at
            }
          })
          this.categories = categories
        })
        .catch((error) => {
          console.log(error, 'error')
        })
    },
    methods: {
      addCate() {
        this.$router.push({ name: 'CategoryAdd' })
      },
      editCate(cate) {
        this.$router.push({ name: 'CategoryEdit', params: { id: cate.id } });
      },
      deleteCate(cateId) {
        if (confirm('Are you sure you want to delete this category?')) {
          axios.delete(`http://127.0.0.1:8000/api/categories/${cateId}`)
            .then(response => {
              if(response.status == 200){
                const index = this.categories.findIndex(category => category.id == cateId);
                if (index !== -1) {
                    this.categories.splice(index, 1);
                }
              }
            })
            .catch(error => {
              console.error('Failed to delete category:', error);
              alert('Failed to delete category.');
            });
        }
      }
    }
  }
  </script>
  <style></style>
  