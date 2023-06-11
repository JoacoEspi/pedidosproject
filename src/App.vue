<template>
  <ion-app>
    <ion-menu side="start" content-id="main-content" @ionDidClose="closeMenu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menú</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-item>
            <RouterLink class="color" to="/">Home</RouterLink>
          </ion-item>
          <ion-item v-if="!isLogin">
            <RouterLink class="color" to="/login">Login</RouterLink>
          </ion-item>
          <ion-item>
            <RouterLink class="color" to="/productos">Productos</RouterLink>
          </ion-item>
          <ion-item>
            <RouterLink class="color" to="/reporte">Reporte</RouterLink>
          </ion-item>
          <ion-item v-if="carrito.length !== 0">
            <RouterLink  class="color" to="/carrito">Carrito</RouterLink>
          </ion-item>
          <ion-item v-if="isLogin">
            <RouterLink class="color" to="/logout">Logout</RouterLink>
          </ion-item>
        </ion-list>
        <ion-label v-if="isLogin" class="usuario">Usuario: {{ usuario.Email }}</ion-label>
      </ion-content>
    </ion-menu>

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Pedidos Project</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content id="main-content">
      <RouterView />
    </ion-content>
  </ion-app>
</template>

<script>
import { IonApp, IonHeader, IonLabel, IonMenu } from "@ionic/vue";
import { RouterLink, RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";

export default {
  components: { IonApp, IonHeader, IonLabel, IonMenu, RouterLink, RouterView },
  setup() {
    const store = useLoginStore();
    const { isLogin, usuario, carrito } = storeToRefs(store);

    const closeMenu = () => {
      const menuController = document.querySelector('ion-menu-controller');
      menuController.close();
    }

    return { isLogin, usuario, carrito, closeMenu };
  },
}
</script>

<style>
ion-header {
  font-family: 'Lucida Grande';
  font-size: large;
  text-align: center;
}

.usuario {
  font-family: 'Lucida Grande';
  color: gray;
  font-size: large;
}

.color {
  color: rgb(0, 0, 0);
}
</style>
