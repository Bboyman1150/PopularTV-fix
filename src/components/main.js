import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Vue.config.productionTip = false

import VueRouter from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Movies from './components/Movies.vue'
Vue.use(VueRouter)

// set up VueRouter instance
const router = new VueRouter({
  routes:
  [
    // register routes
    // {path:'/', component:HelloWorld},
    {path:'/', component:Movies},
    {path: '/movies', component:Movies}
  ],
  // Exclude route from displaying in address bar
  mode:"history"
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
