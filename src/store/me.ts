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
        })
    },
    getMeInfo(params: object) {
      client.get('http://0.0.0.0:8000/me', {
        headers: {
          Authorization: `Bearer ${this.me.access_token}`,
        }})
        .then((data: { data: object }) => {
          return data;
      })
    },
  },
});
