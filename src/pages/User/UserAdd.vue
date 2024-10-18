<template>
    <div class="container mt-5">
        <b-form @submit.prevent="onSubmit">
            <b-form-group label="Role" label-for="role-select">
                <b-form-select id="role-select" v-model="form.role" :options="roles" required></b-form-select>
            </b-form-group>

            <b-form-group label="Email" label-for="email-input">
                <b-form-input id="email-input" v-model="form.email" type="email" placeholder="Enter your email"
                    required></b-form-input>
            </b-form-group>

            <b-form-group label="Name" label-for="name-input">
                <b-form-input id="name-input" v-model="form.name" placeholder="Enter your name" required></b-form-input>
            </b-form-group>

            <b-form-group label="Password" label-for="password-input">
                <b-form-input id="password-input" v-model="form.password" type="password"
                    placeholder="Enter your password" required></b-form-input>
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
                role: null,
                email: '',
                name: '',
                password: '',
            },
            roles: []
        };
    },
    created() {
        axios
            .get('http://127.0.0.1:8000/api/roles')
            .then((response) => {
                const roles = response.data.map(role => ({
                    value: role.id,
                    text: role.name
                }));
                this.roles = roles
            })
            .catch((error) => {
                console.log(error, 'error')
            })
    },
    methods: {
        onSubmit() {
            axios.post('http://127.0.0.1:8000/api/user-add', this.form)
            .then(response => {
                if(response.status == 201) {
                    this.$router.push({name: 'UserList'})
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