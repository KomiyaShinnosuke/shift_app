import axios from 'axios'

const API_URL = '/api/v1'
const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json',
  timeout: 3000,
})

export default client
