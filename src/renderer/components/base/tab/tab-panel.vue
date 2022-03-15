<script>
import { ref, inject } from "vue"
export default {
  props: {
    actKey: {
      type: String,
      default: "1"
    },
    label: {
      type: String,
      default: "全部"
    }
  },

  setup() {
    let activeKey = ref();
    activeKey = inject("activeKey")
    return { activeKey }
  }
}
</script>

<template>
  <div v-show="actKey == activeKey">
    <slot></slot>
  </div>
</template>
