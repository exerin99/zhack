<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import { useDark, useToggle } from '@vueuse/core';

export default {
  async mounted() {
    const isDark = useDark()
    const theme = this.$config.theme || localStorage.getItem('theme');

    try {
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        localStorage.setItem('theme', 'dark');
        useToggle(isDark)
      } else {
        localStorage.setItem('theme', 'light');
        useToggle(isDark)
      }
    } catch (_) {}
  }
}
</script>