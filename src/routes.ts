import Index from "./components/Index.vue";
import Garden from "./gardens/Index.vue";

// VueRouter table
export const routes = [
    {
        name: 'homepage',
        path: '/',
        component: Index,
    },
    {
        name: 'garden',
        path: '/garden',
        component: Garden,
    }
]