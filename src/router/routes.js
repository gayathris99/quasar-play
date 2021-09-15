
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
  },

  {
    path: '/signup',
    component: () => import('layouts/Signup.vue')
  },

  {
    path: '/welcome',
    component: () => import('layouts/Welcome.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
