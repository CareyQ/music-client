import { defineStore, acceptHMRUpdate } from 'pinia'
import { convert } from '@renderer/utils/util'
import { music } from '@renderer/api/netease'

export const useCurrentStore = defineStore({
  id: 'current',
  state: () => ({
    currentBrowseList: {},
    currentSong: {},
    playStatus: false
  }),

  getters: {
    getCurrentBrowseList() {
      return this.currentBrowseList
    }
  },

  actions: {
    setCurrentBrowseList(detail) {
      this.currentBrowseList = detail
    },

    setCurrentSong(song) {
      music(song.id).then((res) => {
        this.currentSong = convert(song, res.data[0].url)
        this.playStatus = true
      })
    },

    setPlayStatus() {
      this.playStatus = !this.playStatus
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCurrentStore, import.meta.hot))
}
