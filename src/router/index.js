import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import Array from '../views/array.vue';
import AddressApi from '../views/address-api.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/array',
      component: Array,
    },
    {
      path: '/addressApi',
      component: AddressApi,
    },
  ],
});
