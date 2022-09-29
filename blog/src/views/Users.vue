<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>

            <tbody v-for="user in users" :key="user.id">
                <tr class="table-secondary">
                    <th scope="row">{{ user.id }}</th>
                    <th scope="row">{{ user.name }}</th>
                    <th scope="row">{{ user.email }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'Users',
        data() {
            return {
                users:Array
            }
        },
        created() {
            this.getUsers();
        },
        methods: {
            async getUsers() {
                let url ='http://127.0.0.1:8000/api/v1/users';
                await axios.get(url).then(response => {
                    this.users = response.data.users;
                    console.log (this.users);
                }).catch(error => {
                    console.log(error)
                });
            }
        },
        mounted() {
            console.log('Users list component mounted');
        }
    }
</script>