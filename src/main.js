import Vue from 'vue'
import App from './App.vue'
import '@/styles/reset.css'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router/index.js'
import Axios from 'axios'
Vue.use(ViewUI);
Vue.config.productionTip = false
Axios.defaults.baseURL = '/api'
Vue.prototype.$axios = Axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
