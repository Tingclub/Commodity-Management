<template>
  <div>
    首页门户
    {{ store.state.count }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../../store'
const store = useStore()
console.log(store.state.count)

</script>

<style lang="scss" scoped>

</style>
