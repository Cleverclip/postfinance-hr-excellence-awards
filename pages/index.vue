<script setup lang="ts">
import Slide1 from '~/assets/illustrations/Slide1.svg'
import Slide2 from '~/assets/illustrations/Slide2.svg'
import Slide3 from '~/assets/illustrations/Slide3.svg'
import Slide4 from '~/assets/illustrations/Slide4.svg'
import Slide5 from '~/assets/illustrations/Slide5.svg'
import Slide6 from '~/assets/illustrations/Slide6.svg'
import Slide7 from '~/assets/illustrations/Slide7.svg'
import Slide8 from '~/assets/illustrations/Slide8.svg'
import Slide9 from '~/assets/illustrations/Slide9.svg'
import Slide10 from '~/assets/illustrations/Slide10.svg'
import Slide11 from '~/assets/illustrations/Slide11.svg'

</script>

<template>
  <div class="slider" @click="activeSlide < 11 ? activeSlide += 1 : false">
    <div class="illustration" :class="{ active: activeSlide === 1, prev: activeSlide > 1, next: activeSlide < 1}">
      <Slide1></Slide1>
    </div>
    <div class="illustration" :class="{ active: activeSlide === 2, prev: activeSlide > 2, next: activeSlide < 2}">
<Slide2></Slide2>
    </div>
    <div class="illustration" :class="{ part2: activeSlide >= 4, active: activeSlide === 3 || activeSlide === 4, prev: activeSlide > 4, next: activeSlide < 3}">
<Slide3></Slide3>    </div>
    <div class="illustration" :class="{ active: activeSlide === 5, prev: activeSlide > 5, next: activeSlide < 5}">
<Slide4></Slide4>
    </div>
    <div class="illustration" :class="{ active: activeSlide === 6, prev: activeSlide > 6, next: activeSlide < 6}">
      <Slide5></Slide5>
    </div>
    <div class="illustration" :class="{ active: activeSlide === 7, prev: activeSlide > 7, next: activeSlide < 7}">
      <Slide6></Slide6>
    </div>
    <div class="illustration" :class="{ active: activeSlide === 8, prev: activeSlide > 8, next: activeSlide < 8}">
      <Slide7></Slide7>
    </div>
    <div class="illustration" :class="{ active: activeSlide === 9, prev: activeSlide > 9, next: activeSlide < 9}">
      <Slide8></Slide8>
    </div>
    <div class="illustration" :class="{ part2: activeSlide >= 11, active: activeSlide === 10 || activeSlide === 11, prev: activeSlide > 11, next: activeSlide < 10}">
      <Slide9></Slide9>
    </div>
    <div class="illustration" :class="{ active: activeSlide === 12, prev: activeSlide > 12, next: activeSlide < 12}">
      <Slide10></Slide10>
    </div>
    <div class="illustration" :class="{ active: activeSlide === 13, prev: activeSlide > 13, next: activeSlide < 13}">
      <Slide11></Slide11>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      activeSlide: 0
    }
  },
  watch: {
    activeSlide(slide: number) {
      this.$router.push({ query: { slide: slide}})
    },
  },
  mounted() {
    window.setTimeout(() => {
      if (this.$route.query.slide) {
        this.activeSlide = parseInt(this.$route.query.slide)
      } else {
        this.activeSlide = 1
      }

    }, 300)
    window.addEventListener('keydown', e => {
      console.log(e.code)
      if (['ArrowRight', "ArrowDown", "KeyS", "Space"].includes(e.code)) {
        this.activeSlide < 13 ? this.activeSlide += 1 : false
      } else if (['ArrowLeft', "ArrowUp", "KeyW"].includes(e.code)) {
        this.activeSlide > 1 ? this.activeSlide -= 1 : false
      }
    })
  }
}
</script>

