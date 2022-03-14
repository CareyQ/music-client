<script>
import { useRouter } from 'vue-router'
import { numberFormat } from '@renderer/utils/util'
export default {
  name: 'SongListItem',
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    picUrl: { type: String, required: true },
    count: { type: Number, required: true }
  },
  setup(props) {
    const playCount = (val) => numberFormat(val)

    const router = useRouter()
    const toListDetail = (id) => {
      router.push({path: '/listDetail', query: { id: id }})
    }

    return {
      playCount,
      toListDetail
    }
  }
}
</script>

<template>
  <div class="song-list-item" @click="toListDetail(id)">
    <div class="item-inner">
      <img :src="picUrl" :alt="name" class="picUrl" />
      <span class="count">{{ playCount(count) }}</span>
      <i class="iconfont icon-play-highlight"></i>
      <p class="title">{{ name }}</p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.song-list-item
  width: 24%
  padding: 0 6px
  margin-bottom: 10px

.item-inner
  position: relative
  padding: 6px 6px 10px
  height: 100%
  border-radius: 14px
  transition: background-color 0.25s
  cursor: pointer

  img
    margin-bottom: 6px
    border-radius: 14px

  &:hover
    background-color: rgba(255, 255, 255, 0.11)

    .icon-play-highlight
      display: block

.count
  position: absolute
  top: 8px
  right: 10px
  padding: 2px 6px
  border-radius: 8px
  font-size: 12px
  background-color: rgba(0, 0, 0, 0.39)

.icon-play-highlight
  display: none
  position: absolute
  left: 12px
  bottom: 64px
  padding-top: 8px
  padding-left: 8px
  width: 30px
  height: 30px
  background-color: rgba(0, 0, 0, 0.44)
  border-radius: 12px
  transition: border-radius 0.25s

  &:hover
    border-radius: 50%

.title
  font-size: 14px
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  overflow: hidden
  text-overflow: ellipsis
</style>
