<template>
    <div class="container mt-5">
        <b-form @submit.prevent="onSubmit">
            <b-form-group label="Image" label-for="image">
                <b-form-file id="image" v-model="form.image" @change="onFileChange"></b-form-file>
                <b-form-text class="mt-2">{{ imageName }}</b-form-text>
                <img v-if="srcImage" :src="srcImage" alt="Image preview" class="mt-2"
                    style="max-width: 300px; max-height: 200px; border: 1px solid #ccc;" />
            </b-form-group>

            <b-form-group label="Categories" label-for="categories">
                <b-form-select id="categories" v-model="form.categories" :options="categoryOptions" multiple
                    required></b-form-select>
            </b-form-group>

            <b-form-group label="Title" label-for="title">
                <b-form-input id="title" v-model="form.title" required></b-form-input>
            </b-form-group>

            <!-- <b-form-group label="Content" label-for="content">
          <b-form-textarea id="content" v-model="form.content" required></b-form-textarea>
        </b-form-group> -->
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>

            <b-form-group label="Status" class="mt-2">
                <b-form-radio-group v-model="form.status" name="status" required>
                    <b-form-radio value="0">Hide</b-form-radio>
                    <b-form-radio value="1">Publish</b-form-radio>
                </b-form-radio-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue2";
//import ClassicEditor from "@ckeditor/ckeditor5-editor-classic";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
    components: {
        ckeditor: CKEditor.component,
    },
    data() {
        return {
            editor: ClassicEditor,
            editorData: "",
            editorConfig: {
            },
            form: {
                image: null,
                title: '',
                status: 1,
                categories: []
            },
            imageName: '',
            srcImage: '',
            categoryOptions: []
        };
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.form.image = file;
                this.imageName = file.name;
                this.srcImage = URL.createObjectURL(file);
            } else {
                this.imageName = '';
                this.srcImage = '';
            }
        },
        onSubmit() {
            const formData = new FormData();
            if (this.form.image) {
                formData.append('image_url', this.form.image);
            }
            formData.append('title', this.form.title);
            formData.append('content', this.editorData);
            formData.append('status', this.form.status);
            formData.append('user_id', 1);

            const articleId = this.$route.params.id;
            axios.put(`http://127.0.0.1:8000/api/articles/${articleId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    if (response.status == 201) {
                        this.$router.push({ name: 'ArticleList' })
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        fetchArticle() {
            const articleId = this.$route.params.id;
            axios.get(`http://127.0.0.1:8000/api/articles/${articleId}`)
                .then((response) => {
                    this.editorData = response.data.content
                    this.form.image = null
                    this.form.title = response.data.title
                    this.form.status = response.data.status
                    this.form.categories = response.data.categories.map(category => category.id);
                    this.srcImage = 'http://127.0.0.1:8000/storage/' + response.data.image_url
                })
                .catch(error => {
                    console.error('Failed to update user:', error);
                });
        },
        fetchCategory() {
            axios
                .get('http://127.0.0.1:8000/api/categories')
                .then((response) => {
                    const categories = response.data.map(category => {
                        return {
                            value: category.id,
                            text: category.title
                        }
                    })
                    this.categoryOptions = categories
                })
                .catch((error) => {
                    console.log(error, 'error')
                })
        }
    },
    mounted() {
        this.fetchCategory()
        this.fetchArticle()
    },
    beforeDestroy() {
        if (this.srcImage) {
            URL.revokeObjectURL(this.srcImage);

        }
    }
}
</script>

<style>
.ck .ck-editor__main div {
    height: 300px !important;
}
</style>