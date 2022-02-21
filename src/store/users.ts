import { defineStore } from "pinia";

type USER = {
  id: number;
  name: string;
  admin: boolean;
};

export const useUserStore = defineStore("users", {
  state: () => {
    return {
      users: {} as USER[]
    };
  },
  getters: {
    findUser(state) {
      return (id: number): USER => {
        const currentUser = state.users.find((user) => user.id === id);
        if (currentUser === undefined) throw new Error("todo not found");

        return currentUser;
      };
    },
  },
  actions: {
    // addUser(name: string) {
    //   this.users.push({ id: this.lastId++, name, admin: false });
    // },
  },
});
