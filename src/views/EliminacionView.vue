<template>
  <ion-page>
    <ion-content>
      <h2>
        ¿Está seguro que desea eliminar el siguiente producto del carrito de
        compras?
      </h2>
      <ul v-for="obj in carrito" :key="obj.id">
        <div v-if="idDelete === obj.id">
          <li>
            <p>Nombre: {{ obj.nombre }}</p>
            <p>Precio: {{ obj.precio }}</p>
          </li>
        </div>
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
      const index = this.carrito.findIndex((producto) => producto.id === this.idDelete);
      if (index !== -1) {
        this.carrito.splice(index, 1);
      }
      const carritoCopia = JSON.parse(JSON.stringify(this.carrito));
      const encodedCarrito = encodeURIComponent(JSON.stringify(carritoCopia));
      this.$router.push({
        path: "/carrito",
        query: {
          objects2: encodedCarrito,
          borrado: true
        },
      });
    },
    volverCarrito() {
      this.$router.push("/carrito"); //Vuelve al carrito (no se elimina ningun producto)
    },
  },
  data() {
    return {
      carrito: [], // La lista de objetos se asignará aquí después de decodificarla
      idDelete: 0,
    };
  },
  created() {
    const encodedCarrito = this.$route.query.objects;
    this.carrito = JSON.parse(decodeURIComponent(encodedCarrito));

    const encodedIdDelete = this.$route.query.idDelete;
    this.idDelete = JSON.parse(decodeURIComponent(encodedIdDelete));

    console.log(encodedCarrito);
    console.log(encodedIdDelete);
  },
};
</script>

<style>
</style>