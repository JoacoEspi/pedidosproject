<template>
  <ion-page>
    <ion-content class="ion-text-center">
      <ion-label >¿Esta seguro que desea deslogearse?</ion-label>
      <div>
        <ion-button @click="unlogear" color="medium" size="mediun">Confirmo</ion-button>
      <ion-button @click="aHome" color="medium" size="mediun">Volver</ion-button>
      </div>
      
    </ion-content>
  </ion-page>
</template>

<script>
// Preguntarle al usuario si realmente quiere salir de la sesion
// Luego de salir de la sesion dejar el usuario y el carrito en blanco
import { IonPage, IonButton, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";

export default {
  components: { IonPage, IonButton, IonContent },
  setup() {
    const store = useLoginStore();
    const { logout } = store;
    return { logout };
  },
  methods: {
    unlogear() {
      this.logout();
      this.$router.push("/");
    },
    aHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
