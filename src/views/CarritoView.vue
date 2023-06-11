<template>
  <ion-page>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Carrito de Compras</ion-card-title>
          <ion-card-subtitle>Listo para saborear y comprar. ¡Finalizá tu compra ahora!</ion-card-subtitle>
        </ion-card-header>

        <ion-row v-for="(producto) in carrito" :key="producto.id" size="12">
          <ion-col >
            <ion-card>
              <ion-card-header>
                <ion-card-title>{{ producto.nombre }}</ion-card-title>
                <ion-card-subtitle>Cantidad: {{ producto.cantidad }}</ion-card-subtitle>
                <ion-card-subtitle>Comentarios: {{ producto.comentario }}</ion-card-subtitle>
                <ion-card-subtitle>Precio total: {{ producto.precioTotal }}</ion-card-subtitle>
              </ion-card-header>

              <ion-button color="medium" @click="editarProducto(producto.id)">Editar</ion-button>
              <ion-button color="medium" @click="eliminarProducto(producto.id)">Eliminar</ion-button>
            </ion-card>
          </ion-col>
        </ion-row>


        <ion-card-content>
          <ion-card-subtitle class="subtitle-bold">Total de productos: {{ totalProductos }}</ion-card-subtitle>
          <ion-card-subtitle class="subtitle-bold">Sumatoria de productos: {{ sumatoria }}</ion-card-subtitle>
          <ion-card-subtitle class="subtitle-bold">Monto total de la compra: {{ montoTotal }}</ion-card-subtitle>
          <ion-button color="secondary" @click="efectuarCompra">Efectuar Compra</ion-button>
        </ion-card-content>
      </ion-card>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonContent } from "@ionic/vue";
import { useLoginStore } from '../stores/login.js';
import reporteService from "../service/reporteService.js";

export default {
  components: { IonPage, IonButton, IonContent },
    setup() {
    const loginStore = useLoginStore();
    const carrito = loginStore.carrito;
    const usuario = loginStore.usuario;
    return { carrito, usuario }
    },
  methods: {
    eliminarProducto(id) {
      this.$router.push('/eliminacion/'+ id )
    },
    editarProducto(id) {
      this.$router.push('/detalle/'+ id )
    },
    async efectuarCompra() {
      // Lógica para efectuar la compra y registrar la fecha del momento
      const fechaActual = new Date();
      const fechaCompra = fechaActual.toLocaleString();
      if (this.carrito.length > 0) {

        let reporte = {
            monto: this.montoTotal,
            cliente: this.usuario.Email,
            fecha: fechaCompra
        }

        await reporteService.agregar(reporte); //Agrego el registro en el mockapi Reporte

        alert(
          "Su comida está en camino. Fecha y hora de Compra: " + fechaCompra
        );
      } else {
        alert("Usted no seleccionó ningun producto.");
      }
    },
  },
  computed: {
    montoTotal() {
      let total = 0;
      for (let producto of this.carrito) {
        total += producto.precioTotal;
      }
      return total;
    },
    sumatoria() {
      let total = 0;
      for (let producto of this.carrito) {
        total += parseInt(producto.cantidad);
      }
      return total;
    },
    totalProductos() {
      return this.carrito.length;
    },
  }
};
</script>

<style>
.subtitle-bold {
  font-weight: bold;
}
</style>