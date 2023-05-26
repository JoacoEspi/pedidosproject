import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => {
        /*
            Se podria declarar un carrito en la carpeta Stores-Login. Ejemplo:
            state: () => {
                    return { isLogin: false, user: {email:'', permissions:[]} }
            },
            permissions podria remplazarse por un listado de productos
        */
        return { isLogin: false, usuario: {email: ''}}
    },
    actions: {
        logout() {
            this.isLogin = false
            // Tendria q tambien poner el carrito de compras en vacio
            this.usuario = {email: ''}
        },
        login(usuario) {
            this.isLogin = true
            this.usuario = usuario
        }
       
    }
})