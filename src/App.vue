<template>
  <ConfigProvider :locale="zhCN">
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
console.log('my config env: ', import.meta.env)
</script>
<style lang="scss" scoped>
.app{
  height: 100vh;
  overflow: hidden;
}
</style>
