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
    editCarritoItemCant(id, cantidad) {
      // Buscar el producto por ID en el carrito
      const itemIndex = this.carrito.findIndex(item => item.id === id);
    
      if (itemIndex !== -1) {
        // Modificar la cantidad del producto
        this.carrito[itemIndex].cantidad = cantidad;
      }
    },
    editCarritoItemCom(id, comentario) {
      // Buscar el producto por ID en el carrito
      const itemIndex = this.carrito.findIndex(item => item.id === id);
    
      if (itemIndex !== -1) {
        // Modificar el comentario del producto
        this.carrito[itemIndex].comentario = comentario;
      }
    },
    editCarritoItemTotal(id, precioTotal) {
      // Buscar el producto por ID en el carrito
      const itemIndex = this.carrito.findIndex(item => item.id === id);
    
      if (itemIndex !== -1) {
        // Modificar el precio Total del producto
        this.carrito[itemIndex].precioTotal = precioTotal;
      }
    },
    existeEnCarrito(id) {
      // Buscar el producto por ID en el carrito
      const itemEncontrado = this.carrito.find(item => item.id === id);
      
      // Devolver true si el producto existe en el carrito, o false en caso contrario
      return itemEncontrado !== undefined;
    },
    removeFromCarrito(index) {
      this.carrito.splice(index, 1);
    },
    clearCarrito() {
      this.carrito = [];
    }
  }
});
