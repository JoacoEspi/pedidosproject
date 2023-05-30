<template>
  <ion-page>
    <ion-content>
      <h2>
        ¿Está seguro que desea eliminar el siguiente producto del carrito de
        compra?
      </h2>
      <ul>
        <li v-for="obj in carrito" :key="obj.id">
          <p>Usuario ID: {{ obj.id }}</p>
          <p>Nombre: {{ obj.nombre }}</p>
        </li>
      </ul>
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
      carrito: [], // La lista de objetos se asignará aquí después de decodificarla
    };
  },
  created() {
    const encodedCarrito = this.$route.query.objects;
    //const encodedIdProducto = this.$route.query.idEliminar;
    const decodedCarrito = JSON.parse(decodeURIComponent(encodedCarrito));
    //const decodedIdProducto = JSON.parse(decodeURIComponent(encodedIdProducto));
    this.carrito.push(decodedCarrito);
  },
};
</script>

<style>
</style>