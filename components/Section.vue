<template>
  <section>
    <div class="content-container">
      <slot />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>


section
  padding: 7rem 0
  &.off-white
    background: $off-white
  &.full
    >.content-container
      width: 100%
      max-width: none

@media (max-width: $small-breakpoint)
  section
    &.full
      >.content-container
        width: 100%
    .content-container
      .image
        width: auto
        max-width: 30rem
        text-align: center
      .text
        width: 100%
        text-align: center
        display: block
        gap: 2rem
        .inner-text
          text-align: center
          gap: 2rem
        a
          display: inline-block
</style>
