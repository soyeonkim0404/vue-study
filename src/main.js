import Vue from 'vue';
import App from './App.vue';
import { router } from '@/router';
import store from '@/store/index.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faAngleDoubleUp,
  faAngleDoubleDown,
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faAngleRight,
  faPlus,
  faCheck,
  faTimes,
  faArrowDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAngleDoubleUp,
  faAngleDoubleDown,
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faAngleRight,
  faPlus,
  faCheck,
  faTimes,
  faArrowDown,
  faAngleDoubleLeft,
  faAngleDoubleRight
);
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../src/assets/scss/common.scss';

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
