<script setup>
const bg = 'https://images.pexels.com/photos/1086584/pexels-photo-1086584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
</script>

<template>
  <router-view />
  <div class="bg">
    <img :src="bg" />
  </div>
</template>

<style lang="stylus">
body
  background-size: cover
  color: #fff

#app
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.9)

.bg
  pointer-events: none
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100vh

  img
    position: fixed
    top: 0
    filter: blur(40px)
    opacity: 0.5
    width: 100%
    height: 100%
</style>
