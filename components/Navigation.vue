<template>
  <nav
    ref="navigation"
    :class="{ open }"
  >
    <div class="content-container">
      <router-link class="logo" to="/" @click.native="open = false">
        <img
          src=""
          alt=""
          @click="scrollToTop"
        />
      </router-link>
      <div class="navigation-items">
        <router-link
          class="navigation-item"
          active-class="active"
          to="/product"
          @click.native="open = false"
          >Product</router-link
        >
        <router-link
          class="navigation-item"
          active-class="active"
          to="/about"
          @click.native="open = false"
          >About</router-link
        >
        <router-link
          class="navigation-item cta"
          active-class="active"
          to="/contact"
          @click.native="open = false"
          >Contact</router-link
        >
      </div>
    </div>
    <div class="menu-button mobile-only" @click="open = !open">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </nav>
</template>
<script>

export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    scrollToTop(e) {
      window.scrollTo(0, 0)
    },
  },
}
</script>
<style lang="sass" scoped>


nav
  padding: 2rem 0
  position: fixed
  top: 0
  width: 100%
  left: 0
  z-index: 100
  transition: $t
  background: transparent
  box-shadow: 0 0 20px transparentize($black, 1)
  &.background
    background: $white
    padding: 1.2rem 0
    box-shadow: 0 0 40px transparentize($black, .9)
  .content-container
    display: flex
    align-items: center
    justify-content: space-between
  .logo
    height: 3rem
    svg,
    img
      height: 100%
      width: auto
  .menu-button
    position: absolute
    top: 1rem
    right: 1rem
    padding: 1rem
    width: 4rem
    height: 4rem
    cursor: pointer
    &:hover
      .line
        background: $black
    .line
      height: 2px
      width: 2rem
      background: $black
      transition: $t
      @include center
      &:nth-child(1)
        top: 35%
      &:nth-child(3)
        top: 65%
  .navigation-items
    display: flex
    align-items: center
    .navigation-item:not(:last-child)
      margin-right: 4rem
    .navigation-item
      cursor: pointer
      transition: color $t
      color: $black
      text-decoration: none
      font-size: 1.3rem
      position: relative
      &::after
        content: ""
        position: absolute
        left: 50%
        bottom: -4px
        height: 1px
        background: $black
        width: 95%
        transform: translate(-50%) scaleX(0)
        transition: $t
      &:hover
        color: $black
        &::after
          background: $black
        &::after
          transform: translate(-50%) scaleX(.2)
      &.active
        &::after
          transform: translate(-50%) scaleX(1)
      &.cta
        font-weight: 800
        &::after
          height: 2px

@media (max-width: $small-breakpoint)
  nav
    position: absolute
    position: fixed
    background: $white
    z-index: 500
    top: 0
    left: 0
    width: 100vw
    height: 6rem
    overflow: hidden
    padding: 0
    transition: $tt .2s
    box-shadow: 0 0 40px transparentize($black, .9)
    &.open
      height: 100vh
      transition: $tt
      .navigation-items,
      .icon-links
        opacity: 1
        transition: $tt .4s
        pointer-events: all
      .menu-button
        .line
          &:nth-child(1)
            top: 50%
            transform: translate(-50%, -50%) rotate(-45deg)
          &:nth-child(2)
            width: 0
          &:nth-child(3)
            top: 50%
            transform: translate(-50%, -50%) rotate(45deg)
    .navigation-items
      position: absolute
      opacity: 0
      transition: $t
      @include center
      top: 44%
      flex-direction: column
      justify-content: center
      align-items: center
      pointer-events: none
      .navigation-item
        font-size: 2rem
        margin: 0
        color: $black
        &:not(:last-child)
          margin-bottom:  3rem
          margin-right: 0
        &.cta
          font-weight: normal
    .icon-links
      position: absolute
      bottom: 4rem
      z-index: 500
      left: 50%
      transform: translate(-50%)
      display: flex
      opacity: 0
      pointer-events: none
      transition: $t
      gap: 5rem
      .mini-icon
        width: 4rem
  .logo
    position: absolute
    top: 2rem
    left: 2rem
</style>
