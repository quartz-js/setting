<template>
  <div>
    <router-view :config="config"></router-view>
  </div>
</template>
<script>

import setting from '../../app/Managers/SettingManager'

export default {
  data () {
    return {
      config: setting
    }
  }
}
</script>
