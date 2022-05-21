<template>
  <div>
    <HelloWorld />
    <page1 msg="111"></page1>
  </div>
</template>

<script  lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import page1 from './components/page1'
export default defineComponent({
  components: {
    HelloWorld
  },
  setup (props) {
    // 获取组件的实例类型
    const helloWorld = ref < InstanceType < typeof HelloWorld > | null>(null)
    onMounted(() => {
      console.log('hello', helloWorld)
    })
    return {
      HelloWorld
    }
  }

})
</script>

<style scoped>

</style>
