<template>
  <ion-page>
    <ion-card>
      <ion-card-header>
        <ion-card-title
          >¿Está seguro que desea eliminar el siguiente producto del carrito de
          compras?</ion-card-title
        >
      </ion-card-header>

      <ion-row>
          <ion-col v-for="obj in carrito" :key="obj.id" size="12">

            <ion-card v-if="obj.id === idDelete">
              <ion-card-header>
                <ion-card-title>{{ obj.nombre }}</ion-card-title>
                <ion-card-subtitle>Cantidad: {{ obj.cantidad }}</ion-card-subtitle>
                <ion-card-subtitle>Comentarios: {{ obj.comentario }}</ion-card-subtitle>
                <ion-card-subtitle>Precio total: {{ obj.precioTotal }}</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>

      <ion-card-content>
        <ion-button @click="eliminar" color="medium">Eliminar</ion-button>
      </ion-card-content>
    </ion-card>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonContent, IonImg } from "@ionic/vue";
import productoService from "../service/productoService";
import { useLoginStore } from "../stores/login.js";

export default {
  components: { IonPage, IonButton, IonContent, IonImg },
  setup() {
    const loginStore = useLoginStore();
    const carrito = loginStore.carrito;

    return {
      carrito,
      loginStore,
    };
  },
  methods: {
    eliminar() {
      const index = this.carrito.findIndex(
        (producto) => producto.id === this.idDelete
      );
      if (index !== -1) {
        this.carrito.splice(index, 1);
      }
      if (this.carrito.length == 0) {
        this.$router.push("/productos");
      } else {
        this.$router.push("/carrito");
      }
    },
    volverCarrito() {
      this.$router.push("/carrito");
    },
  },
  data() {
    return {
      idDelete: 0,
    };
  },
  async mounted() {
    const producto = await productoService.cargarPorId(this.$route.params.id);
    this.idDelete = producto.id;
  },
};
</script>