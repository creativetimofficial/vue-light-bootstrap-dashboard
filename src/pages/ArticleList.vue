<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">List Article</h4>
              <button type="button" @click="addArticle()">Create Article</button>
            </template>
            <b-table :items="articles" :fields="fields" hover striped>
              <template #cell(image)="data">
                <div v-if="data.item.image">
                  <img :src="getImageUrl(data.item.image)" alt="Article Image" width="100">
                </div>
                <div v-else>
                  No Image
                </div>
              </template>
              <template #cell(action)="data">
                <b-button size="sm" variant="primary" @click="editArticle(data.item)">Edit</b-button>
                <b-button size="sm" variant="danger" @click="deleteArticle(data.item.id)">Delete</b-button>
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
      articles: [],
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'user', label: 'Author' },
        { key: 'image', label: 'Image' },
        { key: 'title', label: 'Title' },
        // { key: 'content', label: 'Content' },
        { key: 'action', label: 'Action' }
      ],
    }
  },
  created() {
    axios
      .get('http://127.0.0.1:8000/api/articles')
      .then((response) => {
        console.log(response.data)
        const articles = response.data.map(article => {
          return {
            id: article.id,
            title: article.title,
            content: article.content,
            image: article.image_url,
            user: article.user.name,
            created: article.created_at
          }
        })
        this.articles = articles
      })
      .catch((error) => {
        console.log(error, 'error')
      })
  },
  methods: {
    addArticle() {
      this.$router.push({ name: 'ArticleAdd' })
    },
    editArticle(article) {
      this.$router.push({ name: 'ArticleEdit', params: { id: article.id } });
    },
    deleteArticle(articleId) {
      if (confirm('Are you sure you want to delete this Article?')) {
        axios.delete(`http://127.0.0.1:8000/api/articles/${articleId}`)
          .then(response => {
            if (response.status == 200) {
              const index = this.articles.findIndex(article => article.id == articleId);
              if (index !== -1) {
                this.articles.splice(index, 1);
              }
            }
          })
          .catch(error => {
            console.error('Failed to delete Article:', error);
            alert('Failed to delete Article.');
          });
      }
    },
    getImageUrl(imagePath) {
      return `http://127.0.0.1:8000/storage/${imagePath}`;
    },
  }
}
</script>
<style></style>