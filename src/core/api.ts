import axios from 'axios'
axios.defaults.withCredentials = false;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const accessTokenCookie = document.cookie.split('; ').find(row => row.startsWith('access_token'))
const accessToken = accessTokenCookie != null ? accessTokenCookie.split('=')[1] : null;
if (accessToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

const API_URL = '/api/v1'
const client = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  timeout: 30000,
})

export default client
