import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import "./reset.css"
import "font-awesome/css/font-awesome.min.css"

createApp(App)
  .use(router)
  .mount('#app')
