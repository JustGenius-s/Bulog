import Index from "./components/Index.vue";

import Home from "./pages/Home.vue";
import Post from "./pages/Post.vue";

// VueRouter table
export const routes = [
    {
        name: 'components',
        path: '/components',
        component: Index,
    },
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'post',
        path: '/post',
        component: Post,
    },
]