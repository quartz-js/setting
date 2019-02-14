import { ServiceProvider } from '@railken/quartz-core'
import { container } from '@railken/quartz-core'
import { UserSettingApi } from '../Api/UserSettingApi.js'
import { SettingStorage } from '../Services/SettingStorage.js'

export class SettingServiceProvider extends ServiceProvider {
  register() {

    this.addRoutes('app', require('./../../routes/setting.js'))
    this.addRoutes('app', require('./../../routes/setting-user.js'))

    this.addData({
      name: 'setting',
      description: 'Configure your application',
      tags: ['data'],
      route: { name: 'settings.index' },
    })

    this.addLang({
      'en': require('../../../lang/setting/en.json'),
      'it': require('../../../lang/setting/it.json')
    })
  }
  boot() {

    var api = new UserSettingApi()
    let storage = new SettingStorage();
    container.set('user.settings', storage);

    if (!window.user) {
      return;
    }

    return api.index({}).then(response => {
      container.get('user.settings').load(response.body.data);
    })
  }
}
