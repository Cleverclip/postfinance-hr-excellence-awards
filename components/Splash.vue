<template>
  <header class="splash">
    <slot />
  </header>
</template>
<script>
export default {
  mounted() {
    // const splash = document.querySelector('.splash')
    // let io
    // counteract the intersection triggering twice and showing wrong value
    // setTimeout(() => {
    //   this.$store.commit('global/UPDATE_SHOW_NAV_BACKGROUND', false)
    // }, 20)
    // if (splash.classList.contains('small')) {
    //   io = new IntersectionObserver(
    //     (entries, io) => {
    //       entries.forEach((entry) => {
    //         console.log(entry)
    //         if (entry.target.classList.contains('splash')) {
    //           if (entry.isIntersecting) {
    //             this.$store.commit('global/UPDATE_SHOW_NAV_BACKGROUND', false)
    //           } else {
    //             this.$store.commit('global/UPDATE_SHOW_NAV_BACKGROUND', true)
    //           }
    //         }
    //       })
    //     },
    //     { threshold: 0.5 }
    //   )
    // } else {
    //   io = new IntersectionObserver(
    //     (entries, io) => {
    //       entries.forEach((entry) => {
    //         if (entry.target.classList.contains('splash')) {
    //           if (entry.isIntersecting) {
    //             this.$store.commit('global/UPDATE_SHOW_NAV_BACKGROUND', false)
    //           } else {
    //             this.$store.commit('global/UPDATE_SHOW_NAV_BACKGROUND', true)
    //           }
    //         }
    //       })
    //     },
    //     { threshold: 0.8 }
    //   )
    // }
    // io.observe(splash)
  },
}
</script>
<style lang="sass" scoped>


.splash
  height: 80vh
  position: relative
  width: 100%
  background: $off-white
  a
    display: inline-block
  &.nobackground
    background: none
  &.small
    height: auto
    padding: 8rem 0 5rem 0
    .text
      position: static
      transform: none
      display: flex
      gap: 2rem
      text-align: center
      margin: 0 auto
    h1
      font-size: 3rem
  .image
    width: 100%
    height: 100%
    position: absolute
    z-index: 1
    top: 0
    left: 0
    img
      width: 100%
  .text
    width: 40%
    display: flex
    position: absolute
    top: 8rem
    z-index: 10

@media (max-width: $small-breakpoint)
  .splash
    height: auto
    .text
      width: 100%
      position: relative
      h1
        font-size: 2.5rem
    .image
      position: relative
@media (min-width: $large-breakpoint)
  .splash
    .text
      top: 20%
</style>
