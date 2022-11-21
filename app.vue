<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
  const appConfig = useAppConfig()
</script>
<style lang="sass">
.page-enter-active,
.page-leave-active
  transition: all .4s cubic-bezier(.6, 0, .4, 0)
.page-enter-from
  filter: blur(1rem)
.page-leave-to
  filter: blur(1rem)

</style>
