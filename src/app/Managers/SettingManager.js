import { SettingApi } from '../Api/SettingApi'
import { Attributes, Manager } from '@railken/quartz-core'
import { UserAttribute } from '@railken/module/quartz-user/src/app/Attributes/UserAttribute'

export default new Manager({
  name: 'setting',
  route: 'settings',
  manager: new SettingApi(),
  icon: require('../../assets/setting-icon.svg'),
  attributes: [
    new Attributes.Id(),
    new Attributes.Base('key'),
    new Attributes.Base('value'),
    new UserAttribute('user_id'),
    new Attributes.DateTime('created_at'),
    new Attributes.DateTime('updated_at')
  ]
})
