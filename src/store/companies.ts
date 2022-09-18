import { defineStore } from "pinia";
import client from '~/core/api'

type COMPANY = {
  tel: string;
  name: string;
  postcode: string;
  address: string;
  license: number;
};

export const useCompaniesStore = defineStore("companies", {
  state: () => {
    return {
      companies: [] as COMPANY[],
    };
  },
  actions: {
    getCompany() {
      client.get(`http://0.0.0.0:8000/company`)
        .then((data: { data: COMPANY[] }) => {
          this.companies = data.data;
        });
    },
  },
});
