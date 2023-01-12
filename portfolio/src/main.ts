import { createApp } from "vue";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/main.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
  })

app
    .use(router)
    .use(vuetify as any);


app.mount("#app");
