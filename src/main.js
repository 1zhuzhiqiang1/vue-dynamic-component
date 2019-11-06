import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AsyncComponent from './components/async-component';
import VueRouter from 'vue-router';
import Home from './Home.vue';

Vue.use(ElementUI);
Vue.use(AsyncComponent);
Vue.use(window.AVUE);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '', redirect: 'home' },
    {
      path: 'home',
      component: Home,
      children: [
        { path: '', redirect: 'app'},
        { path: 'app', component: App}
      ]
    }
  ]
});

new Vue({
  router: router,
  render: h => h(Home)
}).$mount('#app');
