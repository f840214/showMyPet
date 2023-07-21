import Vue from 'vue'
import App from './App.vue'
import router from './router' // 引入 Vue Router 實例

Vue.config.productionTip = false

new Vue({
  router, // 將 Vue Router 實例加入 Vue 應用程式
  render: h => h(App),
}).$mount('#app')
