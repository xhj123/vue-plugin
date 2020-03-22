import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuePlugin from './plugins/index.js'

Vue.config.productionTip = false
Vue.use(vuePlugin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
