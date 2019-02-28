import Vue from 'vue'
import { ResourceApi } from '@railken/quartz-core'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export class UserSettingApi extends ResourceApi {
  resource_url = '/user/settings';
  
  storeByKey (key, value) {
    return this.index({query: "key eq '" + key + "'"}).then(response => {
      if (response.body.data.length === 0) {
        return Vue.http.post(this.getFullUrl(), { key: key, value: value }, { 
          headers: { 
            "Authorization": 'Bearer ' + this.access_token 
          }
        });
      } else {
        return Vue.http.put(this.getFullUrl() + "?query=key eq '" + key + "'", { value: value }, { 
          headers: { 
            "Authorization": 'Bearer ' + this.access_token 
          }
        });
      }
    }).then(this.parse)
  }
};
