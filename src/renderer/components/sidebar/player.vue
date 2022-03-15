<script>
import { computed, ref } from 'vue'
import { buildPrograssData, formatTime } from '@renderer/utils/util'
import { useCurrentStore } from '@store/modules/current'

export default {
  setup() {
    const currentStore = useCurrentStore()
    const prograssData = buildPrograssData(3, 22, 27)
    const cover = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F05%2F20200205235030_rANxE.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648912994&t=0cfac58d551c1f7b1ad4bc807b474c40'

    const music = computed(() => {
      console.log(currentStore.currentSong);
      return currentStore.currentSong
    })

    const playStatus = computed(() => {
      return currentStore.playStatus
    })

    const togglePlay = () => {
      const audio = document.getElementById('musicTag')
      if (audio.paused) {
        audio.play()
      } else {
        audio.pause()
      }
      currentStore.setPlayStatus()
    }

    return {
      cover,
      prograssData,
      music,
      playStatus,
      formatTime,
      togglePlay
    }
  }
}

</script>

<template>
  <div class="player card">
    <audio id="musicTag" autoplay :src="music.url" />

    <div class="cover">
      <div class="border"></div>
      <img
        :src="music.picUrl || cover"
        :class="[playStatus ? '' : 'pause', 'playing']"
      />
      <div class="center"></div>
    </div>

    <div class="info">
      <div class="name-wrap">
        <h2 class="slide">
          <span class="name">{{ music.name || '开始聆听...' }}</span>
        </h2>
      </div>
      <p class="author" v-if="music.authors">
        <template v-for="(item, index) in music.authors" :key="index">
          {{ item.name }}
          {{ index === music.authors.length - 1 ? '' : ' / ' }}
        </template>
      </p>
      <p v-else>暂无</p>
    </div>

    <div class="progress">
      <span class="time">2:16</span>
      <template v-for="(item, index) in prograssData" :key="index">
        <div
          class="bar-item"
          :class="item"
          :style="{ height: item + 'px' }"
        ></div>
      </template>
      <span class="time">{{ formatTime(music.duration) }}</span>
    </div>

    <div class="control">
      <i class="iconfont icon-prev"></i>
      <i
        :class="[playStatus ? 'icon-pause' : 'icon-play', 'iconfont']"
        @click="togglePlay()"
      ></i>
      <i class="iconfont icon-next"></i>
    </div>
    <div class="operation">
      <i class="iconfont icon-random top-bg"></i>
      <i class="iconfont icon-sound top-bg"></i>
      <i class="iconfont icon-like-line top-bg"></i>
      <i class="iconfont icon-lrc top-bg"></i>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@keyframes rotation
  from
    -webkit-transform: rotate(0deg)

  to
    -webkit-transform: rotate(360deg)

.playing
  animation: rotation 20s linear infinite
  animation-play-state: running

.pause
  animation-play-state: paused

.player
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  height: 100%
  width: 260px
  min-width: 260px

.cover
  margin-top: 40px
  position: relative
  width: 190px
  height: 190px

  img
    position: relative
    z-index: 9
    width: 100%
    height: 100%
    border-radius: 50%

.border
  position: absolute
  width: 206px
  height: 206px
  border-radius: 50%
  transform: translate(-8px, -8px)
  background-color: #fff

.center
  position: absolute
  z-index: 9
  content: ''
  display: block
  width: 38px
  height: 38px
  border-radius: 50%
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  background-color: #454545
  box-shadow: inset 0px 0px 4px 0 rgba(0, 0, 0, 0.4)

.name-wrap
  margin: 36px 0 0

.name
  font-size: 18px
  font-weight: bolder

.author
  font-size: 14px

.progress
  display: flex
  align-items: center
  margin: 30px 0 20px
  font-size: 12px

.bar-item
  margin: 0 1.2px
  width: 2px
  background-color: #fff

.time
  margin: 0 8px

.control
  margin: 20px 0 36px
  display: flex
  align-items: center

i
  cursor: pointer

.icon-play, .icon-pause
  font-size: 30px

.icon-prev, .icon-next
  font-size: 20px

.icon-prev
  margin-right: 12px

.icon-next
  margin-left: 8px

.operation
  display: flex

  i
    display: flex
    justify-content: center
    margin: 8px
    line-height: 28px
    width: 28px
    height: 28px
    border-radius: 10px

.icon-random
  font-size: 18px

.icon-like-line
  font-size: 20px
</style>
