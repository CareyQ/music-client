<script setup>
import { Menu } from '@renderer/router/modules/menu'
</script>

<template>
  <ul class="menu">
    <li v-for="item in Menu" :key="item.path">
      <router-link active-class :to="item.path" class="menu-item top-bg">
        <i :class="'iconfont icon-' + item.meta?.icon"></i>
        <span>{{ item.meta?.title }}</span>
      </router-link>
    </li>
  </ul>
</template>

<style lang="stylus" scoped>
.menu
  gap: 10px
  justify-content: center
  width: 100%
  padding: 16px 10px 6px

.menu, .menu-item
  display: flex
  align-items: center

.menu-item
  padding: 5px 12px 5px 10px
  font-size: 14px
  cursor: pointer
  gap: 10px
  border-radius: 10px

.router-link-exact-active.menu-item
  background-color: #3f92fd
</style>
