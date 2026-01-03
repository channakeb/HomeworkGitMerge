import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import "./assets/css/bootstrap.css";
import "./assets/css/responsive.css";
//import "./assets/image" ;
// import "./assets/css/font-awesome.min.css";
createApp(App).use(router).mount('#app')

