<script lang="ts">
// En el home tendriamos: Nombre de la aplicacion y opciones para ingresar al usuario
// Esta enviaria al usuario a la vista de login
// Falta colocar boton de incio de sesion y logo de la aplicacion
import {IonPage} from '@ionic/vue'
import { IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
import { storeToRefs } from "pinia";
import { useLoginStore } from "../stores/login";
export default {
  components: {IonPage, IonImg, defineComponent },
  methods: {
    iniciarSesion(){
      this.$router.push("/login");
    },
    irAProductos(){
      this.$router.push("/productos");
    },
    irACarrito(){
      this.$router.push("/carrito")
    }
  },
  setup() {
    const store = useLoginStore();
    const {isLogin} = storeToRefs(store)
    return {isLogin}
  }
}

</script>




<template>
  <ion-content>
    <div class="logo-container">
      <ion-img src="./src/assets/logoProyecto.jpg" alt="Logo de mi proyecto" class="logo-image"></ion-img>
      <ion-button v-if="!isLogin" @click="iniciarSesion" class="button-left-margin">Iniciar sesión</ion-button>
      <ion-button v-if="isLogin" @click="irAProductos" class="button-left-margin">Productos</ion-button>
      <ion-button v-if="isLogin" @click="irACarrito" class="button-left-margin">Carrito</ion-button>
    </div>
  </ion-content>
</template>

<style>
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ajusta el valor según tus necesidades */
}

.logo-image {
  width: 200px; /* Ajusta el tamaño según tus necesidades */
  height: auto; /* Mantiene la proporción de aspecto */
  margin-bottom: 20px; /* Ajusta el valor del margen inferior según tus necesidades */
}
.button-left-margin {
  margin-right: 15px; /* Ajusta el valor según tus necesidades */
}
</style>