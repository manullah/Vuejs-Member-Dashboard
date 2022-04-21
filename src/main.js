import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import './assets/sass/index.scss'
// import '@fortawesome/fontawesome/styles.css';
// import '@fortawesome/fontawesome-free-solid';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
