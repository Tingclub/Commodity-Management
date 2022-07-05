<template>
  <div>
    首页门户
    {{ store.state.count }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import user from '@/api/user'
import { ref } from '@vue/reactivity'
const store = useStore()
console.log(store.state.count)
console.log(user)
const msg = ref<string>('msg')
console.log('msg', msg)

</script>

<style lang="scss" scoped>
div{
  color: $color;
}
</style>
