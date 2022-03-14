const Menu = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@renderer/views/Home/index.vue'),
    meta: {
      title: '首页',
      icon: 'home'
    }
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('@renderer/views/Explore/index.vue'),
    meta: {
      title: '探索',
      icon: 'explore'
    }
  },
  {
    path: '/library',
    name: 'library',
    component: () => import('@renderer/views/Library/index.vue'),
    meta: {
      title: '音乐库',
      icon: 'library'
    }
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@renderer/views/History/index.vue'),
    meta: {
      title: '播放历史',
      icon: 'history'
    }
  },
  {
    path: '/local',
    name: 'local',
    component: () => import('@renderer/views/Local/index.vue'),
    meta: {
      title: '本地音乐',
      icon: 'local'
    }
  }
]

export { Menu }
