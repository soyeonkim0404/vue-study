import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import Array from '../views/array.vue';
import AddressApi from '../views/address-api.vue';
import InputStudy from '../views/input-study.vue';
import calculator from '../views/calculator.vue';
import todolist from '@/views/toodoList';
import pagination from '@/views/pagination-view';
import arrayRefactoring from '@/views/array-refactoring';
import dragView from '@/views/drag-view';

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
      path: '/inputStudy',
      component: InputStudy,
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
    },
    {
      path: '/arrayRefactoring',
      component: arrayRefactoring,
    },
    {
      path: '/dragView',
      component: dragView,
    },
  ],
});
