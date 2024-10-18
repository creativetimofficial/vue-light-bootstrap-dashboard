<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">List User</h4>
              <button type="button" @click="addUser()">Create User</button>
            </template>
            <b-table :items="users" :fields="fields" hover striped>
              <template #cell(action)="data">
                <b-button size="sm" variant="primary" @click="editUser(data.item)">Edit</b-button>
                <b-button size="sm" variant="danger" @click="deleteUser(data.item.id)">Delete</b-button>
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
      users: [],
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
        { key: 'created', label: 'Created' },
        { key: 'action', label: 'Action' }
      ],
    }
  },
  created() {
    axios
      .get('http://127.0.0.1:8000/api/users')
      .then((response) => {
        const users = response.data.map(user => {
          return {
            id: user.id,
            email: user.email,
            role: user.roles[0].name,
            created: user.created_at
          }
        })
        this.users = users
      })
      .catch((error) => {
        console.log(error, 'error')
      })
  },
  methods: {
    addUser() {
      this.$router.push({ name: 'UsersAdd' })
    },
    editUser(user) {
      this.$router.push({ name: 'UsersEdit', params: { id: user.id } });
    },
    deleteUser(userId) {
      if (confirm('Are you sure you want to delete this user?')) {
        axios.delete(`http://127.0.0.1:8000/api/users/${userId}`)
          .then(response => {
            if(response.status == 200){
              const index = this.users.findIndex(user => user.id == userId);
              if (index !== -1) {
                  this.users.splice(index, 1);
              }
            }
          })
          .catch(error => {
            console.error('Failed to delete user:', error);
            alert('Failed to delete user.');
          });
      }
    }
  }
}
</script>
<style></style>
