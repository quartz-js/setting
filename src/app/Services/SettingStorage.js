import { UserSettingApi } from '../Api/UserSettingApi.js'
import { container } from '@quartz/core'
import _ from 'lodash'

export class SettingStorage {
  constructor(owner) {
    this.items = {};
    this.default = {};
    this.api = new UserSettingApi();
    this.owner = owner
  }

  initialize()
  {
    return this.api.retrieve(this.owner.id).then(response => {
      container.get('settings').load(response.body.data);
    })
  } 

  load (resources) {
    for (let i = 0; i < resources.length; i++) {
      this.set(resources[i].key, resources[i].value);
    }
  }

  get (key, def) {
    return _.get(this.items, key, this.getDefault(key, def))
  }

  set (key, value) {
    _.set(this.items, key, value);
  }

  setDefault (key, value) {
    _.set(this.default, key, value);
  }

  getDefault(key, def) {
    return _.get(this.default, key, def)
  }

  store (key, value) {
    this.set(key, value);

    return this.api.storeByKey(this.owner.id, key, value)
  }

  toggle (key, def) {

    let val = !parseInt(this.get(key, def)) ? 1 : 0;

    return this.store(key, val);
  }
};
