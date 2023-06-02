import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
  state: () => ({
    isLogin: false,
    usuario: { email: '' },
    carrito: []
  }),
  actions: {
    logout() {
      this.isLogin = false;
      this.usuario = { email: '' };
      this.clearCarrito();
    },
    login(usuario) {
      this.isLogin = true;
      this.usuario = usuario;
    },
    addToCarrito(item) {
      this.carrito.push(item);
    },
    removeFromCarrito(index) {
      this.carrito.splice(index, 1);
    },
    clearCarrito() {
      this.carrito = [];
    }
  }
});
