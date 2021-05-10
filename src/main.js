import Vue from 'vue'
import Home from './views/Home.vue'
import router from './router'
import store from './store'
//use elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount('#app')
