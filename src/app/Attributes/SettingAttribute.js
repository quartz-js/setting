import { Attributes } from '@railken/quartz-core'
import { SettingApi } from './../Api/SettingApi'

export class SettingAttribute extends Attributes.BelongsTo {
  constructor (name, options) {
    super(name, new SettingApi())

    this.resourceConfig = () => { return require('./../Managers/SettingManager').default };

    this.createComponent = {
      component: () => import('../../components/setting/Resource/create')
    }

    this.updateComponent = {
      component: () => import('../../components/setting/Resource/edit')
    }
  }
};
