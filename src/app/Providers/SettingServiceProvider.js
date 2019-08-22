import { ServiceProvider } from '@quartz/core'
import { container } from '@quartz/core'
import { UserSettingApi } from '../Api/UserSettingApi.js'
import { SettingStorage } from '../Services/SettingStorage.js'
import { SettingEditor } from '../Services/SettingEditor.js'

export class SettingServiceProvider extends ServiceProvider {
  register() {

    this.addRoutes('app', require('./../../routes/setting-user.js'))

    this.addLang({
      'en': require('../../../lang/setting/en.json'),
      'it': require('../../../lang/setting/it.json')
    })

    container.set('$quartz.settings', new SettingEditor);

    container.get('$quartz.settings').addItem({
      name: 'language',
      header: () => import('../../components/LanguageHeader'),
      content: () => import('../../components/LanguageContent')
    })
  }
  boot() {
    var api = new UserSettingApi()
    let storage = new SettingStorage(window.user);
    container.set('settings', storage);

    if (!window.user) {
      return;
    }

    return storage.initialize();
  }
}
