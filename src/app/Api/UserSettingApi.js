import { ResourceApi } from '@quartz/core'

export class UserSettingApi extends ResourceApi {
  resource_url = '/user/settings';
  
  retrieve (ownerId) {
    return this.index({query: `ownables.owner_id = '${ownerId}`, show: 99999})
  }

  storeByKey (ownerId, key, value) {
    return this.index({query: `ownables.owner_id = '${ownerId}' and key = '${key}'`}).then(response => {
      if (response.body.data.length === 0) {
        return this.post('', { key: key, value: value });
      } else {
        return this.http.put(this.url('' + `?query=ownables.owner_id = '${ownerId}' and key eq '${key}'`), { value: value });
      }
    })
  }
};
