const needle = require('needle')

export const request = (url, options) => {
  return new Promise((resolve, reject) => {
    fetchData(url, options, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}

const fetchData = async (url, options, callback) => {
  needle.request(
    options.method || 'GET',
    url,
    options.data,
    options.headers,
    (err, resp) => {
      if (!err) {
        let res = (resp.body = resp.raw.toString())
        try {
          res = JSON.parse(resp.body)
        } catch (e) {
          console.log(e)
          callback(err, null)
        }
        callback(null, res)
      }
    }
  ).request
}
