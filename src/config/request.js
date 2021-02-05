import axios from 'axios'

const BaseUrl = 'http://192.168.1.27:8080'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: (url) => axios.get(`${BaseUrl + url}`),
  post: (url, params) => axios.post(`${BaseUrl + url}`, params)
}


