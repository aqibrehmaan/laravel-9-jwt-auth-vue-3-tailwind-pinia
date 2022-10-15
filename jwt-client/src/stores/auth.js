import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
      return { isLoggedIn: false }
    },
    actions: {
        setLoggedIn() {
            this.isLoggedIn = true;
        },
        removeLoggedIn() {
            this.isLoggedIn = false;
        }
    }
})