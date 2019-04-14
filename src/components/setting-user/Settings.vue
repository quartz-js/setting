<template>
  <div>
    <v-card class='resource-card content mt-5'>

      <v-select
      :label="$t('$quartz.settings.language')"
      :items="languages"
      v-model="language"
    >
      <template slot="selection" slot-scope="data">
        <v-avatar size="25px" class="mr-3">
          <span :class="data.item.flag"></span>
        </v-avatar>
        {{ data.item.label }}
      </template>
      <template slot="item" slot-scope="data">
        <v-list-tile-avatar>
            <span :class="data.item.flag"></span>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="data.item.label"></v-list-tile-title>
        </v-list-tile-content>
      </template>
    </v-select>

      <v-btn color="primary" @click="update">{{ $t('$quartz.core.save') }}</v-btn>

    </v-card>
  </div>
</template>
<script>

import { container } from '@railken/quartz-core'
import { UserSettingApi } from '../../app/Api/UserSettingApi.js'

require('flag-icon-css/css/flag-icon.min.css')

export default {
  data() {
    return {
      language: null,
      languageSetting: null,
      languages: [
        {
          value: 'en',
          label: 'English',
          flag: 'flag-icon flag-icon-gb'
        },
        {
          value: 'it',
          label: 'Italiano',
          flag: 'flag-icon flag-icon-it'
        }
      ]
    }
  },
  mounted () {
    this.language = container.get('settings').get('language', 'en')
  },
  methods: {
    update() {
      container.get('settings').store('language', this.language).then(() => {
        window.location.reload();
      })
    }
  }
}
</script>