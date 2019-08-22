import Vue from 'vue'
import { ResourceApi } from '@quartz/core'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export class UserSettingApi extends ResourceApi {
  resource_url = '/user/settings';
  
  retrieve (ownerId) {
    return this.index({query: `ownables.owner_id = '${ownerId}`, show: 99999, include: 'ownables'})
  }

  storeByKey (ownerId, key, value) {
    return this.index({query: `ownables.owner_id = '${ownerId}' and key = '${key}'`, include: 'ownables'}).then(response => {
      if (response.body.data.length === 0) {
        return Vue.http.post(this.getFullUrl(), { key: key, value: value }, { 
          headers: { 
            "Authorization": 'Bearer ' + this.access_token 
          }
        });
      } else {
        return Vue.http.put(this.getFullUrl() + `?query=ownables.owner_id = '${ownerId}' and key eq '${key}'`, { value: value, include: 'ownables' }, { 
          headers: { 
            "Authorization": 'Bearer ' + this.access_token 
          }
        });
      }
    })
  }
};
