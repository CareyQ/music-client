<script setup>
import UserInfo from './userInfo.vue'
import Search from '../base/SearchInput.vue'
</script>

<template>
  <header class="header card">
    <UserInfo />
    <div class="header-main">
      <div class="header-main-left">
        <i class="iconfont icon-return"></i>
        <i class="iconfont icon-refresh"></i>
        <Search />
      </div>
      <div class="header-main-right">
        <i class="iconfont icon-set"></i>
        <i class="iconfont icon-line"></i>
        <i class="iconfont icon-minimize"></i>
        <i class="iconfont icon-close"></i>
      </div>
    </div>
  </header>
</template>

<style lang="stylus" scoped>
.header
  display: flex
  padding: 10px 16px
  width: 100%
  border-radius: 0
  -webkit-app-region: drag

.header-main
  display: flex
  justify-content: space-between
  width: calc(100% - 260px)

.header-main-left
  i
    margin-right: 10px

.header-main-right
  i
    margin-left: 16px

.header-main-left, .header-main-right
  display: flex
  align-items: center

i
  cursor: pointer
  -webkit-app-region: no-drag

.icon-return
  font-size: 18px

.icon-minimize
  margin-top: 2px

.icon-close
  font-size: 15px
</style>
