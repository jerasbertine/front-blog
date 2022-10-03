<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{ error }}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="Login" novalidate>
                    <fieldset>

                        <div class="form-group">
                            <label class="form-label mt-4">Email</label>
                            <input type="text" class="form-control" v-model="user.email" placeholder="Enter email">
                        </div>

                        <div class="form-group">
                            <label class="form-label mt-4">Password</label>
                            <input type="password" class="form-control" v-model="user.password" placeholder="Enter a password">
                        </div>

                        <button class="btn btn-primary mt-4">Connection</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'Login',
        data() {
            return {
                user: {},
                email:'',
                password:'',
                errors: []
            }
        },
        methods: {
            async Login() {
                this.errors = [];

                if(!this.user.email) {
                    this.errors.push("Email is required")
                }

                if(!this.user.password) {
                    this.errors.push("Password is required")
                }

                if(!this.errors.length) {
                    let formData = new FormData();
                    formData.append('email', this.user.email);
                    formData.append('password', this.user.password);
                    let url = 'http://127.0.0.1:8000/api/v1/user/auth/login';
                    await axios.post(url, formData).then((response) => {
                        console.log(response);
                        if(response.status == 200) {
                            // alert(response.data.message);
                            this.$router.push({ name: 'profile' })
                        }
                    });
                }
            }
        },
    }
</script>