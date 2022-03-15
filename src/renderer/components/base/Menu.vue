<script setup>
import { Menu } from '@renderer/router/modules/menu'
import { useRouter } from 'vue-router'
const router = useRouter()
const navigate = (router) => {
  console.log(router);
  router.push({path: router})
}
</script>

<template>
  <div class="menu">

      <router-link v-for="item in Menu" :key="item.path" :to="item.path" v-slot="{navigate, isActive}" custom>
        <span class="menu-item top-bg" role="link" :class="isActive ? 'active' : ''" @click="navigate(item.path)">
          <i :class="'iconfont icon-' + item.meta?.icon"></i>
          <span>{{ item.meta?.title }}</span>
        </span>
      </router-link>

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
