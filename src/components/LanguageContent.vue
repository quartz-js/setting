<template>
  <div>
    <v-card-text>
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
          <v-list-item-avatar>
              <span :class="data.item.flag"></span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="data.item.label"></v-list-item-title>
          </v-list-item-content>
        </template>
      </v-select>

      <div class="text-right">
        <q-btn color="primary" @click="update">{{ $t('$quartz.core.save') }}</q-btn>
      </div>
    </v-card-text>
  </div>
</template>
<script>

import { container } from '@quartz/core'

require('flag-icon-css/css/flag-icon.min.css')

export default {
  data() {
    return {
      tab: null,
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