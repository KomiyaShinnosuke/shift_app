import { defineStore } from "pinia";
import client from '~/core/api'

type ME = {
  id: number;
  email: string;
  access_token: string;
  refresh_token: string;
  token_type: string;
};

export const useMeStore = defineStore("users", {
  state: () => ({
    me: {} as ME,
  }),
  actions: {
    postLoginInfo(params: object) {
      return client.post('http://0.0.0.0:8000/token', params)
        .then((data: { data: ME }) => {
          const response = data.data;
          this.me = response;
          document.cookie = `access_token=${response.access_token}`;
          document.cookie = `refresh_token=${response.refresh_token}`;
        })
    },
    getMeInfo() {
      client.get('http://0.0.0.0:8000/me')
        .then((data: { data: object }) => {
          return data;
      })
    },
  },
});
