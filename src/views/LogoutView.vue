<template>
  <ion-page>
    <ion-content>
      <h2>¿Esta seguro que desea deslogearse?</h2>
      <ion-button @click="unlogear" color="danger">Confirmo</ion-button>
      <ion-button @click="aHome" color="warning">Volver</ion-button>
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
      this.$router.push("/login");
    },
    aHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
