<script>
import Tag from '@renderer/components/base/Tag.vue'
import {timestampConvert} from '@renderer/utils/util'

export default {
  props: {
    detail: { type: Object, required: true }
  },
  components: {
    Tag,
  },
  setup() {
    const dateCover = (val) => timestampConvert(val)

    return {
      dateCover
    }
  }
}
</script>

<template>
  <div class="detail-wrap">
    <div class="img">
      <img :src="detail.picUrl" :alt="detail.name">
    </div>
    <div class="detail-item">
      <Tag :label="'作者'" />
      <span>{{detail.authorName}}</span>
    </div>
    <div class="detail-item">
      <Tag :label="'标签'" />
      <span>
        <template v-for="(item, index) in detail.tags" :key="index">
          {{item}}
          {{ index === detail.tags.length - 1 ? '' : '，' }}
        </template>
      </span>
    </div>
    <div class="detail-item">
      <Tag :label="'创建时间'" />
      <span>{{dateCover(detail.createTime)}}</span>
    </div>
    <div class="detail-item">
      <Tag :label="'最后更新时间'" />
      <span>{{dateCover(detail.updateTime)}}</span>
    </div>
    <div class="detail-item">
      <Tag :label="'歌曲数量'" />
      <span>{{detail.count}}</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.detail-wrap
  margin-top: 20px
  display: flex
  flex-direction: column
  img
    width: 62%
    border-radius: 12px

.img
  margin-bottom: 10px
  text-align: center

.detail-item
  display: flex
  align-items: center
  justify-content: space-between
  padding: 12px 10px
  border-top: 1px solid rgba(255,255,255,0.058)
  font-size: 14px

  &:last-child
    border-bottom: 1px solid rgba(255,255,255,0.058)
  
</style>
