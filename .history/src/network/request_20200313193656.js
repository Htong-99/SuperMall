import Axios from 'axios'
export function request(config) {
  const instance = Axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout = 5000
  })


}