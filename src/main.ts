import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";

import "./style.css";
import "animate.css";
import "virtual:uno.css"
import App from "./App.vue";
import { routes } from "./routes";

const pinia = createPinia();
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(pinia).use(router).mount("#app");
