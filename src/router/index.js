import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import Array from '../views/array.vue';
import AddressApi from '../views/address-api.vue';
import Calculator from '../views/calculator.vue';
import TodoList from '@/views/todo-list';

import ArrayRefactoring from '@/views/array-refactoring';
import DragView from '@/views/drag-view';
import FormPage from '@/views/form-page';
import JoinClone from '@/views/join-clone';
import Quiz from '@/views/quiz/index';
import QzResult from '@/views/quiz/result';

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
      path: '/array-refactoring',
      component: ArrayRefactoring,
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
      children: [
        {
          path: '/:seq',
          component: QzResult,
        },
      ],
    },
  ],
});
