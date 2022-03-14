<script setup>
import { Routers } from '@renderer/router/modules/routers'
</script>

<template>
  <div class="menu">
    <template v-for="(item, index) in Routers" :key="index">
      <router-link v-slot="{ navigate }" :to="item.path" custom>
        <span class="menu-item top-bg" role="link" @click="navigate">
          <i :class="'iconfont icon-' + item.meta?.icon"></i>
          <span>{{ item.meta?.title }}</span>
        </span>
      </router-link>
    </template>
  </div>
</template>

<style lang="stylus" scoped>
.menu
  gap: 10px
  justify-content: center
  width: 100%
  padding: 16px 10px

.menu, .menu-item
  display: flex
  align-items: center

.menu-item
  padding: 5px 12px 5px 10px
  font-size: 14px
  cursor: pointer
  gap: 10px
  border-radius: 10px
</style>
