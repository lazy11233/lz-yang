<script setup lang="ts">
  import { reactive } from "vue";

  const formData = reactive({
    url: 'https://192.168.112.12',
    username: 'admin',
    password: 'Huawei@123',
  })
  const handleLogin = () => {
    console.log(formData);
  }
</script>

<template>
  <div>
    <form @submit="handleLogin">
      <vscode-text-field type="url" v-model="formData.url">网址</vscode-text-field>
      <vscode-text-field type="text" v-model="formData.username">用户名</vscode-text-field>
      <vscode-text-field type="text" v-model="formData.password">密码</vscode-text-field>
      <vscode-button type="submit">登录 <span class="codicon codicon-check"></span></vscode-button>
    </form>
  </div>
</template>

<style scoped>

</style>