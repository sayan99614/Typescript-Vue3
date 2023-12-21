import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import styles from "@/style.css";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
