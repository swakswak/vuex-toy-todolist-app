import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store";
import vueMoment from "vue-moment"

const app = createApp(App);
app.use(store);
app.use(vueMoment);
app.mount('#app');
