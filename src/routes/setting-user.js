const routes = [
  {
    path: 'user/settings',
    name: 'user.settings',
    component: () => import('../components/setting-user/Settings')
  }
]
module.exports = routes;
