<script>
export default {
  name: 'SongListItem',
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    picUrl: { type: String, required: true }
  },
  setup() {

  }
}
</script>

<template>
  <div class="singer">
    <div class="singer-inner">
      <img :src="picUrl" :alt="name" class="picUrl" />
      <p class="title">{{ name }}</p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.singer
  width: 24%
  padding: 0 6px
  margin-bottom: 20px
  text-align: center

  img
    margin-bottom: 6px
    border-radius: 50%

.title
  font-size: 14px

.singer-inner
  position: relative
  padding: 6px 6px 10px
  height: 100%
  border-radius: 14px
  transition: background-color 0.25s
  cursor: pointer

  &:hover
    background-color: rgba(255, 255, 255, 0.11)
</style>
