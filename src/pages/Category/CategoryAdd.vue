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

            <b-button type="submit" variant="primary">ADD</b-button>
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
            axios.post('http://127.0.0.1:8000/api/categories', this.form)
            .then(response => {
                if(response.status == 201) {
                    this.$router.push({name: 'CategoryList'})
                }
            })
            .catch(error => {
                alert(error.response.data.error)
            });
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>