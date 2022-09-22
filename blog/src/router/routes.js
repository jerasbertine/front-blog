import CreateUser from "../views/CreateUser.vue";
import Login from "../views/Login.vue";

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
    }
];
