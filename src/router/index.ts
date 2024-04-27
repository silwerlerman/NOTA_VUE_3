import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  // {
  //   path: '/',
  //   name: 'Dashboard',
  //   meta: { auth: true, layout: 'main', module: 'Dashboard' },
  //   component: () => import('Parts/HomePage/HomePage')
  // },
  {
    path: '/',
    component: () => import('@modules/Login/LoginPage/LoginPage.vue')
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

export default router;
