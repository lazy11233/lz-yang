<script setup lang="ts">
  import { provideVSCodeDesignSystem, vsCodeButton, vsCodeTextField } from "@vscode/webview-ui-toolkit";
  import { vscode } from "./utilities/vscode";
  import { ref } from "vue";
  import Login from "@/components/Login.vue";

  provideVSCodeDesignSystem().register(
    vsCodeButton(),
    vsCodeTextField()
  );

  function handleHowdyClick() {
    vscode.postMessage({
      command: "hello",
      text: "Hey there partner! 🤠",
    });
  }
  const hasSession = ref(false);
</script>

<template>
  <main>
    <div v-if="hasSession">main</div>
    <Login v-else />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}
</style>
