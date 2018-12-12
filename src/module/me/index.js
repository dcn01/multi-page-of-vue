import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './index.vue';
import loading from './images/loading.png';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: loading,
  loading,
  attempt: 1,
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
