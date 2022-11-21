<template>
  <footer>
    <div class="content-container small">
      <div class="col">
        <div class="logo">
          <img src="" alt="" />
        </div>
        <p>
          Lorem ipsum
        </p>
      </div>
      <div class="col">
        <div>
          <a href="tel:+41 23 456 78 90">
            +41 23 456 78 90
          </a>
          <a
            href="mailto:info@lorem-ipsum.ch"
          >
            info@lorem-ipsum.ch
          </a>
        </div>
        <div>
          <a
            href="https://goo.gl/maps"
            rel="noopener"
            target="_blank"
          >
            Street Address<br />
            0000 City
          </a>
        </div>
      </div>
      <div class="col navigation">
        <div class="desktop-only">
          <router-link to="/"> Home </router-link>
        </div>
        <div>
          <router-link to="/imprint"> Imprint </router-link>
          <router-link to="/data"> Data Processing </router-link>
        </div>
      </div>
      <div class="back-to-top" @click="scrollToTop">
        <svg
          width="34"
          height="49"
          viewBox="0 0 34 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 2L32 17M17 2L2 17M17 2L17 47"
            stroke="#222222"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </footer>
</template>
<script>

export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>
<style lang="sass" scoped>


.back-to-top
  position: absolute
  bottom: 3rem
  right: 3rem
  width: 2rem
  cursor: pointer
  svg
    path
      stroke: $white
  &:hover
    svg
      path
        stroke: $black

footer
  background: $black
  color: $white
  padding: 6rem 0
  position: relative
  .col
    gap: 1rem
    &:not(:first-child)
      margin-top: 3.2rem
  a
    color: $white
    margin-bottom: .5rem
    &:hover
      text-decoration: underline
  .content-container
    display: flex
    gap: 3rem
  .logo
    width: 8rem

@media (max-width: $small-breakpoint)
  footer
    .content-container
      flex-direction: column
      align-items: center
      text-align: center
    .col
      width: 100%
      margin: 0 auto
      *
        margin: 0 auto
      a
        margin-bottom: 2rem

    .logo
      margin: 0 auto
      margin-bottom: 2rem
</style>
