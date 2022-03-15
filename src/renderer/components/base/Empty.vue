<script>
import img from '@renderer/assets/images/empty.svg'

export default {
  setup() {
    return {
      img
    }
  }
}
</script>

<template>
  <div class="empty">
    <img :src="img" alt="暂无内容">
    <p>暂无内容，浏览歌单查看</p>
  </div>
</template>

<style lang="stylus" scoped>
.empty
  position: absolute
  transform: translate(5%, 50%)
  text-align: center
  img
    width: 200px
  p
    font-size: 14px
</style>