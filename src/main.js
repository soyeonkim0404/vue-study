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

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
