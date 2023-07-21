// router.js

import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入你的 Vue 組件
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

// 註冊 Vue Router
Vue.use(VueRouter);

// 定義路由
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

// 建立 Vue Router 實例
const router = new VueRouter({
  routes
});

// 匯出路由
export default router;
