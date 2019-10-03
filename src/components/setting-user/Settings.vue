<template>
  <q-card class='content mt-5'>
    <q-tabs v-model="tab">
      <v-tab v-for="item in items" :key="item.name">
        <component :is="item.header" />
      </v-tab>
      <v-tab-item :transition="false" :reverse-transition="false" v-for="item in items" :key="item.name" class="px-5">
        <component :is="item.content" />
      </v-tab-item>
    </q-tabs>
  </q-card>
</template>
<script>

import { container } from '@quartz/core'

export default {
  data() {
    return {
      tab: null
    }
  },
  computed: {
    items: function () {
      return container.get('$quartz.settings').getItems()
    }
  }
}
</script>
<style scoped>
  .v-tabs--vertical > .v-tabs-bar .v-tab {
    justify-content: start;
  }
</style>