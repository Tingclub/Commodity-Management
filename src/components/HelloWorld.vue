<template>
  <div>
    123
  </div>
</template>

<script  lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
interface user {
  name: String
  aee: number
}
export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    },
    personInfo: {
      type: Object,
      default: () => {}
    },
    newuser: {
      type: Object as user,
      default: () => {}
    }
  },
  setup (props) {
    const fool = ref<{
      a: number
      b: string
    } | null>(null)
    fool.value = {
      a: 1
    }

    onMounted(() => {
      console.log(';;;', fool.value)
    })
    return {
      fool
    }
  }
})

</script>

<style scoped>

</style>
