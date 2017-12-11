import Vue from 'vue';
import install from 'eif-mobile-ui';
import App from './index.vue';

Vue.use(install);
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
