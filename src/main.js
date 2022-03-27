import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/index.css"
import { apiClient } from "@/services/api-client";


Vue.config.productionTip = false

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("access_token")) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>")
    let token = localStorage.getItem("access_token");
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(apiClient.defaults.headers.common["Authorization"])
  }
 
  next();
});

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
  position: "top-center",
  transitionDuration: 300,
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
