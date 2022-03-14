<script>
import { onMounted, reactive, ref, toRefs, toRef } from 'vue'
import { useRoute } from 'vue-router'
import { listDetail } from '@renderer/api/netease'

export default {
  setup() {
    const route = useRoute()
    const id = route.query.id
    let data = reactive({
      detail: {}
    })

    onMounted(async() => {
      const res = await listDetail(id)
      data.detail = res
      console.log(data);
    })

    return {
      ...toRefs(data)
    }
  }
}


</script>

<template>
  <div class="detail card">
    <div class="cover">
      <div class="cover-bg" :style="'background-image: url('+ detail.picUrl + ')'"></div>
      <img :src="detail.picUrl" :alt="detail.name">
    </div>

    <div class="list">
      <p>666</p>
      <p>666</p>
      <p>666</p>
      <p>666</p>
      <p>666</p>
      <p>666</p>
      <p>666</p>
      <p>666</p>
      <p>666</p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.detail
  border-radius: 20px
  overflow: hidden

.cover
  position relative
  display: flex
  justify-content: center
  padding: 10px 0
  overflow: hidden
  
  img
    position relative
    width: 120px
    height: 120px

.cover-bg
  position: absolute
  top: 0
  left: 0
  background-size: cover
  width: 100%
  height: 100%
  filter: blur(10px)
</style>
