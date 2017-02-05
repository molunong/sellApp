// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

import goods from './components/goods/goods';
import seller from './components/seller/seller';
import ratings from './components/ratings/ratings';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

// let app = Vue.extend(App);
// let router = new VueRouter();

// router.map({
//   '/goods': {
//     components: goods
//   }
// });

// router.start(app, '#app');

const routes = [
  { path: '/goods', component: goods },
  { path: '/seller', component: seller },
  { path: '/ratings', component: ratings }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

router.push('/goods');
