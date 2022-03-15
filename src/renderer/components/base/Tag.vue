<script setup>
  const props = defineProps({
    label: {type: String, default: ''}
  })
</script>

<template>
  <span>{{label}}</span>
</template>

<style lang="stylus" scoped>
span
  margin: 4px 0
  padding: 2px 8px
  background-color: rgba(255,255,255,0.058)
  font-size: 12px
  border-radius: 6px
</style>
