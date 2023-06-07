<template>
  <ion-page>
    <ion-card>
    <ion-card-header>
          <ion-card-title>¿Está seguro que desea eliminar el siguiente producto del carrito de compras?</ion-card-title>
        </ion-card-header>
    <ion-card-content>
          <ion-list v-for="obj in carrito" :key="obj.id">
            <ion-item v-if="obj.id === idDelete">
              <ion-thumbnail>
                <ion-img :src="'.'+obj.imagen">Producto</ion-img>
              </ion-thumbnail>
              <ion-label style="margin-left: 10px; display: flex; align-items: center;">
                {{ obj.nombre }} - Cantidad: {{ obj.cantidad }} - Precio total: {{ obj.precioTotal }}
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-button @click="eliminar" color="danger">Eliminar</ion-button>
          <ion-button @click="volverCarrito" color="warning">Volver al Carrito</ion-button>
        </ion-card-content>
        </ion-card>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonContent, IonImg } from "@ionic/vue";
import productoService from '../service/productoService';
import { useLoginStore } from '../stores/login.js';

export default {
  components: { IonPage, IonButton, IonContent, IonImg },
  setup() {
    const loginStore = useLoginStore();
    const carrito = loginStore.carrito;

    return {
      carrito,
      loginStore
    };
  },
  methods: {
    eliminar() {
      const index = this.carrito.findIndex((producto) => producto.id === this.idDelete);
      if (index !== -1) {
        this.carrito.splice(index, 1);
      }
      if(this.carrito.length == 0){
        this.$router.push('/productos');
      } else {
        this.$router.push('/carrito');
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