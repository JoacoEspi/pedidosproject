<template>
  <ion-page>
    <ion-content>
      <h2>
        ¿Está seguro que desea eliminar el siguiente producto del carrito de
        compra?
      </h2>
      <p>{{ producto }}</p>
      <ion-button @click="eliminar" color="danger">Eliminar</ion-button>
      <ion-button @click="volverCarrito" color="warning"
        >Volver al Carrito</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script>
// Se le pregunta al usuario si realmente quiere eliminar la compra o no
// Y que muestre el producto, cantidad y monto
import { IonPage, IonButton, IonContent } from "@ionic/vue";

export default {
  components: { IonPage, IonButton, IonContent },
  methods: {
    eliminar() {
      //Acá debería eliminar el producto del carrito de compra
      this.$router.push("/carrito"); //Vuelve al carrito (que ya no tiene el producto que se eliminó)
    },
    volverCarrito() {
      this.$router.push("/carrito"); //Vuelve al carrito (no se elimina ningun producto)
    },
  },
  data() {
    return {
      producto: "",
    };
  },
  created() {
    const carritoJSON = decodeURIComponent(this.$route.params.carrito);
    const carrito = JSON.parse(carritoJSON);
    const productoId = this.$route.params.productoId;

    this.producto = carrito.find((producto) => producto.id === productoId);
  },
};
</script>

<style>
</style>