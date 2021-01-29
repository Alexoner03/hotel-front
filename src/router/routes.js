
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue')},
      { path: 'about', component: () => import('pages/AboutUs.vue')},
      { path: 'services', component: () => import('pages/Services.vue')},
      { path: 'rooms', component: () => import('pages/Rooms.vue')},
      { path: 'contact', component: () => import('pages/Contact.vue')},
      { path: 'orders', component: () => import('pages/Orders.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
