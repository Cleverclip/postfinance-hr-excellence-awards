<template>
  <div class='placeholder'>
    <p class='text'>
      <slot />
    </p>
  </div>
</template>
<script>

export default {}
</script>
<style lang="sass" scoped>


.placeholder
  width: 100%
  height: 100%
  min-width: 6rem
  min-height: 6rem
  background: $off-white
  border: 1px solid $black
  position: relative
  .text
    position: absolute
    bottom: 1rem
    left: 50%
    transform: translate(-50%)

</style>
