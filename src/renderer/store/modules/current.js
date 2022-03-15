import { defineStore } from 'pinia'

export const useCurrentStore = defineStore({
  id: 'current',
  state: () => ({
    currentBrowseList: {},
    currentSong: {}
  }),

  getters: {
    getCurrentBrowseList() {
      return this.currentBrowseList
    }
  },

  actions: {
    setCurrentBrowseList(detail) {
      this.currentBrowseList = detail
    }
  }
})
