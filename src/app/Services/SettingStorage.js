import { UserSettingApi } from '../Api/UserSettingApi.js'

export class SettingStorage {
  constructor() {
    this.items = [];
    this.api = new UserSettingApi();
  }

  load (resources) {
    for (let i = 0; i < resources.length; i++) {
      this.set(resources[i].key, resources[i].value);
    }
  }

  get (key, def) {
    return typeof this.items[key] !== "undefined" ? this.items[key] : def
  }

  set (key, value) {
    this.items[key] = value;
  }

  store (key, value) {
    this.set(key, value);

    return this.api.storeByKey(key, value)
  }
};
