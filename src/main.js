import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faAngleDoubleUp,
  faAngleDoubleDown,
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAngleDoubleUp,
  faAngleDoubleDown,
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faAngleRight
);
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
