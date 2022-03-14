import { request } from '@renderer/utils/request'
import { weapi, eapi } from '@renderer/utils/crypto'
const url = require('url')

/**
 * 热门歌单
 */
export const hotSongList = () => {
  const data = {
    limit: 8,
    offset: 0,
    total: true,
    n: 1000,
    csrf_token: ''
  }
  return request('https://music.163.com/weapi/personalized/playlist', {
    method: 'POST',
    headers: buildHeaders(),
    data: builderData(data, 'weapi')
  })
}

/**
 * 推荐艺人
 */
export const singers = () => {
  const data = {
    limit: 50,
    offset: 0,
    total: true
  }
  return request('https://music.163.com/weapi/artist/top', {
    method: 'POST',
    headers: buildHeaders(),
    data: builderData(data, 'weapi')
  })
}

/**
 * 歌单详情
 * @param {*} id 歌单 ID
 */
export const listDetail = async (id) => {
  let data = {
    id: id,
    n: 100000,
    s: 8
  }
  
  const { playlist } = await request('https://music.163.com/api/v6/playlist/detail', {
    method: 'POST',
    headers: buildHeaders(),
    data: builderData(data, 'api')
  })
  const result = {
    name: playlist.name,
    picUrl: playlist.coverImgUrl,
    createTime: playlist.createTime,
    updateTime: playlist.updateTime,
    desc: playlist.description,
    tags: playlist.tags,
    songCount: playlist.trackCount,
    authorId: playlist.creator.userId,
    authorName: playlist.creator.nickname
  }
  const songIds = playlist.trackIds.map((e) => e.id)
  const params = '[' + songIds.map((id) => '{"id":' + id + '}').join(',') + ']'
  data = {
    c: params
  }
  const songsDetail = await request('https://music.163.com/weapi/v3/song/detail', {
    method: 'POST',
    headers: buildHeaders(),
    data: builderData(data, 'weapi')
  })
  result.songsDetail = songsDetail.songs
  result.privileges = songsDetail.privileges
  return result
}

const builderData = (data, type) => {
  let params = {}
  if (type === 'weapi') {
    params = new url.URLSearchParams(weapi(data))
  } else if (type === 'eapi') {
    params = new url.URLSearchParams(eapi('/api/song/enhance/player/url', data))
  } else {
    params = new url.URLSearchParams(data)
  }
  return params.toString()
}

const buildHeaders = () => {
  return {
    Accept: '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
    Connection: 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    Referer: 'http://music.163.com',
    Host: 'music.163.com'
  }
}
