import Vue from 'vue'
import { ResourceApi } from '@railken/quartz-core'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export class UserSettingApi extends ResourceApi {
  resource_url = '/user/settings';
  
  storeByKey (key, value) {
    return Vue.http.put(this.getFullUrl() + "?query=key eq '" + key + "'", { value: value }, { 
      headers: { 
        "Authorization": 'Bearer ' + this.access_token 
      }
    }).then(this.parse);
  }
};
