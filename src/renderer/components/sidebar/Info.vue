<script>
import TabGroup from '@renderer/components/base/tab/tab-group.vue'
import TabPanel from '@renderer/components/base/tab/tab-panel.vue'
import ListDetail from '@renderer/components/widget/ListDetail.vue'
import Empty from '@renderer/components/base/Empty.vue'
import { useCurrentStore } from '@store/modules/current'
import { computed } from 'vue'

export default {
  components: {
    TabGroup,
    TabPanel,
    ListDetail,
    Empty
  },
  setup() {
    const currentSotre = useCurrentStore()

    const currentBrowseList = computed(() => {
      return currentSotre.currentBrowseList
    })

    const currentSong = computed(() => {
      return currentSotre.currentSong
    })

    return {
      currentBrowseList,
      currentSong
    }
  }
}
</script>

<template>
  <div class="info card">
    <tab-group defaultKey="1">
      <tab-panel label="详情" icon="play-detail" actKey="1">
         <tab-group defaultKey="1-1">
           <tab-panel label="歌单信息" actKey="1-1">
              <ListDetail v-if="currentBrowseList.value" :detail="currentBrowseList" />
              <Empty v-else />
           </tab-panel>
           <tab-panel label="歌曲信息" actKey="1-2">歌曲-内容</tab-panel>
         </tab-group>
      </tab-panel>
      <tab-panel label="队列" icon="queue" actKey="2">队列-内容</tab-panel>
      <tab-panel label="歌词" icon="info-lrc" actKey="3">歌词-内容</tab-panel>
    </tab-group>
  </div>
</template>

<style lang="stylus" scoped>
.info
  margin-left: 8px
  width: 240px
  min-width: 240px
  padding: 10px
</style>
