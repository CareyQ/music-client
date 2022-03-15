<script>
import { ref, provide } from 'vue'
export default {
  props: {
    defaultKey: {
      type: String,
      default: '1'
    }
  },
  setup(props, context) {
    const tabTitLists = context.slots.default()
    let activeKey = ref(props.defaultKey) //当前key
    provide('activeKey', activeKey)

    const barRef = ref(null)
    const titRef = ref(null)

    function onTabClick(event, tab, index) {
      activeKey.value = tab.props.actKey
    }
    return {
      tabTitLists,
      barRef,
      titRef,
      onTabClick,
      activeKey
    }
  }
}
</script>

<template>
  <div class="tab-group">
    <div ref="titsRef" class="tab-header" layout="row" layout-wrap>
      <div
        ref="titRef"
        :class="[{ active: activeKey == item.props.actKey }, 'tab-nav', 'top-bg']"
        v-for="(item, index) in tabTitLists"
        :key="item"
        @click="onTabClick($event, item, index)"
      >
        <i v-if="item.props.icon" :class="['icon-' + item.props.icon, 'iconfont']"></i>
        {{ item.props.label }}
      </div>
    </div>
    <div class="tab-panel">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.tab-group
  position relative
  height: 100%

.tab-header
  display: flex
  justify-content: space-between
  font-size: 12px

.tab-nav
  padding: 4px 10px
  border-radius: 10px
  cursor pointer

.iconfont
  margin-right: 4px
  font-size: 12px

.active.tab-nav
  background-color: #1890ff

.tab-panel
  margin-top: 10px
  .tab-header
    border-bottom: 2px solid rgba(255,255,255,0.058)
  .tab-nav
    width 50%
    background-color: unset
    text-align: center
    border-radius: 10px 10px 0 0
  .active.tab-nav
    background-color: rgba(255,255,255,0.058)
</style>
