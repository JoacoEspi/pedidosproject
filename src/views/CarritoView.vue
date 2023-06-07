<template>
  <ion-page>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Carrito de Compras</ion-card-title>
          <ion-card-subtitle>Listo para saborear y comprar. ¡Finalizá tu compra ahora!</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list v-for="(producto) in carrito" :key="producto.id">
            <ion-item>
              <ion-thumbnail>
                <ion-img :src="producto.imagen">Producto</ion-img>
              </ion-thumbnail>
              <ion-label style="margin-left: 10px; display: flex; align-items: center;">
                {{ producto.nombre }} - Cantidad: {{ producto.cantidad }} - Precio total: {{ producto.precioTotal }} 
                <ion-button style="margin-left: 10px;" @click="editarProducto(producto.id)">Editar</ion-button>
                <ion-button style="margin-left: 10px;" @click="eliminarProducto(producto.id)">Eliminar</ion-button>
              </ion-label>
            </ion-item>
          </ion-list>
          <p>Total de productos: {{ totalProductos }}</p>
          <p>Sumatoria de productos: {{ sumatoria }}</p>
          <p>Monto total de la compra: {{ montoTotal }}</p>
        </ion-card-content>

        <ion-button @click="efectuarCompra">Efectuar Compra</ion-button>
      </ion-card>
  </ion-page>
</template>

<script>
// Esta view tendria: Mostraria un listado de productos seleccionados (Estarian en la lista "carrito")
// Al agregar un producto al carrito se debe agregar una copia del producto y no una referencia directa (para evitar que se modifique el producto de la "base de datos")
// Permitiria ir hacia la vista de eliminacion o modificacion para cambiar algo de el producto seleccionado
// Al modificar o eliminar el producto tiene q enviar el array completo junto con el id para no perder los datos.
// Permitiria efectuar la compra, una vez efectuada la compra registrar la fecha del momento para enviarlo al registro
// (No enviaria a otra vista sino que mostraria en pantalla un mensaje del estilo "Su comida esta en camino")
// El listado tiene que tener las cantadidades de productos, su sumatoria y un monto total de la compra.
// Se deberia guardar un registro de la compra efectuada para mas adelante generar un registro gerencial. (Que se guarde en un array de la vista "ReportelView")
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
  data() {
    return {
      totalProductos: 0,
      sumatoria: 0,
    };
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
        total += producto.cantidad;
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
</style>