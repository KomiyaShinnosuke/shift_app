import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const API_URL = '/api/v1'
const client = axios.create({
  baseURL: API_URL,
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
  //   'Access-Control-Allow-Headers': "X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept",
  // },
  responseType: 'json',
  timeout: 3000,
})

export default client
