<template>
  <q-resource-create v-bind="$attrs">
    <template slot='create' slot-scope="scope">
      <q-text v-model="scope.resource" :attribute="scope.config.getAttribute('key')" :errors="scope.errors"/>
<q-text v-model="scope.resource" :attribute="scope.config.getAttribute('value')" :errors="scope.errors"/>
<q-belongs-to v-model="scope.resource" :attribute="scope.config.getAttribute('user_id')" :errors="scope.errors"/>

    </template>
  </q-resource-create>
</template>