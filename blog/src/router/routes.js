import CreateUser from "../views/CreateUser.vue";
import Login from "../views/Login.vue";
import Users from "../views/Users.vue";

export default [
    {
        path: '/create_account',
        name: 'create',
        component: CreateUser,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/users',
        name: 'users',
        component: Users,
    }
];
