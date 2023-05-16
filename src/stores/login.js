import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => {
        return { isLogin: false, usuario: {email: ''}}
    },
    actions: {
        logout() {
            this.isLogin = false
            this.usuario = {email: ''}
        },
        login(usuario) {
            this.isLogin = true
            this.usuario = usuario
        }
       
    }
})