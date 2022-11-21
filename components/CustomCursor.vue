<template>
  <div class='cursor' :style='{ transform: "translate(" + (1 / 2 + .5) * 100 + "vw, " + (1 / 2 + .5) * 100 + "vh)"}'>
    <div class='dot'></div>
  </div>
</template>
<script>

export default {
  mounted() {
    console.log(this.$route)
  }
}

</script>
<style lang="sass" scoped>


.cursor
  position: fixed
  top: -.5rem
  left: -.5rem
  width: 1rem
  height: 1rem
  background: $black
  border-radius: 50%
  border: 1px solid $black
  transition: all $t, transform .15s ease-out
  z-index: 1000
  pointer-events: none
  &.dark
    background: transparent
    top: -1rem
    left: -1rem
    width: 2rem
    height: 2rem
</style>