<style lang="sass">
.slider
  width: 100vw
  height: 100vh
  position: fixed
  overflow: hidden
  top: 0
  left: 0
  background: linear-gradient(60.64deg, #301948 0%, #5E3378 70%, #9A2794 100%)
  .illustration
    width: 100%
    height: 100%
    transition: .8s cubic-bezier(.6, 0, .4, 1)
    position: absolute
    top: 0
    left: 0
    #unfold-bottom,
    #unfold-top
      transform: translate(0)
      transition: $t
    &.part2
      #part1
        opacity: 0
        transition: $t
      #part2
        opacity: 1
        transition: $t .2s
    #part2
      opacity: 0
    #spin-in
      transform: rotate(-30deg) scale(.2)
      transition: $t
    #title-rocket
      transform: translate(-100%, 20%) rotate(4deg) scale(.8)
      #rocket
        animation: rocket 4s ease infinite
    #appear,
    #text-appear
      opacity: 0
      transition: $t
    svg
      backface-visibility: hidden
      *
        transform-box: fill-box
    &.prev
      transform: translate(0, -130%) scale(.8) skewY(-12deg)
      #title-rocket
        transform: translate(100%, -20%) rotate(-4deg) scale(.8)
        transition: $tt
    &.next
      transform: translate(0, 130%) scale(.8) skewY(12deg)
    &.active
      transform: translate(0) scale(1)
      #unfold-bottom
        transform: translate(0, 40%)
        transition: $tt .3s
      #unfold-top
        transform: translate(0, -40%)
        transition: $tt .3s
      #spin-in
        transform: rotate(0deg) scale(1)
        transition: $tt .2s
      #appear,
      #text-appear
        opacity: 1
        transition: $t .6s
      #title-rocket
        transition: $tt .6s
        transform: translate(0, 0) rotate(0) scale(1)
    svg
      width: 100%
      height: 100%
      object-fit: contain
    #star
      animation: star 4s ease infinite
      position: relative
      transform-origin: center
    #flag
      animation: flag 5s linear infinite
      position: relative
    #path-animation
      animation: path 4s ease infinite
      position: relative
      stroke-dashoffset: 1000
      stroke-dasharray: 1000
    #bob-me
      animation: bob 5s ease infinite
      position: relative
      transform-origin: center
    #sway
      animation: sway 5s ease infinite
      position: relative
      transform-origin: bottom center
    #fade
      animation: fade 5s ease infinite

@for $i from 1 through 25
  .illustration
    #unfold-bottom_#{$i},
    #unfold-top_#{$i}
      transform: translate(0)
      transition: $t
    #star_#{$i}
      animation: star 4s ease infinite
      animation-delay: calc(-.2s * #{$i})
      position: relative
      transform-origin: center
    #bob-me_#{$i}
      animation: bob 5s ease infinite
      animation-delay: calc(-.2s * #{$i})
      position: relative
      transform-origin: center
    #sway_#{$i}
      animation: sway 5s ease infinite
      animation-delay: calc(-.4s * #{$i})
      position: relative
      transform-origin: bottom center
    #fade_#{$i}
      animation: fade 5s ease infinite
      animation-delay: calc(-.4s * #{$i})
    #appear_#{$i},
    #text-appear_#{$i}
      opacity: 0
      transition: $t
    #path-animation_#{$i}
      animation: path 6s ease infinite
      position: relative
      stroke-dashoffset: 1000
      stroke-dasharray: 1000
      animation-delay: calc(-.3s * #{$i})
  .illustration.active
    #appear_#{$i},
    #text-appear_#{$i}
      opacity: 1
      transition: $t calc(.6s + .1s * #{$i})
    #unfold-bottom_#{$i}
      transform: translate(0, 40%)
      transition: $tt calc(.7s - .2s * #{$i})
    #unfold-top_#{$i}
      transform: translate(0, -40%)
      transition: $tt calc(.7s - .2s * #{$i})



@keyframes star
  0%
    opacity: 1
    transform: scale(1.2) rotate(0)
  50%
    opacity: .3
    transform: scale(.7)
  100%
    opacity: 1
    transform: scale(1.2) rotate(90deg)

@keyframes path
  0%
    stroke-dashoffset: -1000
  50%
    stroke-dashoffset: 0
  100%
    stroke-dashoffset: 1000

@keyframes flag
  0%
    transform: translate(0)
  100%
    transform: translate(-50%)

@keyframes sway
  0%, 100%
    transform: rotate(.6deg)
  50%
    transform: rotate(-.6deg)

@keyframes bob
  0%, 5%, 95%, 100%
    transform: translate(0, -3%)
  45%, 55%
    transform: translate(0, 3%)

@keyframes rocket
  0%, 100%
    transform: translate(0, 0) rotate(0)
  33%
    transform: translate(-1%, 1%) rotate(2deg)
  66%
    transform: translate(1%, -3%) rotate(4deg)

@keyframes fade
  0%, 100%
    opacity: 1
  50%
    opacity: .3
</style>
