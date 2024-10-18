<template>
    <div class="container mt-5">
        <b-form @submit.prevent="onSubmit">
            <b-form-group label="Title" label-for="title-input">
                <b-form-input
                    id="title-input"
                    v-model="form.title"
                    placeholder="Enter the title"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Description" label-for="description-input">
                <b-form-textarea
                    id="description-input"
                    v-model="form.description"
                    placeholder="Enter the description"
                    rows="3"
                    required
                ></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">UPDATE</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                title: '',
                description: ''
            }
        };
    },
    methods: {
        onSubmit() {
            const categoryId = this.$route.params.id;
            axios.put(`http://127.0.0.1:8000/api/categories/${categoryId}`, this.form)
                .then(response => {
                    if(response.status == 201) {
                        this.$router.push({name: 'CategoryList'})
                    }
                })
                .catch(error => {
                    alert(error.response.data.error)
                });
        },
        fetchCategory() {
            const categoryId = this.$route.params.id;
            axios.get(`http://127.0.0.1:8000/api/categories/${categoryId}`)
                .then(response => {
                    const category = response.data;
                    this.form.title = category.title;
                    this.form.description = category.description;
                })
                .catch(error => {
                    console.error('Failed to fetch category:', error);
                });
        },
    },
    mounted() {
        this.fetchCategory()
    }
};
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>