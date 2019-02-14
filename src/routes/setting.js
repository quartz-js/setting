const routes = [{
  path: 'settings',
  component: () => import('./../components/setting/app'),
  children: [
    {
      path: '',
      name: 'settings.index',
      component: () => import('./../components/setting/Page/index')
    },
    {
      path: ':id',
      name: 'settings.show',
      component: () => import('./../components/setting/Page/show')
    }
  ]
}]
module.exports = routes;
