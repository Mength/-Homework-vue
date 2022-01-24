import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Main from './pages/main.vue';
import information from './pages/information.vue';

const routes = [
  { path: '/', name: 'profile', component: Main },
  { path: '/information', name: 'contact', component: information },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});