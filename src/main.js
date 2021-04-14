import Vue from 'vue';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueRouter from 'vue-router';

import App from './App.vue';
import Routes from './Routes';

export const bus = new Vue();

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
