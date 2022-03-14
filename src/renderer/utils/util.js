export const formatTime = (time) => {
  if (time) {
    const minutes = Math.floor(time / 60000)
    const seconds = (time % 60000) / 1000
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds.toFixed(0)
  }
  return ''
}

/**
 * 从 array 中随机取出 conut 个元素
 */
export const randomArray = (array, count) => {
  const shuffled = array.slice(0)
  let len = array.length
  const min = len - count
  let temp, index
  while (len-- > min) {
    index = Math.floor((len + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[len]
    shuffled[len] = temp
  }
  return shuffled.slice(min)
}

/**
 * 进度条随机生成片段
 */
export const buildPrograssData = (start, end, count) => {
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push(Math.round(Math.random() * (start - end)) + end)
  }
  return arr
}

/**
 * 时间戳转年月日
 */
export const timestampConvert = (val) => {
  const date = new Date(val)
  const year = date.getFullYear()
  const month =
    date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const day = date.getDate()
  return year + '-' + month + '-' + day
}

/**
 * 封装为通用歌曲实体
 */
export const numberFormat = (val) => {
  let res
  const factor = 10000,
    sizes = ['', '万', '亿']
  let i
  if (val < factor) {
    return val
  }
  i = Math.floor(Math.log(val) / Math.log(factor))
  return (val / Math.pow(factor, i)).toFixed(2) + sizes[i]
}
