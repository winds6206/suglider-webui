import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:9527/',
  timeout: 10000,
})

export function post(url, data) {
  return api.post(url, data)
}


