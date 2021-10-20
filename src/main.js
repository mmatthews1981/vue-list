import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  created() {
    const html = document.documentElement // returns the html tag
    html.setAttribute('lang', 'en')
  },
  router,
  render: h => h(App)
}).$mount('#app')