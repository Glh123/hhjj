import axios from 'axios'

const BaseUrl = 'http://dscn5m.natappfree.cc'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: (url) => axios.get(`${BaseUrl+url}`),
  post: (url, params) => axios.post(`${BaseUrl+url}`, params)
}


