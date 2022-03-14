const Routers = [
  {
    path: '/listDetail',
    name: 'listDetail',
    component: () => import('@renderer/views/ListDetail/index.vue'),
    meta: {
      title: '歌单详情',
      icon: 'listDetail'
    }
  }
]

export { Routers }
