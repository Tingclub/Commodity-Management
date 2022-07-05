<template>
  <div class="login">
    <!-- 首页门户 -->
    {{ store.state.count }}
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      class="loginform"
    >
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: '请输入用户名' }]"
      >
        <a-input v-model:value="formState.userName" />
      </a-form-item>
      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item
        name="remember"
        :wrapper-col="{ offset: 8, span: 16 }"
      >
        <a-checkbox v-model:checked="formState.remember">
          记住密码
        </a-checkbox>
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button
          type="primary"
          html-type="submit"
        >
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import user from '@/api/user'
import { reactive, ref } from '@vue/reactivity'
const store = useStore()
const formState = reactive({
  userName: null,
  password: null,
  remember: null
})
console.log(store.state.count)
console.log(user)
const msg = ref<string>('msg')
console.log('msg', msg)

</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  text-align: center;
  .loginform{
    width: 40%;
    height: 30%;
    margin: 0 auto;
  }
}
</style>
