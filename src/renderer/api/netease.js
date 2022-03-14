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
