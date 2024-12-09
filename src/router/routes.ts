import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/HeroSection.vue'),
      },
      {
        path: 'about-me',
        name: 'about-me',
        component: () => import('pages/AboutMe.vue'),
      },
      {
        path: 'timeline',
        name: 'timeline',
        component: () => import('pages/TimeLine.vue'),
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('pages/ProjectList.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('pages/MyContact.vue'),
      },
    ],
  },

  // Catch-all for undefined routes
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
