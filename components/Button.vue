<template>
  <div class="button">
    <div class="text">
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>


.button
  background: $black
  font-size: 1.2rem
  padding: 1rem 3rem
  color: $white
  font-weight: 800
  text-decoration: none
  display: flex
  position: relative
  align-items: center
  justify-content: center
  width: fit-content
  border-radius: 4rem
  cursor: pointer
  transition: $t
  &.outline
    border: 2px solid $black
    background: none
    color: $black
    &:hover
      border-color: $black
      color: $black
  .text
    z-index: 20
  &:hover
    background: $black
    color: $white

</style>
