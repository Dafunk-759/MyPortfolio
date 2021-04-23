const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/components/pages/home/Home.vue")
  },
  {
    path: '/drum',
    name: 'Drum',
    component: () => import("@/components/pages/Drum.vue")
  }
];

export default routes