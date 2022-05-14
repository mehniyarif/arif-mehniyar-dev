import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {auth, firebaseApp} from "./firebase"
import axios from "axios";
import store from "@/store";

import './registerComponents.js' // Globally Registered Components

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

let app;

auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});

