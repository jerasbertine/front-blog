import CreateUser from "../views/CreateUser.vue";
import Login from "../views/Login.vue";
import Users from "../views/Users.vue";
import Profile from "../views/UserProfile.vue";

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
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    }
];
