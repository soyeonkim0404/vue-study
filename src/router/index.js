import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import Array from '../views/array.vue';
import AddressApi from '../views/address-api.vue';
import calculator from '../views/calculator.vue';
import todolist from '@/views/toodoList';
import pagination from '@/views/pagination-view';
import arrayRefactoring from '@/views/array-refactoring';
import dragView from '@/views/drag-view';
import formPage from '@/views/form-page';
import joinclone from '@/views/join_clone';
import appleClone from '@/views/apple-clone';

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
    {
      path: '/calculator',
      component: calculator,
    },
    {
      path: '/todolist',
      component: todolist,
    },
    {
      path: '/pagination',
      component: pagination,
      meta: {
        bg: 'dark',
      },
    },
    {
      path: '/arrayRefactoring',
      component: arrayRefactoring,
    },
    {
      path: '/dragView',
      component: dragView,
    },
    {
      path: '/formPage',
      component: formPage,
      meta: {
        bg: 'dark',
      },
    },
    {
      path: '/joinclone',
      component: joinclone,
      meta: {
        bg: 'dark',
      },
    },
    {
      path: '/appleClone',
      component: appleClone,
    },
  ],
});
