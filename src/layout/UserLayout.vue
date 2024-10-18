<template>
    <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2>List Articles</h2>
            <b-form-group label="Search" label-for="search-input" class="mb-0">
                <b-form-input id="search-input" v-model="searchQuery" placeholder="Search article..."
                    @input="fetchArticles"></b-form-input>
            </b-form-group>
        </div>

        <b-form-group label="Category" label-for="category-dropdown">
            <b-form-select id="category-dropdown" v-model="selectedCategory" :options="categories"
                @change="fetchArticles"></b-form-select>
        </b-form-group>

        <div class="row">
            <div class="col-md-4 mb-4" v-for="article in paginatedArticles" :key="article.id">
                <b-card :img-src="'http://127.0.0.1/storage/' + article.image_url" img-alt="Image" img-top>
                    <b-card-title>{{ article.title }}</b-card-title>
                    <b-card-text>
                        <p>{{ truncatedContent(article.content) }}</p>
                        <small class="text-muted">Author: {{ article.user.name }}</small><br />
                        <small class="text-muted">Created: {{ formatDate(article.created_at) }}</small>
                    </b-card-text>
                    <b-button variant="primary" @click="viewArticle(article.id)">Xem chi tiết</b-button>
                </b-card>
            </div>
        </div>

        <b-pagination v-model="currentPage" :total-rows="totalArticles" :per-page="articlesPerPage"
            @change="fetchArticles" class="mt-4"></b-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
            selectedCategory: null,
            articles: [],
            currentPage: 1,
            articlesPerPage: 3,
            categories: [],
        };
    },
    async created() {
        await this.fetchCategories();
        await this.fetchArticles();
    },
    computed: {
        totalArticles() {
            return this.articles.length;
        },
        paginatedArticles() {
            const start = (this.currentPage - 1) * this.articlesPerPage;
            return this.articles.slice(start, start + this.articlesPerPage);
        }
    },
    methods: {
        async fetchCategories() {
            axios.get('http://127.0.0.1:8000/api/categories')
                .then(response => {
                    this.categories = response.data.map(category => ({
                        value: category.id,
                        text: category.title,
                    }));
                })
                .catch(error => {
                    console.error('Error fetching categories:', error);
                });
        },
        async fetchArticles() {
            axios.get('http://127.0.0.1:8000/api/article', {
                params: {
                    search: this.searchQuery,
                    category: this.selectedCategory,
                    page: this.currentPage,
                }
            })
                .then(response => {
                    this.articles = response.data;
                })
                .catch(error => {
                    console.error('Error fetching articles:', error);
                });
        },
        truncatedContent(content) {
            const plainText = content.replace(/<\/?[^>]+(>|$)/g, "");
            const truncated = plainText.length > 200 ? plainText.substring(0, 200) + "..." : plainText;
            
            return truncated.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        },
        viewArticle(id) {
            this.$router.push({ name: 'ArticleDetail', params: { id } });
        },
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
    }
};
</script>

<style scoped>
.card {
    height: 100%;
}
</style>