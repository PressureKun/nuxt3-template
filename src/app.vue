<script lang="ts" setup>
import { InitApp } from '~/utils/initApp'
InitApp()
const locale = useState<string>('locale.i18n')
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <Html :lang="locale">

  <Body class="bg-bgcolor text-gray-800 antialiased transition-colors duration-300 ">

    <AppHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Body>

  </Html>
</template>

<style lang="postcss">
body {
  @apply bg-bgcolor;
}
</style>
