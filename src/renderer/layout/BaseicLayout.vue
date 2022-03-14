<script setup>
import Header from '../components/header/index.vue'
import Menu from '../components/base/Menu.vue'
import Player from '../components/sidebar/player.vue'
import Info from '../components/sidebar/Info.vue'
</script>

<template>
  <div class="wrap">
    <Header />
    <div class="main-wrap">
      <Player />
      <main class="main card">
        <Menu />
        <div class="content">
          <router-view></router-view>
        </div>
      </main>
      <Info />
    </div>
  </div>
</template>

<style lang="stylus">
.wrap
  position: relative
  z-index: 1
  height: 100vh
  // overflow: hidden

.main-wrap
  display: flex
  padding: 6px
  width: 100%
  height: calc(100vh - 50px)
  // overflow: hidden

.main
  margin-left: 8px
  width: 100%

.content
  overflow-y: auto
  padding: 8px
  height: calc(100% - 60px)

  &::-webkit-scrollbar
    width: 6px

  &::-webkit-scrollbar-thumb
    border-radius: 8px
    background: #c5ccd5
</style>
