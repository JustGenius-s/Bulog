import Index from "./components/Index.vue";

import Home from "./pages/Home.vue";

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
]