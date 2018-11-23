export default [
  // app
  {
    path: '/',
    component: '../layouts/BlankLayout',
    authority: ['admin', 'user'],
    routes: [
      // dashboard
      { path: '/', redirect: '/index' },
      {
        path: '/index',
        name: 'index',
        icon: 'dashboard',
        component: './Index/index',
      },
      {
        component: '404',
      },
    ],
  },
];
