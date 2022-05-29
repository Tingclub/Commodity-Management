<template>
  <div>
    <FooSet msg="组合式ApiFooSet" />
    <HeaderCom />
    <Middle />
    <Foo msg="foo" />
  </div>
</template>

<script lang="ts" setup>
import HeaderCom from './components/HeaderCom.vue'
import Middle from './components/Mideele.tsx'
import Foo from './components/Foo'
import FooSet from './components/FooSet'

</script>
