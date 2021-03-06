import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import AddressApi from '../views/address-api.vue';
import Calculator from '../views/calculator.vue';
import TodoList from '@/views/todo-list';
import Array from '@/views/array';
import DragView from '@/views/drag-view';
import FormPage from '@/views/form-page';
import JoinClone from '@/views/join-clone';
import Quiz from '@/views/quiz/index';
import QzResult from '@/views/quiz/result';
import FullCalendar from '@/views/full-calendar';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/address-api',
      component: AddressApi,
      meta: {
        bg: 'dark',
      },
    },
    {
      path: '/calculator',
      component: Calculator,
    },
    {
      path: '/todo-list',
      component: TodoList,
    },
    {
      path: '/array',
      component: Array,
    },
    {
      path: '/drag-view',
      component: DragView,
    },
    {
      path: '/form-page',
      component: FormPage,
      meta: {
        bg: 'dark',
      },
    },
    {
      path: '/join-clone',
      component: JoinClone,
      meta: {
        bg: 'dark',
      },
    },
    {
      path: '/quiz',
      component: Quiz,
      meta: {
        bg: 'dark',
      },
    },
    {
      path: '/quiz/:seq',
      component: QzResult,
      meta: {
        bg: 'dark',
      },
    },
    {
      path: '/full-calendar',
      component: FullCalendar,
    },
  ],
});
