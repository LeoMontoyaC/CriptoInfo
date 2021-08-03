import Vue from 'vue';
import Router from 'vue-router'

import Home from '@/views/Home';

const router = new Router({
	mode: "history",
  routes: [
		{
    path: '/',
    name: 'home',
    component: Home
  }]
})

const app = new Vue({
  router
}).$mount('#app')