<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { randomArray } from '@renderer/utils/util'
import { hotSongList, singers } from '@renderer/api/netease'
import SongListItem from '@renderer/components/base/SongListItem.vue'
import Singer from '@renderer/components/base/Singer.vue'

export default {
  components: {
    SongListItem,
    Singer
  },
  setup() {
    const state = reactive({
      songList: [],
      singers: []
    })

    onMounted(async () => {
      const { result: data } = await hotSongList()
      state.songList = data
    })
    onMounted(async () => {
      const { artists: data } = await singers()
      state.singers = randomArray(data, 8)
      console.log(state.singers);
    })

    return {
      ...toRefs(state)
    }
  },
}
</script>

<template>
  <div v-if="songList" style="min-height: 461px">
    <h2 class="module-title">推荐歌单</h2>
    <div class="song-list">
      <template v-for="(item, index) in songList" :key="index">
        <SongListItem
          :id="item.id"
          :name="item.name"
          :picUrl="item.picUrl"
          :count="item.playCount"
        />
      </template>
    </div>
  </div>

  <div v-if="singers">
    <h2 class="module-title">推荐艺人</h2>
    <div class="singers">
      <template v-for="(item, index) in singers" :key="index">
        <Singer :id="item.id" :name="item.name" :picUrl="item.img1v1Url" />
      </template>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.song-list, .singers
  display: flex
  justify-content: space-between
  flex-wrap: wrap
</style>