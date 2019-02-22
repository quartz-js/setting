<template>
  <q-resource-show v-bind="$attrs">
    <template slot="show" slot-scope="scope">
      <q-show-text :resource="scope.resource" :attribute="scope.config.getAttribute('key')"/>
      <q-show-text :resource="scope.resource" :attribute="scope.config.getAttribute('value')"/>
      <q-show-text :resource="scope.resource" :attribute="scope.config.getAttribute('user_id')"/>
    </template>
  </q-resource-show>
</template>
