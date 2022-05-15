import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const API_URL = '/api/v1'
const client = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  timeout: 30000,
})

export default client
