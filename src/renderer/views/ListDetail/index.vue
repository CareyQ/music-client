<script>
import { onMounted, reactive, ref, toRefs, toRef } from 'vue'
import { useRoute } from 'vue-router'
import { listDetail } from '@renderer/api/netease'
import defaultImg from '@renderer/assets/images/placeholder.png'
import { formatTime } from '@renderer/utils/util'

export default {
  setup() {
    const route = useRoute()
    const id = route.query.id
    let data = reactive({
      detail: {}
    })

    onMounted(async () => {
      const res = await listDetail(id)
      data.detail = res
      console.log(res);
    })

    return {
      ...toRefs(data),
      defaultImg,
      formatTime
    }
  }
}


</script>

<template>
  <div class="detail card">
    <div class="info">
      <div
        class="bg"
        :style="'background-image: url(' + detail.picUrl + ')'"
      ></div>
      <img
        :src="detail.picUrl ? detail.picUrl : defaultImg"
        :alt="detail.name"
      />
      <div class="info-detail">
        <div>
          <p class="name">{{ detail.name }}</p>
          <p class="desc" v-html="detail.desc"></p>
        </div>

        <div class="info-btn">
          <span class="play-btn">
            <span>播放</span>
            <i class="iconfont icon-play-highlight"></i>
          </span>
          <span class="like-btn">
            <span>收藏</span>
            <i class="iconfont icon-like"></i>
          </span>
        </div>
      </div>
    </div>

    <div class="list">
      <template v-for="(item, index) in detail.songsDetail" :key="index">
        <div class="song">
          <span class="title">
            <span>{{ item.name }}</span>
            <span v-if="item.tns" class="subtitle">{{
              ' - (' + item.tns + ')'
            }}</span>
          </span>
          <span class="author">
            <template v-for="(e, i) in item.ar" :key="i">
              {{ e.name }}
              {{ i === item.ar.length - 1 ? '' : ' / ' }}
            </template>
          </span>
          <span class="art">{{ item.al.name }}</span>
          <span class="time">{{ formatTime(item.dt) }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.detail
  border-radius: 20px
  max-height: 700px
  height: 100%

.info
  position: relative
  display: flex
  overflow: hidden
  padding: 10px

  &:after
    content: ''
    position: absolute
    z-index: 1
    width: 100%
    height: 100%
    top: 0
    left: 0
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.43))

  img
    position: relative
    width: 130px
    height: 130px
    border-radius: 12px

  .bg
    position: absolute
    background-size: cover
    filter: blur(18px)

.info-detail
  position: relative
  z-index: 9
  padding: 10px
  width: 100%
  overflow: hidden

.name
  font-size: 18px
  font-weight: bolder
  margin-bottom: 4px
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6)

.desc
  font-size: 14px

.info-btn
  position: absolute
  display: flex
  justify-content: flex-end
  right: 0
  bottom: 0
  font-size: 14px
  width: 100%
  gap: 14px

.play-btn, .like-btn
  display: flex
  align-items: center
  gap: 6px
  padding: 4px 8px 4px 10px
  background-color: rgba(255, 255, 255, 0.192)
  border-radius: 10px
  cursor: pointer

.info
  margin-bottom: 8px

.list
  padding: 8px
  max-height: 346px
  overflow-y: auto

  &::-webkit-scrollbar
    width: 6px

  &::-webkit-scrollbar-thumb
    border-radius: 8px
    background: #c5ccd5

.song
  display: flex
  align-items: center
  margin-bottom: 8px
  font-size: 14px
  padding: 5px 10px
  border-radius: 20px
  background-color: rgba(255, 255, 255, 0.137)
  gap: 15px
  cursor: pointer
  transition: background-color 0.2s ease

  &:hover
    background-color: rgba(255, 255, 255, 0.2)

.title
  width: 45%

.author
  width: 25%

.art
  width: 20%

.time
  text-align: right
  width: 8%

.title, .author, .art
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.subtitle
  opacity: 0.4
</style>
